import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Sertifikat.css';
import '../styles/ScrollReveal.css';
import CertificateModal from './CertificateModal';
import { useState } from 'react';

interface CertItem {
  name: string;
  images: string[];
}

interface sertifikatGroup {
  category: string;
  icon: string;
  items: CertItem[];
}

export default function Sertifikat() {
  const { ref, isVisible } = useScrollReveal();
  const [modalData, setModalData] = useState<{ name: string; images: string[] } | null>(null);

  const sertifikatGroups: sertifikatGroup[] = [
    {
      category: 'Frontend',
      icon: '🌿',
      items: [
        { name: 'React', images: ['images/sertifikat/react/react1.jpg', 'images/sertifikat/react/react2.jpg'] },
        { name: 'TypeScript', images: ['/certificates/typescript-1.jpg'] },
        { name: 'CSS3', images: [] },
        { name: 'HTML5', images: [] },
        { name: 'Tailwind CSS', images: ['/certificates/tailwind-1.jpg'] },
        { name: 'Vite', images: [] },
        { name: 'Expo', images: [] },
      ],
    },
    {
      category: 'Backend',
      icon: '🌳',
      items: [
        { name: 'Node.js', images: ['/certificates/nodejs-1.jpg'] },
        { name: 'PostgreSQL', images: [] },
        { name: 'MySQL', images: [] },
        { name: 'REST API', images: [] },
        { name: 'Firebase', images: ['/certificates/firebase-1.jpg'] },
        { name: 'Laravel', images: ['/certificates/laravel-1.jpg', '/certificates/laravel-2.jpg'] },
      ],
    },
    {
      category: 'Tools & Others',
      icon: '🍃',
      items: [
        { name: 'Git', images: [] },
        { name: 'GitHub', images: ['/certificates/github-1.jpg'] },
        { name: 'VS Code', images: [] },
        { name: 'Figma', images: ['/certificates/figma-1.jpg'] },
        { name: 'npm/yarn', images: [] },
        { name: 'Docker', images: ['/certificates/docker-1.jpg'] },
        { name: 'Jenkins', images: [] },
      ],
    },
  ];

  return (
    <>
      <section id="sertifikat" className="sertifikat">
        <div
          ref={ref}
          className={`sertifikat-container reveal-fade-up ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">My Skill and Sertifikat</h2>
          <p className="section-description">
            Berikut adalah teknologi dan tools yang saya gunakan untuk mengembangkan aplikasi web
          </p>

          <div className={`sertifikat-grid reveal-stagger ${isVisible ? 'visible' : ''}`}>
            {sertifikatGroups.map((group, index) => (
              <div key={index} className="sertifikat-card">
                <div className="sertifikat-card-header">
                  <span className="sertifikat-icon">{group.icon}</span>
                  <h3 className="sertifikat-category">{group.category}</h3>
                </div>
                <div className="sertifikat-items">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className={`sertifikat-tag ${item.images.length > 0 ? 'has-certificate' : ''}`}
                      onClick={() => item.images.length > 0 && setModalData({ name: item.name, images: item.images })}
                    >
                      {item.name}
                      {item.images.length > 1 && (
                        <span className="cert-count">{item.images.length}</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalData && (
        <CertificateModal
          name={modalData.name}
          images={modalData.images}
          onClose={() => setModalData(null)}
        />
      )}
    </>
  );
}