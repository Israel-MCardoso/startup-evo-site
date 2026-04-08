interface ModernBackgroundProps {
  className?: string;
}

export function ModernBackground({ className = "" }: ModernBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {/* Base gradient layer */}
      <div className="bg-base absolute inset-0" />

      {/* Glow layer */}
      <div className="absolute inset-0">
        <span className="glow glow-red-main" />
        <span className="glow glow-red-side" />
        <span className="glow glow-graphite" />
      </div>

      {/* Subtle grid/line layer */}
      <div className="absolute inset-0 grid-layer">
        <div className="grid-motion" />
        <div className="line-scan" />
      </div>

      {/* Ambient animated effects layer */}
      <div className="absolute inset-0 ambient-layer">
        <span className="ambient ambient-a" />
        <span className="ambient ambient-b" />
        <span className="ambient ambient-c" />
        <span className="flare flare-a" />
        <span className="flare flare-b" />
      </div>

      {/* Readability safety veil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,transparent_0%,rgba(0,0,0,0.22)_54%,rgba(0,0,0,0.74)_100%)]" />

      <style jsx>{`
        .bg-base {
          background:
            radial-gradient(95% 72% at 50% 0%, rgba(26, 27, 32, 0.52) 0%, rgba(7, 8, 11, 0) 72%),
            linear-gradient(155deg, #030304 0%, #07080b 44%, #050507 100%);
          animation: baseDrift 24s ease-in-out infinite alternate;
        }

        .glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(56px);
          will-change: opacity, transform;
        }

        .glow-red-main {
          width: min(42vw, 540px);
          height: min(42vw, 540px);
          left: 50%;
          top: 14%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(255, 36, 61, 0.22) 0%, rgba(255, 36, 61, 0.02) 68%, transparent 100%);
          animation: glowPulse 8s ease-in-out infinite;
        }

        .glow-red-side {
          width: min(30vw, 360px);
          height: min(30vw, 360px);
          right: 6%;
          top: 28%;
          background: radial-gradient(circle, rgba(255, 36, 61, 0.16) 0%, rgba(255, 36, 61, 0) 72%);
          animation: sideDrift 16s ease-in-out infinite;
        }

        .glow-graphite {
          width: min(48vw, 620px);
          height: min(38vw, 500px);
          left: -10%;
          bottom: -12%;
          background: radial-gradient(circle, rgba(82, 85, 95, 0.22) 0%, rgba(82, 85, 95, 0) 72%);
          animation: graphiteFloat 20s ease-in-out infinite alternate;
        }

        .grid-layer {
          opacity: 0.36;
          mask-image: radial-gradient(circle at 50% 34%, black 0%, black 58%, transparent 100%);
        }

        .grid-motion {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 72px 72px;
          animation: gridSlide 28s linear infinite;
        }

        .line-scan {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            transparent 0%,
            transparent 42%,
            rgba(255, 255, 255, 0.06) 50%,
            transparent 58%,
            transparent 100%
          );
          opacity: 0.2;
          animation: lineSweep 13s ease-in-out infinite;
        }

        .ambient-layer {
          opacity: 0.8;
        }

        .ambient {
          position: absolute;
          border-radius: 9999px;
          filter: blur(28px);
          will-change: transform, opacity;
        }

        .ambient-a {
          width: min(22vw, 280px);
          height: min(22vw, 280px);
          left: 16%;
          top: 18%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 75%);
          animation: ambientRise 18s ease-in-out infinite;
        }

        .ambient-b {
          width: min(18vw, 220px);
          height: min(18vw, 220px);
          left: 62%;
          top: 50%;
          background: radial-gradient(circle, rgba(255, 36, 61, 0.11) 0%, transparent 75%);
          animation: ambientRise 20s ease-in-out infinite reverse;
        }

        .ambient-c {
          width: min(15vw, 180px);
          height: min(15vw, 180px);
          right: 12%;
          bottom: 15%;
          background: radial-gradient(circle, rgba(204, 208, 221, 0.11) 0%, transparent 75%);
          animation: ambientRise 15s ease-in-out infinite;
          animation-delay: -6s;
        }

        .flare {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 52%, transparent 100%);
          filter: blur(0.5px);
          opacity: 0.24;
          will-change: transform, opacity;
        }

        .flare-a {
          width: 130%;
          left: -15%;
          top: 22%;
          transform: rotate(-8deg);
          animation: flareMove 11s ease-in-out infinite;
        }

        .flare-b {
          width: 120%;
          left: -10%;
          top: 66%;
          transform: rotate(-4deg);
          opacity: 0.16;
          animation: flareMove 13s ease-in-out infinite reverse;
        }

        @keyframes baseDrift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(0, -1.2%, 0) scale(1.02);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.52;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.86;
            transform: translateX(-50%) scale(1.08);
          }
        }

        @keyframes sideDrift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.44;
          }
          50% {
            transform: translate3d(-12px, -10px, 0);
            opacity: 0.74;
          }
        }

        @keyframes graphiteFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.42;
          }
          100% {
            transform: translate3d(12px, -16px, 0) scale(1.1);
            opacity: 0.64;
          }
        }

        @keyframes gridSlide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, 72px, 0);
          }
        }

        @keyframes lineSweep {
          0%,
          100% {
            opacity: 0.08;
            transform: translateX(-4%);
          }
          50% {
            opacity: 0.3;
            transform: translateX(4%);
          }
        }

        @keyframes ambientRise {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.34;
          }
          50% {
            transform: translate3d(0, -18px, 0);
            opacity: 0.72;
          }
        }

        @keyframes flareMove {
          0%,
          100% {
            opacity: 0.12;
            transform: translate3d(0, 0, 0) rotate(-8deg);
          }
          50% {
            opacity: 0.32;
            transform: translate3d(0, -10px, 0) rotate(-8deg);
          }
        }

        @media (max-width: 768px) {
          .grid-layer {
            opacity: 0.26;
          }

          .glow-red-main {
            width: min(70vw, 420px);
            height: min(70vw, 420px);
            top: 18%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-base,
          .glow,
          .grid-motion,
          .line-scan,
          .ambient,
          .flare {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

