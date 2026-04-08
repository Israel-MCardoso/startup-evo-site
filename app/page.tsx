import { HeroSection } from "@/components/hero/HeroSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased">
      <HeroSection />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-8 backdrop-blur md:p-12">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">Next Sections</p>
          <h2 className="mt-4 text-2xl font-semibold text-zinc-100 md:text-4xl">
            Continue your production page here.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            The hero above is fully layered and ready for future scroll-linked visual beats.
          </p>
        </div>
      </section>
    </main>
  );
}
