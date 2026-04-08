const BackgroundSilk = () => {
  return (
    <div className="background-silk-container" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="silkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="silkBlur">
            <feGaussianBlur stdDeviation="40" />
          </filter>
          <filter id="edgeGlow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Ondas Esfumaçadas Largas */}
        <path
          d="M-100,300 C200,100 400,600 1100,400"
          stroke="url(#silkGradient)"
          strokeWidth="150"
          fill="none"
          filter="url(#silkBlur)"
          opacity="0.5"
        />
        <path
          d="M-100,700 C300,500 600,900 1100,600"
          stroke="url(#silkGradient)"
          strokeWidth="200"
          fill="none"
          filter="url(#silkBlur)"
          opacity="0.4"
        />

        {/* Riscos Brilhantes Finos (Highlight Edges) */}
        <path
          d="M-100,310 C200,110 400,610 1100,410"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
          filter="url(#edgeGlow)"
        />
        <path
          d="M-100,690 C300,490 600,890 1100,590"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          fill="none"
          filter="url(#edgeGlow)"
        />
      </svg>

      {/* Overlay de granulado sutil para qualidade empresarial */}
      <div className="noise-overlay" />
    </div>
  );
};

export default BackgroundSilk;
