export default function TraumaPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26352F]">

      {/* Header */}
      <header className="border-b border-[#D9DDD5] bg-[#FAF9F5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
          <a
            href="/"
            className="text-xl font-medium tracking-wide text-[#26352F]"
          >
            Dr. Maya Reynolds, PsyD
          </a>

          <a
            href="/contact"
            className="rounded-full bg-[#526B5B] px-6 py-3 text-sm text-white transition hover:bg-[#405747]"
          >
            Schedule a Consultation
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
      <section className="bg-[#F3F0E8] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Trauma Therapy
          </p>

          <h1 className="max-w-4xl text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            A safe space to work through what you've experienced.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#5F675F] sm:text-lg">
            Carefully paced therapy for adults working through single-incident
            trauma, earlier life experiences, relationships, or long-standing
            patterns connected to chronic stress.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-block bg-[#526B5B] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#405747]"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Understanding Trauma
            </p>

            <h2 className="text-3xl font-normal leading-tight sm:text-4xl">
              When the past continues to affect the present.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-[#5F675F]">
              <p>
                Difficult experiences can continue to affect the way you feel,
                think, relate to others, and experience your everyday life long
                after the event itself has passed.
              </p>

              <p>
                Some people may feel constantly on edge, have difficulty
                trusting others, struggle with emotional regulation, or feel
                disconnected from themselves. Others may experience the effects
                of earlier experiences without immediately connecting them to
                what they are feeling today.
              </p>

              <p>
                Therapy can provide a supportive space to understand these
                patterns while developing greater safety, stability, and
                awareness.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/trauma3.jpg"
              alt="Calm therapy environment for trauma support"
              className="h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Can Work On */}
      <section className="bg-[#E8EDE6] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            What We Can Work On
          </p>

          <h2 className="max-w-3xl text-3xl font-normal leading-tight sm:text-4xl">
            Trauma therapy can begin with safety, stabilization, and
            understanding.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Single-incident trauma",
              "Childhood experiences",
              "Relationship experiences",
              "Chronic stress",
              "Emotional regulation",
              "Feeling unsafe or on edge",
            ].map((item) => (
              <div
                key={item}
                className="border-t border-[#C9D1C9] py-6"
              >
                <p className="text-lg text-[#26352F]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trauma Approach */}
      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            A Carefully Paced Process
          </p>

          <h2 className="text-3xl font-normal leading-tight sm:text-4xl">
            Safety comes first.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#5F675F] sm:text-lg">
            Trauma work is approached carefully, with an emphasis on safety,
            stabilization, and helping you feel more regulated in everyday
            life. Deeper trauma processing can be introduced at a pace that
            feels appropriate for your individual needs.
          </p>

        </div>
      </section>

      {/* EMDR */}
      <section className="bg-[#F3F0E8] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-5xl">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            EMDR
          </p>

          <h2 className="text-3xl font-normal leading-tight sm:text-4xl">
            An evidence-based approach that may be part of trauma-focused work.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-7 text-[#5F675F] sm:text-lg">
            EMDR may be incorporated when appropriate as part of trauma-focused
            therapy. The process is carefully paced and begins with attention
            to safety and stabilization before deeper trauma processing.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8EDE6] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-normal leading-tight sm:text-4xl">
            You deserve a space where you can feel supported.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5F675F]">
            If past experiences are still affecting your daily life, therapy
            can provide a space to slow down, understand what you're
            experiencing, and move forward at a pace that feels manageable.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block bg-[#526B5B] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#405747]"
          >
            Schedule a Consultation
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#26352F] px-6 py-12 text-white sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div>
            <h2 className="text-lg font-medium">
              Dr. Maya Reynolds, PsyD
            </h2>

            <p className="mt-2 text-sm text-[#D5DDD6]">
              Santa Monica, CA · In-Person & Secure Telehealth
            </p>
          </div>

          {/* <a
            href="/"
            aria-label="Back to home"
            className="text-2xl text-[#D5DDD6] transition hover:text-white"
          >
            ←
          </a> */}

        </div>
      </footer>

    </main>
  );
}