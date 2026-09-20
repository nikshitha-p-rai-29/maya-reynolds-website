export default function AnxietyFocusPage() {
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
            <a href="/approach" className="text-sm text-[#5F675F] hover:text-[#26352F]">
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
            Area of Focus
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Finding more calm when anxiety takes over.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            Therapy can help you understand anxious patterns, develop
            practical tools, and feel more grounded in your everyday life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Understanding Anxiety
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
              You don't have to figure everything out on your own.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              Anxiety can show up in many different ways. You may find
              yourself constantly worrying, overthinking conversations,
              anticipating problems, or feeling unable to switch off.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Physical symptoms such as tension, restlessness, a racing
              heart, or difficulty sleeping can also make everyday
              experiences feel more difficult.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Therapy provides a space to understand these patterns and
              explore healthier ways of responding to them.
            </p>
          </div>

          <div>
            <img
              src="/anxiety1.jpg"
              alt="Calm therapy setting"
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

          <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-tight sm:text-4xl">
            Therapy can help you understand what is underneath the
            anxiety and build new ways of coping.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Constant Worry</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Understanding repetitive thoughts and learning ways to
                step back from them.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Overthinking</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring thought patterns that keep you stuck in
                uncertainty or self-doubt.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Physical Anxiety</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Learning to recognize and respond to physical signs of
                anxiety.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Fear and Avoidance</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Understanding avoidance patterns and gradually building
                confidence.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Panic</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Developing strategies for managing intense fear and
                physical sensations.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Self-Doubt</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring the beliefs and patterns that contribute to
                uncertainty about yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Maya's Approach
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
            Warm, collaborative, and practical.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            We can use approaches such as Cognitive Behavioral Therapy,
            mindfulness-based practices, and body-oriented techniques
            depending on your needs and goals.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            Together, we can look at the thoughts, emotions, behaviors,
            and physical responses connected to your anxiety.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            The goal is not to eliminate every anxious thought. It is to
            help you feel more capable of responding to difficult moments
            without anxiety controlling your life.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            Reach out to discuss what you're experiencing and learn more
            about how therapy could support you.
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
            href="/"
            aria-label="Back to home"
            className="text-2xl text-[#D5DDD6] hover:text-white"
          >
            ←
          </a>
        </div>
      </footer>
    </main>
  );
}