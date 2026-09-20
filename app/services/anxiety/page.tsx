"use client";
import { useRouter } from "next/navigation";
export default function AnxietyPage() {
const router = useRouter();
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
            Anxiety & Panic Therapy
          </p>

          <h1 className="max-w-4xl text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Finding more calm when your mind won't slow down.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#5F675F] sm:text-lg">
            Therapy for adults experiencing constant worry, overthinking,
            panic, physical tension, difficulty sleeping, or the feeling of
            always being on edge.
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
              Understanding Anxiety
            </p>

            <h2 className="text-3xl font-normal leading-tight sm:text-4xl">
              When anxiety starts taking up too much space.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-[#5F675F]">
              <p>
                Anxiety can show up in many different ways. You may find
                yourself constantly thinking about what could go wrong,
                replaying conversations, struggling to relax, or feeling
                physically tense even when nothing is immediately wrong.
              </p>

              <p>
                Some people appear completely functional on the outside while
                internally feeling exhausted, overwhelmed, or constantly
                prepared for something to go wrong.
              </p>

              <p>
                Therapy can provide a space to understand these patterns and
                develop practical ways to respond to anxious thoughts,
                emotions, and physical sensations.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/anxiety3.jpg"
              alt="Calm therapy environment for anxiety support"
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
            Therapy can help you understand your patterns and create more room
            for calm.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Constant worry and overthinking",
              "Panic and fear",
              "Physical tension and feeling on edge",
              "Difficulty sleeping",
              "Work-related stress",
              "Emotional regulation",
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

      {/* Approach */}
      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Maya's Approach
          </p>

          <h2 className="text-3xl font-normal leading-tight sm:text-4xl">
            Warm, collaborative, and grounded.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#5F675F] sm:text-lg">
            I integrate evidence-based approaches such as cognitive behavioral
            therapy, mindfulness-based practices, and body-oriented techniques.
            Sessions are structured enough to feel supportive while leaving
            room for reflection and depth.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3F0E8] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-normal leading-tight sm:text-4xl">
            You don't have to navigate anxiety alone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5F675F]">
            If anxiety or panic has started affecting your daily life,
            therapy can be a space to slow down, understand what is happening,
            and develop new ways of responding.
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
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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