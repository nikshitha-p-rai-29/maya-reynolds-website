export default function StressEmotionalRegulationPage() {
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
            Stress & Emotional Regulation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F675F]">
            Learning to understand your emotions, manage stress, and feel more
            grounded when life feels overwhelming.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF9F5] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#526B5B]">
              Understanding Stress
            </p>

            <h2 className="text-3xl leading-tight md:text-4xl">
              You can learn to respond to difficult emotions without being
              overwhelmed by them.
            </h2>

            <p className="mt-6 leading-8 text-[#5F675F]">
              Stress can affect your thoughts, body, relationships, sleep, and
              everyday sense of well-being. At times, emotions may feel too
              intense or difficult to understand.
            </p>

            <p className="mt-5 leading-8 text-[#5F675F]">
              Therapy can help you recognize emotional patterns, understand
              your responses, and develop practical tools for feeling more
              grounded and present.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/stress.jpg"
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
              Building greater awareness and emotional balance.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Everyday Stress",
              "Feeling Overwhelmed",
              "Emotional Reactivity",
              "Anxiety & Worry",
              "Difficulty Calming Down",
              "Feeling Disconnected",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#D9DDD5] bg-[#FAF9F5] p-6"
              >
                <h3 className="text-lg font-medium">{item}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5F675F]">
                  We can explore what you are experiencing and develop
                  strategies that help you feel more steady and supported.
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
            Learning what your emotions are trying to tell you.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-[#5F675F]">
            Together, we can explore the thoughts, emotions, and body
            responses connected to stress. We can also identify patterns that
            make it harder to slow down or feel present.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-[#5F675F]">
            Depending on your needs, therapy may include mindfulness-based
            practices, body-oriented techniques, and cognitive strategies to
            help you develop greater emotional awareness and regulation.
          </p>
        </div>
      </section>

      {/* Practical Tools */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#526B5B]">
            Moving Forward
          </p>

          <h2 className="text-3xl md:text-4xl">
            Small changes can create more space in your everyday life.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-[#5F675F]">
            Therapy can help you build practical skills for noticing stress
            earlier, responding to emotions with greater awareness, and
            creating healthier ways to care for yourself.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-[#5F675F]">
            The goal is not to eliminate difficult emotions, but to develop a
            stronger and more compassionate relationship with them.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#26352F] px-8 py-14 text-center text-white md:px-12">
          <h2 className="text-3xl md:text-4xl">
            You deserve support when life feels overwhelming.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#D5DDD6]">
            If you're ready to better understand your stress and emotions,
            therapy can provide a supportive place to begin.
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