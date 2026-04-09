import { useState, useEffect, useCallback } from 'react';

interface Props {
  name: string;
  images: string[];
  onClose: () => void;
}

export default function CertificateModal({ name, images, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex(i => Math.min(images.length - 1, i + 1)), [images.length]);

  useEffect(() => {
    setImgError(false);
  }, [index]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  return (
    <div className="cert-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="cert-modal">
        <div className="cert-modal-header">
          <h4>{name}</h4>
          <div className="cert-modal-meta">
            {images.length > 1 && (
              <span className="cert-modal-count">{index + 1} / {images.length}</span>
            )}
            <button className="cert-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        <div className="cert-carousel">
          {!imgError ? (
            <img
              src={images[index]}
              alt={`Sertifikat ${name} ${index + 1}`}
              className="cert-carousel-img"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="cert-img-placeholder">
              <span>Gambar tidak ditemukan</span>
              <code>{images[index]}</code>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="cert-carousel-nav">
            <button className="cert-nav-btn" onClick={prev} disabled={index === 0}>← Prev</button>
            <div className="cert-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`cert-dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button className="cert-nav-btn" onClick={next} disabled={index === images.length - 1}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
}