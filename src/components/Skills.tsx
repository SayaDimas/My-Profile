import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Skills.css';
import '../styles/ScrollReveal.css';

interface Skill {
  category: string;
  items: string[];
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  const skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'CSS3', 'HTML5', 'Tailwind CSS', 'Vite', 'Expo']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'PostgreSQL', 'mysql', 'REST API', 'Firebase', 'Laravel']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'npm/yarn', 'Docker', 'Jenkins']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div 
        ref={ref}
        className={`skills-container reveal-fade-up ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="section-title">My Skills</h2>
        <p className="section-description">
          Berikut adalah teknologi dan tools yang saya gunakan untuk mengembangkan aplikasi web
        </p>

        <div className={`skills-grid reveal-stagger ${isVisible ? 'visible' : ''}`}>
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
