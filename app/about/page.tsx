export default function AboutPage() {
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
              className="text-sm text-[#26352F]"
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
              href="/#approach"
              className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
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
            About Dr. Maya Reynolds
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight text-[#26352F] sm:text-5xl lg:text-6xl">
            Therapy that makes space for both insight and healing.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            A warm, collaborative space to understand what you're
            experiencing and find a more sustainable way forward.
          </p>
        </div>
      </section>

      {/* About Maya */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <img
              src="/maya.png"
              alt="Dr. Maya Reynolds"
              className="h-full min-h-[500px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              A Little About Me
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
              You don't have to figure everything out on your own.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              I'm Dr. Maya Reynolds, a Licensed Clinical Psychologist
              based in Santa Monica, California. I work with adults who
              may be experiencing anxiety, panic, trauma, burnout,
              perfectionism, or ongoing professional stress.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Many of the people I work with are used to being capable,
              responsible, and dependable. They may be successful in
              their careers while privately feeling overwhelmed,
              exhausted, disconnected, or unsure how to slow down.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              My role is to create a space where you can step out of
              that pressure for a while. Together, we can explore the
              patterns that are affecting your life and build a deeper
              understanding of what you need.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              I believe therapy should feel collaborative rather than
              judgmental. Your experiences, goals, and pace are central
              to the work we do together.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="bg-[#E8EDE6] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Who I Work With
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            Support for the moments when life feels harder to manage.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Anxiety & Panic
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Support when worry, overthinking, tension, or panic begins
                to affect everyday life.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Trauma
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                A carefully paced approach to processing difficult or
                overwhelming experiences.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Burnout
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Help for professionals, entrepreneurs, and creatives
                experiencing exhaustion and high internal pressure.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Perfectionism
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring the pressure to perform, achieve, and get
                everything right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            How I Work
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            Warm, collaborative, and grounded.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            Therapy is not about giving you a list of things you should
            change. It is about creating space to understand your
            experiences and develop tools that fit your life.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            I draw from cognitive-behavioral therapy, EMDR,
            mindfulness-based practices, and body-oriented techniques.
            The approach is adapted to your needs rather than following
            one fixed method.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            When working with trauma, we move carefully and prioritize
            safety and stabilization before deeper processing. The goal
            is to help you develop greater resilience and a stronger
            relationship with yourself.
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#F3F0E8] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Santa Monica
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
              In-person and online therapy.
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-[#5F675F]">
              I offer in-person therapy from my Santa Monica office as
              well as secure telehealth for clients located in
              California.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Office:
              <br />
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            If you're considering therapy, you can reach out to learn
            more about the process and discuss whether we might be a
            good fit.
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