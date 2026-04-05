import { useScrollReveal } from '../hooks/useScrollReveal';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';
import '../styles/ScrollReveal.css';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [state, handleSubmit] = useForm("meeppnky"); // Ganti dengan Formspree ID Anda

  if (state.succeeded) {
    return (
      <section id="contact" className="contact">
        <div 
          ref={ref}
          className={`contact-container reveal-fade-up ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Ada pertanyaan atau menawarkan proyek? Silakan hubungi saya melalui form di bawah
          </p>

          <div className="contact-wrapper success-message">
            <div className="success-content">
              <h3>✅ Pesan Terkirim!</h3>
              <p>Terima kasih telah mengirimkan pesan. Saya akan merespons Anda secepat mungkin.</p>
              <button 
                onClick={() => window.location.reload()} 
                className="submit-btn"
              >
                Kirim Pesan Lagi
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div 
        ref={ref}
        className={`contact-container reveal-fade-up ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          Ada pertanyaan atau menawarkan proyek? Silakan hubungi saya melalui form di bawah
        </p>

        <div className={`contact-wrapper reveal-stagger ${isVisible ? 'visible' : ''}`}>
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:dimasrifkinuramadani@gmail.com">dimasrifkinuramadani@gmail.com</a></p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p><a href="tel:+6285849229138">+62 85849229138</a></p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Masukkan nama Anda"
              />
              <ValidationError 
                prefix="Nama" 
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Masukkan email Anda"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tulis pesan Anda di sini"
              ></textarea>
              <ValidationError 
                prefix="Pesan" 
                field="message"
                errors={state.errors}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={state.submitting}
            >
              {state.submitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
