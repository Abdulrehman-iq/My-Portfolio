// src/data/projects.ts
import { Project } from '../../components/Projects/project';

export const webProjects: Project[] = [
  

  {
    title: "AR Clothing Store",
    description: "Virtual try-on platform using augmented reality and machine learning",
    tech: ["React", "Python", "OpenCV", "TensorFlow"],
    type: "web",
    image: "/projects/ar-store.png",
    status: "coming-soon"
  }
];

export const mobileProjects: Project[] = [
  {
    title: "Ride By App",
    description: "Modern ride sharing mobile application with real-time tracking and payment integration",
    tech: ["React Native", "Firebase", "Google Maps", "Stripe"],
    type: "mobile",
    image: "/projects/rideby.png",
    status: "completed",
  },
  {
    title: "Virtual Study Group",
    description: "Collaborative learning platform with video conferencing and resource sharing",
    tech: ["Flutter", "Firebase", "WebRTC", "Cloud Functions"],
    type: "mobile",
    image: "/projects/study.png",
    status: "completed",
  }
];

export const experiences: Project[] = [
  {
    title: "Fastiya Logistics",
    description: "Full-stack logistics management system",
    tech: ["Next.js", "MongoDB", "Express", "Node.js"],
    type: "web",
    image: "/projects/fastiya.png",
    link: "https://fastiya.co.uk",
    status: "completed"
  },
  {
    title: "Hawa's Boutique",
    description: "E-commerce platform for a UK-based fashion retailer with integrated payment processing, inventory management, and customer analytics.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    type: "web",
    image: "/projects/hawas.png",
    link: "https://hawas.co.uk",
    status: "completed"
  }
];