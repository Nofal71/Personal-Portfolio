import Project1 from './Project1.PNG';
import Project2 from './Project2.PNG';
import Project3 from './Project3.PNG';
import Project4 from './Project4.PNG';
import Project5 from './Project5.PNG';
import ProfilePhoto from './Profile-Photo.jpg';
import CV from './CV.pdf';

export const projectInfo = [
    {
        id: 1,
        live: 'https://pos-system-eight-lilac.vercel.app/',
        image: Project1,
        name: 'E-Commerce Store',
        description: 'Full-featured online store with product catalog, shopping cart management, and a seamless checkout experience built with React & Redux Toolkit.',
        tech: ['React', 'Redux Toolkit', 'MUI', 'Axios'],
        github: 'https://github.com/Nofal71/e-commerce-site',
        featured: true,
        category: 'app',
        color: '#4CAF50',
    },
    {
        id: 2,
        live: 'https://point-of-sale-dashboard.vercel.app/',
        image: Project5,
        name: 'POS Dashboard',
        description: 'Comprehensive Point-of-Sale dashboard with sales analytics, inventory management, and real-time data visualizations for business insights.',
        tech: ['React', 'MUI', 'React Query', 'Charts'],
        github: 'https://github.com/Nofal71/Point-of-Sale-Dashboard',
        featured: true,
        category: 'app',
        color: '#2196F3',
    },
    {
        id: 3,
        live: 'https://super-agency.vercel.app/',
        image: Project3,
        name: 'Super Agency',
        description: 'Modern agency landing page with animated hero sections, glassmorphism design effects, and pixel-perfect responsive layout.',
        tech: ['React', 'Framer Motion', 'MUI', 'CSS3'],
        github: 'https://github.com/Nofal71/super-agency',
        featured: false,
        category: 'landing',
        color: '#9C27B0',
    },
    {
        id: 4,
        live: 'https://to-do-app-chi-livid.vercel.app/',
        image: Project4,
        name: 'Task Manager',
        description: 'Clean and intuitive task management app with full CRUD operations, category filters, and smooth UI interactions.',
        tech: ['React', 'JavaScript', 'CSS3'],
        github: 'https://github.com/Nofal71/to-do-app',
        featured: false,
        category: 'app',
        color: '#FF9800',
    },
    {
        id: 5,
        live: '',
        image: null,
        name: 'ReactSnap Boilerplate',
        description: 'Open-source React starter template with pre-configured Redux, authentication flows, routing, and reusable UI feedback components — ready to ship.',
        tech: ['React', 'Redux', 'React Router', 'MUI', 'Axios'],
        github: 'https://github.com/Nofal71/SnapReact',
        featured: true,
        category: 'tool',
        color: '#E63E21',
    },
    {
        id: 6,
        live: '',
        image: Project2,
        name: 'Portfolio Website',
        description: 'This very portfolio — crafted with React, MUI & Framer Motion. Dark theme, scroll-triggered animations, and fully responsive across all devices.',
        tech: ['React', 'TypeScript', 'MUI', 'Framer Motion'],
        github: 'https://github.com/Nofal71/Personal-Portfolio',
        featured: false,
        category: 'landing',
        color: '#607D8B',
    },
];

export const photo = ProfilePhoto;
export const cv = CV;
