import { useTypewriter } from '../hooks/useTypewriter';
import AnimatedBackground from './AnimatedBackground';
import '../styles/Hero.css';

export default function Hero() {
  const { displayText, isComplete } = useTypewriter({
    text: "Hi, I'm Dimas Rifki Nuramadani",
    speed: 80,
    delay: 300
  });

  // ===== CARA MENGGUNAKAN FOTO PROFILE =====
  // 1. Letakkan foto Anda di folder: public/images/profile.jpg
  // 2. Ubah URL di bawah menjadi: /images/profile.jpg
  // 3. Atau gunakan URL foto dari internet (contoh: https://...)
  // 4. Pastikan foto berformat: JPG, PNG, atau WEBP
  // =========================================

  const profileImageUrl = '/images/foto.jpeg';
  // Ubah ke: '/images/profile.jpg' atau URL Anda sendiri

  return (
    <section id="home" className="hero">
      <AnimatedBackground />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="typewriter-text">{displayText}</span>
            <span className={`cursor ${isComplete ? 'hidden' : ''}`}></span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer | React Enthusiast | Web Designer | Mobile Development</p>
          <p className="hero-description">
            Saya memiliki pengalaman 2+ tahun dalam pengembangan aplikasi full-stack (Web & Mobile) menggunakan Laravel dan React Native. Terbiasa membangun website dan mobile apps dengan fokus pada backend, integrasi frontend, dan DevOps. Memiliki kemampuan analisis yang baik, terstruktur, dan berorientasi pada hasil.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <img 
              src={profileImageUrl}
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
