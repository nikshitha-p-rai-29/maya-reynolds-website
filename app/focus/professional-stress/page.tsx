export default function ProfessionalStressFocusPage() {
  return (
    <main className="min-h-screen bg-[#F3F0E8] text-[#26352F]">
      {/* Header */}
      <header className="border-b border-[#D9DDD5] bg-[#F3F0E8]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-medium tracking-wide">
            Dr. Maya Reynolds, PsyD
          </a>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="/" className="hover:text-[#526B5B]">Home</a>
            <a href="/about" className="hover:text-[#526B5B]">About</a>
            <a href="/services/anxiety" className="hover:text-[#526B5B]">Services</a>
            <a href="/approach" className="hover:text-[#526B5B]">Approach</a>
            <a href="/#office" className="hover:text-[#526B5B]">Office</a>
            <a
              href="/contact"
              className="rounded-full bg-[#26352F] px-5 py-2.5 text-white hover:bg-[#405747]"
            >
              Schedule a Consultation
            </a>
          </nav>
        </div>
      </header>
      <div className="px-6 pt-4 sm:hidden">
  <a
    href="/"
    className="text-2xl text-[#26352F]"
  >
    ←
  </a>
</div>

      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#526B5B]">
            Area of Focus
          </p>

          <h1 className="text-4xl leading-tight md:text-6xl">
            Professional Stress Therapy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F675F]">
            Support for the pressure, expectations, and stress that can come
            with demanding work and professional life.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF9F5] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#526B5B]">
              Work & Well-Being
            </p>

            <h2 className="text-3xl leading-tight md:text-4xl">
              Your work matters, but it doesn't have to consume everything.
            </h2>

            <p className="mt-6 leading-8 text-[#5F675F]">
              Professional stress can affect your sleep, relationships,
              confidence, mood, and ability to feel present outside of work.
              Sometimes the pressure comes from the workplace, and sometimes
              it comes from the expectations we place on ourselves.
            </p>

            <p className="mt-5 leading-8 text-[#5F675F]">
              Therapy can help you understand these patterns and develop
              healthier ways to manage pressure while staying connected to
              what matters to you.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/professionalstress.jpg"
              alt="Calm therapy setting"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Can Work On */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#526B5B]">
              What We Can Work On
            </p>

            <h2 className="text-3xl md:text-4xl">
              Creating more balance in a demanding life.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Work-Related Stress",
              "Career Pressure",
              "Leadership Stress",
              "Work-Life Balance",
              "Overworking",
              "Difficulty Switching Off",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#D9DDD5] bg-[#FAF9F5] p-6"
              >
                <h3 className="text-lg font-medium">{item}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5F675F]">
                  We can explore the source of the pressure and develop
                  healthier ways to respond to professional demands.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#E8EDE6] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#526B5B]">
            My Approach
          </p>

          <h2 className="text-3xl md:text-4xl">
            Understanding the person behind the professional role.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-[#5F675F]">
            Together, we can look at the expectations, beliefs, and habits
            that may be contributing to stress. We can also explore practical
            ways to create boundaries and make more room for rest and
            meaningful connection.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-[#5F675F]">
            My approach is warm and collaborative, with space to talk openly
            about the challenges that can be difficult to discuss in a
            professional environment.
          </p>
        </div>
      </section>

      {/* Who I Support */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#526B5B]">
            Who I Work With
          </p>

          <h2 className="text-3xl md:text-4xl">
            Support for professionals, entrepreneurs, and creatives.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-[#5F675F]">
            I work with people who carry significant responsibility and may
            feel pressure to always perform, achieve, or keep moving forward.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-[#5F675F]">
            Therapy can provide a space to step back, understand what you
            need, and create a healthier relationship with work and success.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#26352F] px-8 py-14 text-center text-white md:px-12">
          <h2 className="text-3xl md:text-4xl">
            You don't have to carry the pressure alone.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#D5DDD6]">
            If professional stress has started affecting your well-being,
            therapy can be a space to slow down and find a more sustainable
            way forward.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#F3F0E8] px-7 py-3 font-medium text-[#26352F] hover:bg-white"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D9DDD5] bg-[#FAF9F5] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium">Dr. Maya Reynolds, PsyD</p>

            <p className="mt-1 text-sm text-[#5F675F]">
              Licensed Clinical Psychologist · Santa Monica, CA
            </p>
          </div>

          <a
            href="/"
            className="text-sm text-[#526B5B] hover:text-[#26352F]"
          >
            ← Back to Home
          </a>
        </div>
      </footer>
    </main>
  );
}