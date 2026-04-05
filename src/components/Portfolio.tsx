import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Portfolio.css';
import '../styles/ScrollReveal.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github?: string;
}

export default function Portfolio() {
  const { ref, isVisible } = useScrollReveal();
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce lengkap dengan fitur shopping cart, payment gateway, dan admin dashboard untuk mengelola produk.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      link: 'https://example-ecommerce.com',
      github: 'https://github.com/username/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur real-time sync, kategori, dan notifikasi pengingat untuk produktivitas maksimal.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: '✓',
      link: 'https://example-tasks.com',
      github: 'https://github.com/username/tasks'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Platform blogging dengan fitur markdown editor, category tagging, dan pembaca yang dapat memberikan komentar.',
      technologies: ['React', 'Next.js', 'PostgreSQL', 'TypeScript'],
      image: '📝',
      link: 'https://example-blog.com',
      github: 'https://github.com/username/blog'
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div 
        ref={ref}
        className={`portfolio-container reveal-fade-up ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-description">
          Beberapa project terbaru yang telah saya kerjakan dengan berbagai teknologi modern
        </p>

        <div className={`portfolio-grid reveal-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="card-image">
                <span className="image-emoji">{project.image}</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn live">
                    Live Demo
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
