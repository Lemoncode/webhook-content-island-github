export interface Experience {
  id: string;
  language: 'en' | 'es';
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ExperienceSection {
  id: string;
  language: 'en' | 'es';
  title: string;
  experienceCollection: Experience[];
}
