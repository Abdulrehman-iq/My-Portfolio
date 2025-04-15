// Update Project interface
export interface Project {
  title: string;
  description: string;
  tech: string[];
  type: 'web' | 'mobile';
  image: string;
  link?: string;
  status: 'completed' | 'in-development' | 'in-progress' | 'coming-soon';
}