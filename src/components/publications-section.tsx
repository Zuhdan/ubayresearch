import PublicationCard from './publication-card';

const publications = [
  {
    id: 1,
    title: 'The Role of AI in Modern Scientific Discovery',
    authors: 'Dr. Evelyn Reed, Dr. Ben Carter',
    journal: 'Journal of Innovative Computing, Vol. 42, 2023',
    imageId: 'paper-1',
    paperText: 'The advent of Artificial Intelligence (AI) has catalyzed a paradigm shift in scientific research. This paper explores the multifaceted role of AI, from automated data analysis and hypothesis generation to the simulation of complex systems. We present several case studies across disciplines, including genomics, material science, and astrophysics, demonstrating how machine learning models have accelerated the pace of discovery. We also discuss the ethical implications and future challenges, such as model interpretability and the potential for algorithmic bias. Our findings suggest that a symbiotic relationship between human researchers and AI tools is crucial for navigating the next era of scientific exploration.'
  },
  {
    id: 2,
    title: 'Quantum-Resistant Cryptography for Secure Communications',
    authors: 'Dr. Ben Carter',
    journal: 'Cybersecurity Quarterly, Vol. 18, 2023',
    imageId: 'paper-2',
    paperText: 'As quantum computers become more powerful, they pose a significant threat to current cryptographic standards. This paper reviews the state-of-the-art in quantum-resistant cryptography (QRC). We analyze several promising approaches, including lattice-based, code-based, and hash-based cryptography. We provide a comparative analysis of their security properties, performance overhead, and implementation readiness. Furthermore, we propose a hybrid cryptographic scheme that combines classical and quantum-resistant algorithms to ensure a smooth transition and robust security in the post-quantum era. Our work aims to guide the development and deployment of next-generation secure communication protocols.'
  },
  {
    id: 3,
    title: 'Ethical Frameworks for Natural Language Processing Models',
    authors: 'Aisha Khan, Dr. Evelyn Reed',
    journal: 'AI & Society, Vol. 38, 2024',
    imageId: 'paper-3',
    paperText: 'Large-scale Natural Language Processing (NLP) models have demonstrated remarkable capabilities, but their societal impact necessitates a robust ethical framework. This paper addresses the critical ethical challenges in NLP, including bias, fairness, transparency, and accountability. We propose a multi-layered ethical framework that integrates technical solutions, such as debiasing techniques and model auditability, with procedural guidelines for data governance and stakeholder engagement. Through a series of real-world scenarios, we illustrate how this framework can be applied to mitigate risks and promote responsible innovation. We conclude by advocating for an interdisciplinary approach to AI ethics that involves researchers, policymakers, and the public.'
  },
];

export type Publication = typeof publications[0];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Publications</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our latest contributions to the world of science and technology.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publications.map(pub => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PublicationsSection;
