export default function EMDRPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26352F]">
      {/* Header */}
      <header className="border-b border-[#D9DDD5] bg-[#FAF9F5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="/"
            className="text-xl font-medium tracking-tight text-[#26352F]"
          >
            Dr. Maya Reynolds, PsyD
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
            >
              About
            </a>

            <a
              href="/#services"
              className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
            >
              Services
            </a>

            <a
              href="/approach"
              className="text-sm text-[#26352F]"
            >
              Approach
            </a>

            <a
              href="/#office"
              className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
            >
              Office
            </a>

            <a
              href="/contact"
              className="rounded-full bg-[#526B5B] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#405747]"
            >
              Schedule a Consultation
            </a>
          </nav>

          <a
            href="/contact"
            className="rounded-full bg-[#526B5B] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#405747] md:hidden"
          >
            Contact
          </a>
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
      <section className="bg-[#F3F0E8] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Eye Movement Desensitization and Reprocessing
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight text-[#26352F] sm:text-5xl lg:text-6xl">
            A carefully paced approach to processing difficult experiences.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            EMDR can be used as part of trauma-focused therapy to help
            process distressing experiences in a supportive and
            structured environment.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              What Is EMDR?
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
              Creating space to process experiences that still feel
              difficult.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              EMDR is a structured therapeutic approach that can be used
              when distressing experiences continue to affect how you
              feel, think, or respond in the present.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              The process involves carefully revisiting aspects of an
              experience while using guided bilateral stimulation. The
              work is paced according to your needs and readiness.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Before deeper processing begins, we focus on creating
              stability, safety, and practical tools that can help you
              manage difficult emotions.
            </p>
          </div>

          <div>
            <img
              src="/emdr.jpg"
              alt="Supportive therapy environment"
              className="h-full min-h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What EMDR Can Support */}
      <section className="bg-[#E8EDE6] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            What We Can Work On
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            EMDR may be considered when past experiences continue to
            affect the present.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Traumatic Experiences
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Processing experiences that continue to feel distressing
                or difficult to move past.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Anxiety
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring experiences that may contribute to ongoing
                fear, worry, or heightened responses.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Triggers
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Understanding reactions that can feel stronger than the
                situation itself.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Emotional Distress
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Working with difficult emotional responses connected to
                past experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            A Carefully Paced Process
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            Safety comes before deeper processing.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            Trauma work does not need to happen quickly. We first focus
            on building a sense of safety and developing tools for
            managing difficult emotions.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            When you're ready, we can gradually begin processing
            distressing experiences. You remain involved in decisions
            about the pace and direction of the work.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            The goal is to help difficult experiences feel less
            overwhelming while developing greater resilience and a
            stronger connection with yourself.
          </p>
        </div>
      </section>

      {/* Maya's Approach */}
      <section className="bg-[#F3F0E8] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
                Maya's Approach
              </p>

              <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
                Supportive, collaborative, and grounded in your needs.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#5F675F]">
                I integrate EMDR with other therapeutic approaches when
                appropriate. The work is individualized rather than
                following a single formula.
              </p>

              <p className="mt-5 text-base leading-7 text-[#5F675F]">
                Throughout therapy, we pay attention to your emotional
                and physical responses and adjust the pace when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            Ready to explore whether EMDR may be part of your therapy?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            Reach out to discuss your goals and learn more about the
            therapy process.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#F3F0E8] px-7 py-3 text-sm font-medium text-[#26352F] transition hover:bg-white"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#405047] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white">
              Dr. Maya Reynolds, PsyD
            </p>

            <p className="mt-2 text-sm text-[#D5DDD6]">
              Licensed Clinical Psychologist
            </p>
          </div>

          <a
            href="/approach"
            aria-label="Back to approach"
            className="text-2xl text-[#D5DDD6] transition hover:text-white"
          >
            ←
          </a>
        </div>
      </footer>
    </main>
  );
}