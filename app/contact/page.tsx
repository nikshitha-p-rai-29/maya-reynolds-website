"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

          <button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-2xl text-[#26352F] md:hidden"
  aria-label="Toggle menu"
>
  ☰
</button>
        </div>
        {menuOpen && (
  <div className="border-t border-[#D9DDD5] bg-[#FAF9F5] px-6 py-5 md:hidden">
    <nav className="flex flex-col gap-5">
      <a
        href="/"
        onClick={() => setMenuOpen(false)}
        className="text-sm text-[#5F675F]"
      >
        Home
      </a>

      <a
        href="/#about"
        onClick={() => setMenuOpen(false)}
        className="text-sm text-[#5F675F]"
      >
        About
      </a>

      <a
        href="/#services"
        onClick={() => setMenuOpen(false)}
        className="text-sm text-[#5F675F]"
      >
        Services
      </a>

      <a
        href="/#approach"
        onClick={() => setMenuOpen(false)}
        className="text-sm text-[#5F675F]"
      >
        Approach
      </a>

      <a
        href="/#office"
        onClick={() => setMenuOpen(false)}
        className="text-sm text-[#5F675F]"
      >
        Office
      </a>

      <a
        href="/contact"
        onClick={() => setMenuOpen(false)}
        className="rounded-full bg-[#526B5B] px-5 py-3 text-center text-sm font-medium text-white"
      >
        Schedule a Consultation
      </a>
    </nav>
  </div>
)}
      </header>

      {/* Hero */}
      <section className="bg-[#F3F0E8] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
            Get Started
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-tight tracking-tight text-[#26352F] sm:text-5xl lg:text-6xl">
            Let's start with a conversation.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5F675F]">
            If you're considering therapy, you're welcome to reach out.
            We can talk about what you're looking for and whether working
            together feels like a good fit.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Information */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Consultation
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
              A simple first step.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#5F675F]">
              Reaching out for therapy can feel like a big step. You don't
              need to have everything figured out before contacting me.
            </p>

            <p className="mt-5 text-base leading-7 text-[#5F675F]">
              Use the form to share a little about what brings you to
              therapy. I'll follow up with information about next steps and
              scheduling.
            </p>

            <div className="mt-10 space-y-6 border-t border-[#D9DDD5] pt-8">
              <div>
                <p className="text-sm font-medium text-[#26352F]">
                  Office
                </p>

                <p className="mt-2 text-sm leading-6 text-[#5F675F]">
                  123th Street 45 W
                  <br />
                  Santa Monica, CA 90401
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#26352F]">
                  In-Person Therapy
                </p>

                <p className="mt-2 text-sm leading-6 text-[#5F675F]">
                  Sessions are available from the Santa Monica office.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#26352F]">
                  Telehealth
                </p>

                <p className="mt-2 text-sm leading-6 text-[#5F675F]">
                  Secure online therapy is available for clients located
                  in California.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F3F0E8] p-7 sm:p-10">
            <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();
    setSubmitted(true);
  }}
>
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#26352F]"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full border border-[#D9DDD5] bg-white px-4 py-3 text-sm text-[#26352F] outline-none transition focus:border-[#526B5B]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#26352F]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full border border-[#D9DDD5] bg-white px-4 py-3 text-sm text-[#26352F] outline-none transition focus:border-[#526B5B]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-[#26352F]"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Your phone number"
                  className="mt-2 w-full border border-[#D9DDD5] bg-white px-4 py-3 text-sm text-[#26352F] outline-none transition focus:border-[#526B5B]"
                />
              </div>

              <div>
                <label
                  htmlFor="therapy"
                  className="text-sm font-medium text-[#26352F]"
                >
                  What are you looking for support with?
                </label>

                <select
                  id="therapy"
                  required
                  className="mt-2 w-full border border-[#D9DDD5] bg-white px-4 py-3 text-sm text-[#5F675F] outline-none transition focus:border-[#526B5B]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="anxiety">Anxiety & Panic</option>
                  <option value="trauma">Trauma</option>
                  <option value="burnout">Burnout & Perfectionism</option>
                  <option value="stress">Professional Stress</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#26352F]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me a little about what brings you to therapy."
                  className="mt-2 w-full resize-none border border-[#D9DDD5] bg-white px-4 py-3 text-sm text-[#26352F] outline-none transition focus:border-[#526B5B]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#526B5B] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#405747]"
              >
                Request a Consultation
              </button>

              <p className="text-center text-xs leading-5 text-[#5F675F]">
                This form is for general inquiries and scheduling.
                Please do not include highly sensitive or urgent information.
              </p>
            </form>
            {submitted && (
  <div className="mt-6 border border-[#C9D1C9] bg-[#E8EDE6] p-5 text-center">
    <p className="text-sm font-medium text-[#26352F]">
      Thank you for reaching out.
    </p>
    <p className="mt-2 text-sm text-[#5F675F]">
      Your message has been received. Dr. Maya Reynolds will follow up with
      you soon.
    </p>
  </div>
)}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#E8EDE6] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl">
            Therapy can begin with one conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5F675F]">
            Whether you're dealing with anxiety, trauma, burnout, or
            ongoing stress, there is space to explore what you're
            experiencing.
          </p>
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