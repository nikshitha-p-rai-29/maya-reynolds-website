export default function BodyOrientedPage() {
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
            Body-Oriented Therapy
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Paying attention to what your body may be telling you.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            Our emotional experiences can show up in the body. Body-oriented
            practices can help us notice these signals and develop a greater
            sense of awareness and regulation.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Mind-Body Connection
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
              Your body is part of your experience.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              Stress, anxiety, and difficult experiences can affect more than
              our thoughts. They can also influence breathing, muscle tension,
              sleep, energy, and other physical sensations.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Paying attention to these signals can provide useful information
              about what you are experiencing and what you may need.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              In therapy, body awareness can be introduced gently and at a
              pace that feels comfortable for you.
            </p>
          </div>

          <div>
            <img
              src="/bodyoriented.jpg"
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
            What We Can Explore
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-tight sm:text-4xl">
            Becoming more aware of the connection between your body,
            emotions, and everyday experiences.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Stress Responses</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Noticing how stress affects your body and learning ways to
                respond with greater awareness.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Anxiety</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring physical sensations that can accompany worry,
                fear, or heightened alertness.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Emotional Regulation</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Developing awareness of physical signals that may accompany
                strong emotions.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Burnout</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Recognizing signs of exhaustion and reconnecting with your
                physical and emotional needs.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Feeling Disconnected</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Gradually rebuilding awareness of your internal experience
                when you feel disconnected from yourself.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Grounding</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring simple grounding practices that can help you feel
                more present and settled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gentle Process */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            A Gentle Process
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
            There is no need to force anything.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            Body-oriented work can be introduced gradually. We can start by
            simply noticing physical sensations and learning what feels
            comfortable and manageable.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            If something feels overwhelming, we can slow down, shift our
            attention, or return to grounding strategies. Your sense of safety
            remains an important part of the process.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            Over time, greater body awareness can support emotional regulation,
            self-understanding, and a stronger connection with yourself.
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
                Grounded in awareness, safety, and your individual needs.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#5F675F]">
                I integrate body-oriented techniques with other therapeutic
                approaches when they are helpful for your goals.
              </p>

              <p className="mt-5 text-base leading-7 text-[#5F675F]">
                We pay attention to both your emotional experience and the
                physical signals that may accompany it, always working at a
                pace that feels manageable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            Ready to explore a more connected way of understanding yourself?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            Reach out to discuss your goals and learn more about how therapy
            could support you.
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