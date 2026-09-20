"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  return (
    <main>
      {/* Header */}
      <header className="border-b border-[#D9DDD5] bg-[#FAF9F5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-medium tracking-wide text-[#26352F]"
          >
            Dr. Maya Reynolds, PsyD
          </a>

          {/* Desktop Navigation */}
<nav className="hidden items-center gap-8 md:flex">
  <a
    href="#"
    className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
  >
    Home
  </a>

  <a
    href="#about"
    className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
  >
    About
  </a>

  <a
    href="#approach"
    className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
  >
    Our Approach
  </a>

  <a
    href="#office"
    className="text-sm text-[#5F675F] transition hover:text-[#26352F]"
  >
    Office
  </a>

  <a
    href="/contact"
    className="rounded-full bg-[#26352F] px-5 py-3 text-sm text-white transition hover:bg-[#526B5B]"
  >
    Shedule a Consultation
  </a>
</nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-6 bg-[#26352F]"></span>
            <span className="h-0.5 w-6 bg-[#26352F]"></span>
            <span className="h-0.5 w-6 bg-[#26352F]"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-[#D9DDD5] bg-[#FAF9F5] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a
  href="#"
  onClick={() => setMenuOpen(false)}
  className="block py-3 text-sm text-[#26352F]"
>
  Home
</a>

<a
  href="#about"
  onClick={() => setMenuOpen(false)}
  className="block py-3 text-sm text-[#26352F]"
>
  About
</a>

<a
  href="#approach"
  onClick={() => setMenuOpen(false)}
  className="block py-3 text-sm text-[#26352F]"
>
  Our Approach
</a>

<a
  href="#office"
  onClick={() => setMenuOpen(false)}
  className="block py-3 text-sm text-[#26352F]"
>
  Office
</a>

<a
  href="/contact"
  onClick={() => setMenuOpen(false)}
  className="block py-3 text-sm text-[#26352F]"
>
  Shedule a Consultation
</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-[#F3F0E8]">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
          {/* Hero Content */}
          <div className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Therapy for Adults in Santa Monica & California
            </p>

            <h1 className="max-w-xl text-4xl font-normal leading-[1.15] tracking-tight text-[#26352F] sm:text-5xl lg:text-6xl">
              Therapy for Anxiety, Trauma & Burnout in Santa Monica
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#5F675F] sm:text-lg">
              Warm, grounded therapy for adults navigating anxiety, trauma,
              burnout, and the pressure to keep everything together.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-block bg-[#526B5B] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#405747]"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Hero Image */}
          <div className="h-[500px] w-full lg:h-[650px]">
            <img
              src="/hero4.jpg"
              alt="Calm and welcoming therapy environment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#FAF9F5]">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
          {/* Image */}
          <div className="order-2 w-full px-6 py-10 sm:px-10 lg:order-1 lg:px-0 lg:py-0">
            <img
  src="/maya.png"
  alt="Dr. Maya Reynolds"
  className="mx-auto block h-auto w-full max-w-md rounded-2xl object-contain"
/>
          </div>

          {/* Content */}
          <div className="order-1 flex flex-col justify-center px-6 py-16 sm:px-10 lg:order-2 lg:px-16 lg:py-24">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              About Dr. Maya Reynolds
            </p>

            <h2 className="max-w-xl text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl lg:text-5xl">
              A warm, grounded space to understand what you're experiencing.
            </h2>

            <div className="mt-7 max-w-xl space-y-5 text-base leading-7 text-[#5F675F]">
              <p>
  I’m a licensed clinical psychologist based in Santa Monica, California,
  offering therapy for adults navigating anxiety, stress, trauma, and burnout.
  Many of the people I work with are thoughtful, self-aware, and high-achieving,
  yet feel exhausted, stuck in overthinking, or emotionally on edge.
</p>

<p>
  My work often focuses on anxiety, panic, trauma, and the effects of
  professional burnout and high internal pressure. I also support adults who
  are dealing with the lasting impact of earlier experiences on their
  relationships, confidence, or sense of safety.
</p>

<p>
  I take a warm, collaborative, and grounded approach to therapy. I integrate
  evidence-based methods including CBT, EMDR, mindfulness-based practices, and
  body-oriented techniques, with an emphasis on safety, insight, and sustainable
  change.
</p>
            </div>

          <a
  href="/about"
  className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
>
  Learn More
</a>

            
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-[#F3F0E8] px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Services
            </p>

            <h2 className="text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl lg:text-5xl">
              Therapy for anxiety, trauma, and burnout.
            </h2>
          </div>

          {/* Service Cards */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Anxiety */}
            <article className="bg-[#FAF9F5]">
              <div className="h-80 overflow-hidden">
                <img
                  src="/anxiety2.jpg"
                  alt="Support for anxiety and stress"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-normal text-[#26352F]">
                  Anxiety & Panic
                </h3>

                <p className="mt-4 text-base leading-7 text-[#5F675F]">
                  Support for constant worry, overthinking, panic, tension, and the feeling of
always being on edge, with practical tools for feeling more regulated day to day.
                </p>

                <a
                  href="/services/anxiety"
                  className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
                >
                  Learn More
                </a>
              </div>
            </article>

            {/* Trauma Therapy */}
<article className="bg-[#FAF9F5]">
  <div className="h-80 overflow-hidden">
    <img
      src="/trauma2.jpg"
      alt="Trauma therapy"
      className="h-full w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  <div className="p-7">
    <h3 className="text-2xl font-normal text-[#26352F]">
      Trauma Therapy
    </h3>

    <p className="mt-4 text-base leading-7 text-[#5F675F]">
      Carefully paced trauma therapy for adults working through single-incident
trauma or long-standing patterns connected to earlier life experiences.
    </p>

    <a
      href="/services/trauma"
      className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
    >
      Learn More
    </a>
  </div>
</article>

            {/* Burnout & Perfectionism */}
            <article className="bg-[#FAF9F5]">
              <div className="h-80 overflow-hidden">
                <img
                  src="/burnout2.jpg"
                  alt="Support for professional burnout and perfectionism"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-normal text-[#26352F]">
                  Burnout & Perfectionism
                </h3>

                <p className="mt-4 text-base leading-7 text-[#5F675F]">
                  Support for professionals, entrepreneurs, and creatives experiencing burnout,
perfectionism, high internal pressure, and the exhaustion that comes from
constantly pushing through stress.
                </p>

                <a
                  href="/services/burnout"
                  className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
                >
                  Learn More
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="bg-[#FAF9F5] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[32%_68%] lg:gap-16">
            {/* Heading */}
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
                Areas of Focus
              </p>

              <h2 className="max-w-xl text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl lg:text-5xl">
               Support for anxiety, trauma, burnout, and emotional well-being.
              </h2>
            </div>

            {/* Focus List */}
<div className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
  <a href="/focus/anxiety">
    <div className="border-t border-[#D9DDD5] py-5">
      <p className="text-lg text-[#26352F]">Anxiety</p>
    </div>
  </a>

  <a href="/focus/panic">
    <div className="border-t border-[#D9DDD5] py-5">
      <p className="text-lg text-[#26352F]">Panic</p>
    </div>
  </a>

  <a href="/focus/trauma">
    <div className="border-t border-[#D9DDD5] py-5">
      <p className="text-lg text-[#26352F]">Trauma</p>
    </div>
  </a>

  <a href="/focus/burnout">
    <div className="border-t border-[#D9DDD5] py-5">
      <p className="text-lg text-[#26352F]">Burnout</p>
    </div>
  </a>

  <a href="/focus/perfectionism">
    <div className="border-t border-[#D9DDD5] py-5">
      <p className="text-lg text-[#26352F]">Perfectionism</p>
    </div>
  </a>

  <a href="/focus/professional-stress">
    <div className="border-t border-[#D9DDD5] py-5">
      <p className="text-lg text-[#26352F]">
        Professional Stress
      </p>
    </div>
  </a>

  <a href="/focus/stress-emotional-regulation" className="sm:col-span-2">
    <div className="border-t border-[#D9DDD5] py-5">
      <p className="text-lg text-[#26352F]">
        Stress & Emotional Regulation
      </p>
    </div>
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-[#E8EDE6]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Image */}
          <div className="h-[400px] sm:h-[500px] lg:h-[650px]">
            <img
              src="/how-we-work.jpg"
              alt="Calm and grounding therapy space"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
                My Approach
              </p>

              <h2 className="text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl lg:text-5xl">
                Warm, collaborative, and grounded.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-7 text-[#5F675F]">
                <p>
                  I believe therapy works best when you feel respected,
                  understood, and actively involved in the process.
                </p>

                <p>
                  Sessions are structured enough to feel supportive while still
                  leaving room for reflection and depth.
                </p>

                <p>
                  I integrate CBT, EMDR, mindfulness-based practices, and
                  body-oriented techniques to explore both the emotional and
                  physiological sides of what you are experiencing.
                </p>
              </div>

              <a
  href="/approach"
  className="mt-6 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F] transition hover:text-[#526B5B]"
>
  Learn More
</a>

              
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
<section className="bg-[#FAF9F5] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[32%_68%] lg:gap-16">

      {/* Left - Heading */}
      <div>
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
          Specialized Support
        </p>

        <h2 className="max-w-sm text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl lg:text-5xl">
          Our specialties include…
        </h2>
      </div>

      {/* Right - 2 x 2 Specialties */}
      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">

        {/* CBT */}
        <div className="border-t border-[#D9DDD5] py-8">
          <h3 className="text-2xl font-normal text-[#26352F]">
            Cognitive Behavioral Therapy
          </h3>

          <p className="mt-4 text-base leading-7 text-[#5F675F]">
            Practical, evidence-based support for understanding patterns of
            thinking and developing healthier ways of responding.
          </p>

          <Link
            href="/approach/cbt"
            className="mt-5 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F]"
          >
            Learn More
          </Link>
        </div>

        {/* EMDR */}
        <div className="border-t border-[#D9DDD5] py-8">
          <h3 className="text-2xl font-normal text-[#26352F]">
            EMDR
          </h3>

          <p className="mt-4 text-base leading-7 text-[#5F675F]">
            A structured approach that can help process distressing
            experiences while maintaining an emphasis on safety and
            stabilization.
          </p>

          <Link
            href="/approach/emdr"
            className="mt-5 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F]"
          >
            Learn More
          </Link>
        </div>

        {/* Mindfulness */}
        <div className="border-t border-[#D9DDD5] py-8">
          <h3 className="text-2xl font-normal text-[#26352F]">
            Mindfulness
          </h3>

          <p className="mt-4 text-base leading-7 text-[#5F675F]">
            Practices that can help you slow down, reconnect with yourself,
            and develop greater awareness of your thoughts, emotions, and
            body.
          </p>

          <Link
            href="/approach/mindfulness"
            className="mt-5 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F]"
          >
            Learn More
          </Link>
        </div>

        {/* Body-Oriented Work */}
        <div className="border-t border-[#D9DDD5] py-8">
          <h3 className="text-2xl font-normal text-[#26352F]">
            Body-Oriented Work
          </h3>

          <p className="mt-4 text-base leading-7 text-[#5F675F]">
            Exploring the connection between emotional experiences and
            physical sensations to support greater regulation and awareness.
          </p>

          <Link
            href="/approach/body-oriented"
            className="mt-5 inline-block border-b border-[#526B5B] pb-1 text-sm font-medium text-[#26352F]"
          >
            Learn More
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>
      {/* Our Office */}
      <section
        id="office"
        className="bg-[#FAF9F5] px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
              Our Office
            </p>

            <h2 className="text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl lg:text-5xl">
              A quiet, welcoming space in Santa Monica.
            </h2>

            <p className="mt-7 text-base leading-7 text-[#5F675F] sm:text-lg">
  My Santa Monica office is a quiet, private space designed to feel calm and
  grounding. Natural light and a comfortable, uncluttered environment create
  room to slow down, reflect, and feel more at ease during sessions.
</p>
          </div>

          {/* Office Images */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/office-1.jpeg"
                alt="Dr. Maya Reynolds therapy office in Santa Monica"
                className="h-[300px] w-full object-cover sm:h-[420px]"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/office-2.jpeg"
                alt="Therapy office interior in Santa Monica"
                className="h-[300px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </div>

          {/* Office Details */}
          <div className="mt-12 grid gap-8 border-t border-[#D9DDD5] pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-normal text-[#26352F]">
                Location
              </h3>

              <p className="mt-3 text-base leading-7 text-[#5F675F]">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-[#26352F]">
                In-Person Therapy
              </h3>

              <p className="mt-3 text-base leading-7 text-[#5F675F]">
                Private, in-person therapy sessions are available from the
                Santa Monica office.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-[#26352F]">
                Secure Telehealth
              </h3>

              <p className="mt-3 text-base leading-7 text-[#5F675F]">
                Secure telehealth sessions are available for clients located
                across California.
              </p>
            </div>
          </div>
        </div>
      </section>

    
{/* FAQs */}
<section className="bg-[#E8EDE6] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
  <div className="mx-auto max-w-5xl">
    <div className="max-w-2xl">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
        Frequently Asked Questions
      </p>

      <h2 className="text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl lg:text-5xl">
        A few answers before we begin.
      </h2>
    </div>

    <div className="mt-12 divide-y divide-[#C9D1C9] border-t border-[#C9D1C9]">
      <div className="py-7">
        <h3 className="text-xl font-normal text-[#26352F]">
          What issues do you help with?
        </h3>

        <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F675F]">
          I work with adults experiencing anxiety, panic, trauma, burnout,
          perfectionism, professional stress, and difficulties with emotional
          regulation.
        </p>
      </div>

      <div className="py-7">
        <h3 className="text-xl font-normal text-[#26352F]">
          Do you offer in-person therapy?
        </h3>

        <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F675F]">
          Yes. In-person therapy is available from my private office in
          Santa Monica, California.
        </p>
      </div>

      <div className="py-7">
        <h3 className="text-xl font-normal text-[#26352F]">
          Do you offer online therapy?
        </h3>

        <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F675F]">
          Yes. Secure telehealth sessions are available for clients located
          in California.
        </p>
      </div>

      <div className="py-7">
        <h3 className="text-xl font-normal text-[#26352F]">
          What therapy approaches do you use?
        </h3>

        <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F675F]">
          My approach integrates cognitive behavioral therapy, EMDR,
          mindfulness-based practices, and body-oriented techniques.
        </p>
      </div>

      <div className="py-7">
        <h3 className="text-xl font-normal text-[#26352F]">
          Is trauma therapy paced carefully?
        </h3>

        <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F675F]">
          Yes. Trauma work is approached carefully with an emphasis on
          safety, stabilization, and developing skills for regulation in
          everyday life.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Appointment CTA */}
      <section id="contact" className="bg-[#F3F0E8]">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
         {/* Content */}
<div className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
  <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#526B5B]">
    Begin Therapy
  </p>

  <h2 className="max-w-xl text-3xl font-normal leading-tight text-[#26352F] sm:text-4xl lg:text-5xl">
    A calmer, more grounded way forward.
  </h2>

  <p className="mt-7 max-w-lg text-base leading-7 text-[#5F675F] sm:text-lg">
    If anxiety, trauma, burnout, or constant pressure has been affecting your
    daily life, therapy can be a space to slow down and reconnect with yourself.
    I offer in-person therapy in Santa Monica and secure telehealth sessions
    for clients located in California.
  </p>

            <a
              href="/contact"
              className="mt-8 inline-block bg-[#526B5B] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#405747]"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Image */}
          {/* Image */}
<div className="h-[350px] w-full sm:h-[450px] lg:h-[650px]">
            <img
              src="/appointment.jpg"
              alt="Welcoming therapy environment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#26352F] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-4 lg:px-14">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-medium">
              Dr. Maya Reynolds, PsyD
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#D5DDD6]">
              Licensed clinical psychologist offering warm, grounded therapy
              for adults in Santa Monica and across California.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#D5DDD6]">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="#approach" className="hover:text-white">
                  Approach
                </a>
              </li>

              <li>
                <a href="#office" className="hover:text-white">
                  Office
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#D5DDD6]">
              <li>Anxiety & Panic Therapy</li>
              <li>Trauma Therapy</li>
              <li>Burnout & Perfectionism</li>
              <li>EMDR</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm leading-6 text-[#D5DDD6]">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p>In-Person & Secure Telehealth</p>
              <p>Serving clients across California</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#405047]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-[#AEB9B0] sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
            <p>
              © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
            </p>

            <div className="mt-8 flex gap-6">
      <Link
        href="/privacy-policy"
        className="text-sm text-white/70 hover:text-white"
      >
        Privacy Policy
      </Link>

      <Link
        href="/terms"
        className="text-sm text-white/70 hover:text-white"
      >
        Terms
      </Link>
    </div>
          </div>
        </div>
      </footer>
    </main>
  );
}