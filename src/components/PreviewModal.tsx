import { useState, useEffect, useCallback } from 'react';

interface Props {
  title: string;
  link: string;
  images: string[];
  onClose: () => void;
}

export default function PreviewModal({ title, link, images, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex(i => Math.min(images.length - 1, i + 1)), [images.length]);

  useEffect(() => {
    setImgLoaded(false);
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

  const isLocal = (url: string) =>
    url.startsWith('/') || !url.startsWith('http');

  const getImageUrl = (url: string) => {
    if (isLocal(url)) return url.startsWith('/') ? url : `/${url}`;
    return `https://image.thum.io/get/width/640/crop/360/${url}`;
  };

  const getThumbUrl = (url: string) => {
    if (isLocal(url)) return url.startsWith('/') ? url : `/${url}`;
    return `https://image.thum.io/get/width/120/crop/80/${url}`;
  };

  return (
    <div
      className="preview-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="preview-modal">

        {/* Header */}
        <div className="preview-modal-header">
          <div className="preview-modal-title">
            <h4>{title}</h4>
            <small>{link}</small>
          </div>
          <div className="preview-modal-meta">
            {images.length > 1 && (
              <span className="preview-modal-count">{index + 1} / {images.length}</span>
            )}
            <button className="preview-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Carousel */}
        <div className="preview-carousel">
          {!imgError ? (
            <>
              {!imgLoaded && (
                <div className="preview-img-loading">
                  <div className="preview-spinner" />
                  <span>Memuat preview...</span>
                </div>
              )}
              <img
                key={index}
                src={getImageUrl(images[index])}
                alt={`Preview ${title} ${index + 1}`}
                className="preview-carousel-img"
                style={{ opacity: imgLoaded ? 1 : 0 }}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            </>
          ) : (
            <div className="preview-img-placeholder">
              <span>🌐</span>
              <p>Preview tidak tersedia</p>
            </div>
          )}
        </div>

        {/* Nav: panah + dots */}
        {images.length > 1 && (
          <div className="preview-carousel-nav">
            <button
              className="preview-nav-btn"
              onClick={prev}
              disabled={index === 0}
            >
              ← Prev
            </button>
            <div className="preview-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`preview-dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button
              className="preview-nav-btn"
              onClick={next}
              disabled={index === images.length - 1}
            >
              Next →
            </button>
          </div>
        )}

        {/* Footer: thumbnail strip + tombol aksi */}
        <div className="preview-modal-footer">
          {images.length > 1 && (
            <div className="preview-thumb-strip">
              {images.map((url, i) => (
                <div
                  key={i}
                  className={`preview-thumb ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                >
                  <img
                    src={getThumbUrl(url)}
                    alt={`Thumbnail ${i + 1}`}
                    onError={e => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="preview-footer-actions">
            <button className="preview-btn-close" onClick={onClose}>
              Tutup
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-btn-visit"
            >
              Kunjungi Website
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
