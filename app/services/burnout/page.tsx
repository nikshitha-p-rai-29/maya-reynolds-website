export default function BurnoutPage() {
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
              href="/#about"
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
            href="/#contact"
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
            Burnout & Perfectionism
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight text-[#26352F] sm:text-5xl lg:text-6xl">
            You don't have to keep pushing yourself to the limit.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            Therapy for adults experiencing burnout, perfectionism, and the
            pressure to keep everything together.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              When High Achievement Comes With a Cost
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
              Looking capable on the outside doesn't mean you have to feel
              okay on the inside.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              Many of the people I work with are high-achieving,
              self-aware, and used to handling a lot on their own. They may
              be successful at work while quietly feeling exhausted,
              overwhelmed, or disconnected from themselves.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Constant pressure can make it difficult to slow down. You may
              feel that you always need to be productive, perform well, or
              get things right. Even when you accomplish something, it can
              be difficult to feel satisfied with what you've done.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Over time, this pattern can contribute to burnout, stress,
              difficulty resting, and a growing sense that you have become
              disconnected from yourself.
            </p>
          </div>

          <div>
            <img
              src="/burnout3.jpg"
              alt="Calm therapy space"
              className="h-full min-h-[420px] w-full object-cover"
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
            Understanding the patterns behind burnout and perfectionism.
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Professional Burnout
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Feeling emotionally and physically drained after prolonged
                periods of stress and pressure.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Perfectionism
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Exploring the pressure to get everything right and the fear
                of falling short of your own expectations.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                High Internal Pressure
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Understanding the constant need to achieve, perform, or keep
                moving forward.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Work-Related Stress
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Creating healthier ways to respond to demanding work
                environments and ongoing stress.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Difficulty Slowing Down
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Learning to make room for rest and reflection without feeling
                that you always need to be productive.
              </p>
            </div>

            <div className="border-b border-[#C9D1C9] pb-5">
              <h3 className="text-lg font-medium text-[#26352F]">
                Reconnecting With Yourself
              </h3>
              <p className="mt-2 text-base leading-7 text-[#5F675F]">
                Creating space to reconnect with your needs, values, and
                sense of self.
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
            Practical tools, deeper understanding, and a more sustainable way
            forward.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F675F]">
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive while still
            leaving space for reflection and depth.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            Together, we can explore the patterns that keep you pushing
            yourself beyond your limits and look at how stress affects both
            your emotional and physical well-being.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            I integrate evidence-based approaches such as cognitive-behavioral
            therapy, mindfulness-based practices, and body-oriented techniques
            to help you develop practical tools while building greater
            awareness of what you need.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F675F]">
            The goal is not simply to help you keep doing more. It is to help
            you develop more sustainable ways of living and working while
            staying connected to yourself.
          </p>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="bg-[#F3F0E8] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
                A Space to Slow Down
              </p>

              <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
                You can care about your work without letting it consume you.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#5F675F]">
                I frequently support entrepreneurs, creatives, and
                professionals who feel disconnected from themselves after
                years of pushing through stress.
              </p>

              <p className="mt-5 text-base leading-7 text-[#5F675F]">
                Therapy can become a space to slow down, reconnect, and
                develop healthier and more sustainable ways of living and
                working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#526B5B] px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
            You don't have to keep carrying the pressure alone.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8EDE6]">
            If burnout or perfectionism is making it difficult to feel
            balanced, therapy can offer a space to slow down, reconnect, and
            find a more sustainable way forward.
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