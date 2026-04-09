import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Portfolio.css';
import '../styles/ScrollReveal.css';
import PreviewModal from '../components/PreviewModal';
import '../styles/PreviewModal.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github?: string;
  category: 'Website' | 'Mobile Apps' | 'Design' | 'Others';
  images: string[];
}

type Category = 'Website' | 'Mobile Apps' | 'Design' | 'Others';

export default function Portfolio() {
  const { ref, isVisible } = useScrollReveal();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce lengkap dengan fitur shopping cart, payment gateway, dan admin dashboard untuk mengelola produk.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      link: 'https://example-ecommerce.com',
      github: 'https://github.com/username/ecommerce',
      category: 'Website',
      images: [
        'images/sertifikat/react/react1.jpg',
        'https://example-ecommerce.com/products',
        'https://example-ecommerce.com/dashboard',
      ],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur real-time sync, kategori, dan notifikasi pengingat untuk produktivitas maksimal.',
      technologies: ['React Native', 'Firebase', 'Expo'],
      image: '✓',
      link: 'https://example-tasks.com',
      github: 'https://github.com/username/tasks',
      category: 'Mobile Apps',
      images: [
        'https://example-tasks.com',
        'https://example-tasks.com/board',
        'https://example-tasks.com/calendar',
      ],
    },
    {
      id: 3,
      title: 'UI Kit Design',
      description: 'Comprehensive design system dengan reusable components, color palette, typography, dan guidelines untuk konsistensi visual.',
      technologies: ['Figma', 'Adobe XD', 'Design System'],
      image: '🎨',
      link: 'https://example-design.com',
      github: undefined,
      category: 'Design',
      images: [
        'https://example-design.com',
        'https://example-design.com/components',
      ],
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Aplikasi dashboard cuaca real-time dengan visualisasi data interaktif dan forecast jangka panjang.',
      technologies: ['React', 'Chart.js', 'Weather API'],
      image: '🌤️',
      link: 'https://example-weather.com',
      github: 'https://github.com/username/weather',
      category: 'Website',
      images: [
        'https://example-weather.com',
        'https://example-weather.com/forecast',
        'https://example-weather.com/map',
      ],
    },
    {
      id: 5,
      title: 'Fitness Tracker Mobile',
      description: 'Aplikasi mobile untuk tracking workout, calories, dan health metrics dengan social features.',
      technologies: ['Flutter', 'Firebase', 'Provider'],
      image: '💪',
      link: 'https://example-fitness.com',
      github: 'https://github.com/username/fitness',
      category: 'Mobile Apps',
      images: [
        'https://example-fitness.com',
        'https://example-fitness.com/workout',
      ],
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Platform blogging dengan fitur markdown editor, category tagging, dan pembaca yang dapat memberikan komentar.',
      technologies: ['React', 'Next.js', 'PostgreSQL', 'TypeScript'],
      image: '📝',
      link: 'https://example-blog.com',
      github: 'https://github.com/username/blog',
      category: 'Website',
      images: [
        'https://example-blog.com',
        'https://example-blog.com/editor',
        'https://example-blog.com/post',
      ],
    },
    {
      id: 7,
      title: 'Brand Identity',
      description: 'Comprehensive brand identity project termasuk logo design, color scheme, dan brand guidelines lengkap.',
      technologies: ['Adobe Creative Suite', 'Illustrator', 'InDesign'],
      image: '✨',
      link: 'https://example-brand.com',
      github: undefined,
      category: 'Design',
      images: [
        'https://example-brand.com',
        'https://example-brand.com/guidelines',
      ],
    },
    {
      id: 8,
      title: 'Video Editor Utility',
      description: 'Tool utility untuk editing video dengan fitur trim, filter, dan export dalam berbagai format.',
      technologies: ['Python', 'FFmpeg', 'OpenCV'],
      image: '🎬',
      link: 'https://example-video.com',
      github: 'https://github.com/username/video',
      category: 'Others',
      images: [
        'https://example-video.com',
        'https://example-video.com/editor',
      ],
    },
  ];

  const categories: Category[] = ['Website', 'Mobile Apps', 'Design', 'Others'];

  const getProjectsByCategory = (category: Category) => {
    return projects.filter((project) => project.category === category);
  };

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div
          ref={ref}
          className={`portfolio-container reveal-fade-up ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-description">
            Beberapa project terbaru yang telah saya kerjakan dengan berbagai teknologi modern
          </p>

          {categories.map((category) => {
            const categoryProjects = getProjectsByCategory(category);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category} className="portfolio-category">
                <h3 className="category-title">{category}</h3>
                <div className={`portfolio-grid reveal-grid ${isVisible ? 'visible' : ''}`}>
                  {categoryProjects.map((project) => (
                    <div key={project.id} className="portfolio-card">
                      <div className="card-image">
                        <span className="image-emoji">{project.image}</span>
                      </div>
                      <div className="card-content">
                        <h4 className="card-title">{project.title}</h4>
                        <p className="card-description">{project.description}</p>
                        <div className="card-technologies">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="card-links">
                          <button
                            onClick={() => setActiveProject(project)}
                            className="link-btn preview"
                          >
                            Preview
                          </button>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-btn github"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal dirender di luar <section> agar position: fixed bekerja normal */}
      {activeProject && (
        <PreviewModal
          title={activeProject.title}
          link={activeProject.link}
          images={activeProject.images}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
