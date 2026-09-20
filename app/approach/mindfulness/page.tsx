export default function MindfulnessPage() {
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
            <a href="/" className="text-sm text-[#5F675F] hover:text-[#26352F]">
              Home
            </a>
            <a href="/about" className="text-sm text-[#5F675F] hover:text-[#26352F]">
              About
            </a>
            <a href="/#services" className="text-sm text-[#5F675F] hover:text-[#26352F]">
              Services
            </a>
            <a href="/approach" className="text-sm text-[#26352F]">
              Approach
            </a>
            <a href="/#office" className="text-sm text-[#5F675F] hover:text-[#26352F]">
              Office
            </a>
            <a
              href="/contact"
              className="rounded-full bg-[#526B5B] px-5 py-3 text-sm font-medium text-white hover:bg-[#405747]"
            >
              Schedule a Consultation
            </a>
          </nav>

          <a
            href="/contact"
            className="rounded-full bg-[#526B5B] px-4 py-2 text-sm font-medium text-white md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#F3F0E8] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Mindfulness-Based Practices
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Learning to be more present with yourself.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            Mindfulness can help create more space between what you
            experience and how you respond, especially during periods of
            stress or emotional overwhelm.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              What Mindfulness Can Offer
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
              A way to slow down and notice what is happening in the
              present moment.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              When life feels busy or overwhelming, it can be difficult
              to notice your thoughts, emotions, and physical responses
              without immediately reacting to them.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Mindfulness practices can help you develop greater
              awareness of these experiences while approaching them with
              curiosity rather than judgment.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              These practices can be integrated into therapy in simple,
              practical ways that fit your needs and everyday life.
            </p>
          </div>

          <div>
            <img
              src="/mindfulness.jpg"
              alt="Calm therapy environment"
              className="h-full min-h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-[#E8EDE6] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            What We Can Work On
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-tight sm:text-4xl">
            Mindfulness may be helpful when you want to respond to life
            with more awareness and steadiness.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Stress</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Developing ways to notice and respond to stress before it
                becomes overwhelming.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Anxiety</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Creating space around anxious thoughts and physical
                sensations.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Emotional Regulation</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Learning to recognize emotions and respond to them with
                greater awareness.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Feeling Overwhelmed</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Using grounding and awareness practices during difficult
                moments.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Self-Awareness</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Becoming more aware of patterns, needs, and reactions.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Burnout</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Creating healthier pauses and reconnecting with your own
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Approach */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            A Practical Approach
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
            Mindfulness does not have to mean sitting perfectly still or
            clearing your mind.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            In therapy, mindfulness can be as simple as learning to
            notice your breathing, body sensations, thoughts, or emotions
            with greater curiosity.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            We can explore practices that feel realistic for your life
            and gradually build them into situations where you tend to
            feel stressed or overwhelmed.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            The goal is not to eliminate difficult thoughts or emotions.
            Instead, mindfulness can help you relate to them differently
            and make more intentional choices.
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

              <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
                Gentle, practical, and connected to your everyday life.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#5F675F]">
                I use mindfulness-based practices alongside other
                approaches when they support your goals.
              </p>

              <p className="mt-5 text-base leading-7 text-[#5F675F]">
                Together, we can explore ways to become more aware of
                your internal experience while developing greater
                flexibility in how you respond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            Ready to explore a more grounded way forward?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            Reach out to discuss what you're experiencing and what you
            would like support with.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#F3F0E8] px-7 py-3 text-sm font-medium text-[#26352F] hover:bg-white"
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
            className="text-2xl text-[#D5DDD6] hover:text-white"
          >
            ←
          </a>
        </div>
      </footer>
    </main>
  );
}