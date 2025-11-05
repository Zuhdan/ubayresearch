import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Principal Investigator',
    bio: 'Expert in machine learning and computational biology. Leads the AI-driven research initiatives.',
    imageId: 'member-1'
  },
  {
    name: 'Dr. Ben Carter',
    role: 'Senior Researcher',
    bio: 'Specializes in data visualization and quantum computing. Passionate about making complex data understandable.',
    imageId: 'member-2'
  },
  {
    name: 'Aisha Khan, PhD Candidate',
    role: 'Research Fellow',
    bio: 'Focuses on natural language processing and ethical AI. Exploring the societal impact of our research.',
    imageId: 'member-3'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A dedicated group of scientists and engineers pushing the boundaries of technology.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const memberImage = placeholderImages.find(p => p.id === member.imageId);
            return (
              <Card key={member.name} className="text-center transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      width={128}
                      height={128}
                      className="rounded-full mx-auto shadow-md"
                      data-ai-hint={memberImage.imageHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
