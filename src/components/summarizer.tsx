'use client';

import React, { useState, useTransition } from 'react';
import { getSummary } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, BookOpenText } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const Summarizer = () => {
  const [paperText, setPaperText] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSummary('');
    setError(null);

    if (!paperText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Input Required',
        description: 'Please paste the text of a research paper to summarize.',
      });
      return;
    }

    startTransition(async () => {
      const result = await getSummary(paperText);
      if (result.summary) {
        setSummary(result.summary);
      } else {
        setError(result.error);
        toast({
          variant: 'destructive',
          title: 'Summarization Failed',
          description: result.error,
        });
      }
    });
  };

  return (
    <div className="w-full max-w-4xl">
       <div className="flex items-center justify-center mb-8 space-x-2">
            <BookOpenText className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">ubayresearch.org</span>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Paper to Summarize</CardTitle>
            <CardDescription>Paste the full text of the research paper below.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="paper-text" className="sr-only">
                  Paper Text
                </Label>
                <Textarea
                  id="paper-text"
                  name="paper-text"
                  placeholder="Start by pasting the content of a research paper here..."
                  value={paperText}
                  onChange={(e) => setPaperText(e.target.value)}
                  required
                  rows={15}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Summarizing...
                  </>
                ) : (
                  'Generate Summary'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>AI-Generated Summary</CardTitle>
            <CardDescription>The concise summary will appear here.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[350px] pr-4">
              {isPending && !summary && (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-muted-foreground">Generating summary...</p>
                </div>
              )}
              {error && (
                 <div className="text-destructive-foreground bg-destructive p-4 rounded-md h-full flex items-center justify-center">
                    <p>{error}</p>
                 </div>
              )}
              {!isPending && !error && !summary && (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Waiting for input...</p>
                </div>
              )}
              {summary && (
                <div className="space-y-4 text-sm text-foreground/90 leading-relaxed">
                  {summary.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Summarizer;
