import { ModernBackground } from "@/components/background/ModernBackground";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <ModernBackground className="-z-30" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.54)_56%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-6 py-20 md:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-200/90 backdrop-blur">
              Premium Technology Studio
            </p>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-white md:text-6xl lg:text-7xl">
              Digital products engineered for scale and branded for impact.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 md:text-lg">
              We design and build web systems, mobile experiences, and AI-powered operations with
              a cinematic visual language and enterprise-grade architecture.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="relative z-20 inline-flex items-center rounded-full bg-[#ff2238] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_42px_rgba(255,34,56,0.38)] transition hover:bg-[#ff3348] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2238] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="relative z-20 inline-flex items-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                See Case Studies
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">Web Platforms</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">Mobile Apps</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">Automation + AI</span>
            </div>
          </div>

          <aside className="relative z-20 self-end">
            <div className="rounded-3xl border border-white/10 bg-zinc-950/65 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Delivery Velocity</p>
              <div className="mt-6 grid gap-4">
                <MetricCard value="2-6 weeks" label="Launch windows for focused scopes" />
                <MetricCard value="99.95%" label="Target operational uptime" />
                <MetricCard value="Realtime" label="Integrated dashboards and automation flows" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  value: string;
  label: string;
}

function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm leading-relaxed text-zinc-300">{label}</p>
    </div>
  );
}
