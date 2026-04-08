import { useState, useEffect, useCallback } from 'react';

const isVideoFile = (src = '') => /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

const MediaSlide = ({ src, alt, className }) => {
  if (isVideoFile(src)) {
    return (
      <video
        src={src}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export const AppInterface = ({ screenshots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!screenshots || screenshots.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [screenshots]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {screenshots.map((src, index) => (
          <div key={index} className="slide">
            <MediaSlide
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="app-screenshot"
            />
          </div>
        ))}
      </div>

      <div className="slider-dots-container">
        <div className="dots-wrapper">
          {screenshots.map((_, index) => (
            <div
              key={index}
              className="dot-bg"
              onClick={() => setCurrentSlide(index)}
            />
          ))}
          <div
            className="active-indicator"
            style={{
              left: `${12 + (currentSlide * 20)}px`
            }}
          />
        </div>
      </div>
    </div>
  );
};

const MockupIphone = ({ screenshots, label }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePointerDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches?.[0]?.clientX || 0);
  }, []);

  const handlePointerUp = useCallback((e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.clientX || e.changedTouches?.[0]?.clientX || 0;
    const diff = startX - endX;
    if (Math.abs(diff) > 30) {
      setCurrentSlide((prev) => {
        if (diff > 0) return Math.min(prev + 1, screenshots.length - 1);
        return Math.max(prev - 1, 0);
      });
    }
  }, [isDragging, startX, screenshots.length]);

  useEffect(() => {
    if (!screenshots || screenshots.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [screenshots]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className="iphone-wrapper">
      <div className="iphone-frame">
        <div className="phone-btn btn-silent" />
        <div className="phone-btn btn-up" />
        <div className="phone-btn btn-down" />
        <div className="phone-btn btn-power" />
        <div
          className="phone-screen"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div
            className="phone-slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {screenshots.map((src, index) => (
              <MediaSlide
                key={index}
                src={src}
                alt={`${label} screenshot ${index + 1}`}
                className="phone-screenshot"
              />
            ))}
          </div>

          <div className="phone-dots">
            {screenshots.map((_, index) => (
              <span
                key={index}
                className={`phone-dot ${index === currentSlide ? 'active-dot' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      {label && <p className="phone-label">{label}</p>}
    </div>
  );
};

export default MockupIphone;
