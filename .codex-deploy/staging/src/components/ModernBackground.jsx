export default function ModernBackground() {
  const subtleStars = Array.from({ length: 72 }, (_, index) => {
    const left = (index * 37) % 100;
    const top = (index * 61) % 100;
    const size = index % 11 === 0 ? 2.1 : index % 4 === 0 ? 1.6 : 1.1;
    const duration = 4.8 + (index % 7) * 0.9;
    const delay = (index % 9) * -0.55;
    const opacity = 0.3 + (index % 6) * 0.08;
    return { left, top, size, duration, delay, opacity };
  });

  const accentStars = Array.from({ length: 14 }, (_, index) => {
    const left = (index * 67 + 9) % 100;
    const top = (index * 41 + 13) % 88;
    const duration = 6.4 + (index % 5) * 0.8;
    const delay = (index % 6) * -0.9;
    return { left, top, duration, delay };
  });

  return (
    <div className="modern-background" aria-hidden="true">
      <div className="modern-bg-base" />

      <div className="modern-bg-stars">
        <div className="modern-starfield modern-starfield-far" />
        <div className="modern-starfield modern-starfield-mid" />
        <div className="modern-stars-points">
          {subtleStars.map((star) => (
            <span
              key={`subtle-${star.left}-${star.top}`}
              className="modern-star-point"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
        <div className="modern-stars-accents">
          {accentStars.map((star) => (
            <span
              key={`accent-${star.left}-${star.top}`}
              className="modern-star-accent"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="modern-bg-vignette" />
    </div>
  );
}
