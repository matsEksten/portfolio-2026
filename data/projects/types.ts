export type TechItem = {
  name: string;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  tech: TechItem[];
};
