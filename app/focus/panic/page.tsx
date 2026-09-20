export default function PanicFocusPage() {
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
            Area of Focus
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Finding steadiness when panic feels overwhelming.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            Therapy can help you understand panic symptoms, reduce fear
            around them, and develop practical ways to feel more grounded.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Understanding Panic
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
              When your body's alarm system feels stuck on high alert.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              Panic can arrive suddenly and may bring intense physical
              sensations such as a racing heart, shortness of breath,
              dizziness, shaking, or a feeling of losing control.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              After experiencing panic, it is also common to become
              worried about having another episode. This fear can lead to
              avoiding places, situations, or activities.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Therapy can provide a supportive space to understand these
              patterns and gradually build confidence in responding to
              panic symptoms.
            </p>
          </div>

          <div>
            <img
              src="/panic1.jpg"
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
            Understanding panic can make difficult moments feel more
            manageable.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Panic Attacks</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Understanding what happens during intense episodes and
                learning ways to respond.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Fear of Another Attack</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring the worry and anticipation that can follow a
                panic episode.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Physical Sensations</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Learning to notice physical sensations without immediately
                interpreting them as dangerous.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Avoidance</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Understanding how avoidance can affect everyday life and
                gradually rebuilding confidence.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Anticipatory Anxiety</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Working with anxious thoughts about what might happen in
                the future.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium">Feeling Out of Control</h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Developing grounding strategies and a greater sense of
                confidence during difficult moments.
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
            Understanding first, then building confidence.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            We can explore the thoughts, physical sensations, emotions,
            and behaviors that surround panic.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            Depending on your needs, therapy may include Cognitive
            Behavioral Therapy, mindfulness-based practices, and
            body-oriented techniques.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            The goal is to help you feel more comfortable understanding
            your body's responses and less controlled by the fear of
            panic.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            You don't have to face panic alone.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            Reach out to discuss what you're experiencing and learn more
            about therapy.
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