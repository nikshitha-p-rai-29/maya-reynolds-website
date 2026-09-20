export default function ApproachPage() {
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

      {/* Hero */}
      <section className="bg-[#F3F0E8] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            My Approach
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight text-[#26352F] sm:text-5xl lg:text-6xl">
            Warm, collaborative, and grounded.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            Therapy should give you space to understand yourself,
            develop practical tools, and move toward a life that feels
            more sustainable.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              A Collaborative Process
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
              Therapy is a space for understanding, not judgment.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              I take a warm and collaborative approach to therapy. Rather
              than telling you what you should do, we work together to
              understand what you're experiencing and what you want to
              change.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Sessions are structured enough to provide support while
              leaving room for reflection, curiosity, and deeper
              exploration.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Your experiences, goals, and pace are central to the work.
              The approach can adapt as your needs change throughout
              therapy.
            </p>
          </div>

          <div>
            <img
              src="/how-we-work.jpg"
              alt="Calm therapy environment"
              className="h-full min-h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="bg-[#E8EDE6] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Therapeutic Approaches
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            Different tools for different needs.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#5F675F]">
            I integrate several evidence-based approaches and adapt them
            to the person and situation rather than using one fixed
            method.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="bg-[#FAF9F5] p-7">
              <h3 className="text-xl font-normal text-[#26352F]">
                Cognitive Behavioral Therapy
              </h3>

              <p className="mt-4 text-base leading-7 text-[#5F675F]">
                CBT can help identify patterns in thoughts, emotions, and
                behaviors and develop more helpful ways of responding.
              </p>

              <a
                href="/approach/cbt"
                className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
              >
                Learn More
              </a>
            </article>

            <article className="bg-[#FAF9F5] p-7">
              <h3 className="text-xl font-normal text-[#26352F]">
                EMDR
              </h3>

              <p className="mt-4 text-base leading-7 text-[#5F675F]">
                EMDR may be used to help process distressing experiences
                in a carefully paced and supportive way.
              </p>

              <a
                href="/approach/emdr"
                className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
              >
                Learn More
              </a>
            </article>

            <article className="bg-[#FAF9F5] p-7">
              <h3 className="text-xl font-normal text-[#26352F]">
                Mindfulness-Based Practices
              </h3>

              <p className="mt-4 text-base leading-7 text-[#5F675F]">
                Mindfulness can support greater awareness of thoughts,
                emotions, and physical sensations without immediately
                reacting to them.
              </p>

              <a
                href="/approach/mindfulness"
                className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
              >
                Learn More
              </a>
            </article>

            <article className="bg-[#FAF9F5] p-7">
              <h3 className="text-xl font-normal text-[#26352F]">
                Body-Oriented Techniques
              </h3>

              <p className="mt-4 text-base leading-7 text-[#5F675F]">
                Body-oriented work can help you notice how stress and
                emotions show up physically and develop greater awareness
                of those signals.
              </p>

              <a
                href="/approach/body-oriented"
                className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
              >
                Learn More
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Trauma */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Trauma-Informed Care
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            Safety and pacing come first.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            When therapy involves trauma, we move carefully. Before
            processing difficult experiences, we focus on creating
            stability, safety, and practical tools for managing
            overwhelming emotions.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            You remain in control of the pace. The goal is not to rush
            through difficult experiences, but to create a supportive
            environment where deeper work can happen when you're ready.
          </p>
        </div>
      </section>

      {/* What Therapy Can Support */}
      <section className="bg-[#F3F0E8] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
                The Goal
              </p>

              <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
                Building a stronger relationship with yourself.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#5F675F]">
                Therapy can help you develop insight into patterns that
                may no longer be serving you while building practical
                tools for navigating stress, emotions, and relationships.
              </p>

              <p className="mt-5 text-base leading-7 text-[#5F675F]">
                The broader goal is greater resilience and a more
                sustainable way of living and working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            Curious whether therapy might be right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            Reach out to learn more about the process and schedule an
            initial conversation.
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
            href="/"
            aria-label="Back to home"
            className="text-2xl text-[#D5DDD6] transition hover:text-white"
          >
            ←
          </a>
        </div>
      </footer>
    </main>
  );
}