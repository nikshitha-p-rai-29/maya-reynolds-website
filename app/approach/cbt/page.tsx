export default function CBTPage() {
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
            Cognitive Behavioral Therapy
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight text-[#26352F] sm:text-5xl lg:text-6xl">
            Understanding the patterns that shape how you feel.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            CBT can help you understand the connection between thoughts,
            emotions, and behaviors and develop more helpful ways of
            responding.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              What Is CBT?
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
              A practical way to understand thoughts, feelings, and
              behaviors.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              Cognitive behavioral therapy focuses on the relationship
              between the way we think, the way we feel, and the way we
              respond to situations.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Sometimes, patterns of thinking can increase anxiety,
              stress, self-criticism, or feelings of being overwhelmed.
              Understanding these patterns can create opportunities for
              change.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              CBT can provide practical tools that you can use both
              during therapy and in everyday situations.
            </p>
          </div>

          <div>
            <img
              src="/cbt.jpg"
              alt="Calm therapy environment"
              className="h-full min-h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Can Work On */}
      <section className="bg-[#E8EDE6] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            What We Can Work On
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            CBT can be useful for a range of concerns.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Anxiety
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Identifying worry patterns and developing more balanced
                responses to uncertainty.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Perfectionism
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring unrealistic expectations and the pressure to
                always perform or get things right.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Self-Criticism
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Understanding harsh internal patterns and developing a
                more supportive relationship with yourself.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Stress
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Building practical strategies for responding to ongoing
                personal or professional stress.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Overthinking
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Learning to recognize repetitive thought patterns and
                create more space from them.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Emotional Regulation
              </h3>

              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Developing greater awareness of emotions and learning
                practical ways to respond to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maya's Approach */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Maya's Approach
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            Practical tools without losing sight of the bigger picture.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            CBT can offer concrete strategies, but therapy is about more
            than simply changing individual thoughts. We can also explore
            where patterns came from and how they connect to your
            experiences.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            I use CBT alongside other approaches when appropriate,
            including mindfulness-based practices and body-oriented
            techniques.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            The goal is to help you develop greater awareness, useful
            tools, and a stronger sense of choice in how you respond to
            difficult situations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            Interested in learning more about therapy?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            Reach out to discuss what you're experiencing and whether
            therapy could be a helpful next step.
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