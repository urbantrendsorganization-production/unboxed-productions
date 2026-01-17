import { Button } from "@/components/ui/button"
import React from "react"
import Services from "./Services"
import Works from "./Works"
import Testimonials from "./Testimonials"
import Booking from "./Booking"

function Home() {

    const featuredWorks = [
  {
    title: "Live Concert Coverage",
    desc: "High-energy visuals that capture crowd emotion.",
    img: "/concert.jpg",
  },
  {
    title: "Corporate Launch",
    desc: "Clean, premium storytelling for brands.",
    img: "/corp.jpg",
  },
  {
    title: "Festival Documentary",
    desc: "Raw moments, real people, real sound.",
    img: "/fest.jpg",
  },
]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden isolate">

        {/* Background image */}
        <img
          src="/mainbg.jpg"
          alt="Main background"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        {/* Secondary texture */}
        <img
          src="/photographer.jpg"
          alt="Texture"
          className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none select-none"
        />

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center text-white">

          {/* LEFT */}
          <div className="space-y-8">

            <span className="inline-flex w-fit items-center px-4 py-1 text-xs sm:text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              🎬 Creative Production Studio
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl leading-tight font-kufam">
              CRAFTING MOMENTS YOU CAN<br className="hidden md:block" />
              <span className="text-white/90"> HEAR AND FEEL</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl max-w-xl text-white/90">
              We turn ideas into cinematic visuals that captivate audiences,
              elevate brands, and drive real results.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group px-6 py-3 bg-gradient-to-r from-[#0a1f5c] to-black rounded-lg font-semibold transition hover:scale-105 hover:shadow-xl"
              >
                Get Started
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#portfolio"
                className="px-6 py-3 bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-lg transition hover:scale-105"
              >
                See Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 pt-4 text-sm">
              {[
                "🎥 120+ Projects",
                "🌍 International Clients",
                "⭐ 5+ Years Experience",
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Festivals */}
            <div className="mt-6 h-32 max-w-md relative rounded-xl overflow-hidden shadow-xl group">
              <img
                src="/fest.jpg"
                alt="Festival"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 flex justify-center items-center gap-3 h-full">
                <Button>Available festivals</Button>
                <Button>Book festival</Button>
              </div>
            </div>
          </div>

          {/* RIGHT — Featured Work */}
          {/* RIGHT — Featured Works Stack */}
<div className="hidden md:flex justify-end">
  <div className="relative w-96 h-[30rem]">

    {featuredWorks.map((work, index) => (
      <div
        key={work.title}
        className={`
          absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl
          transition-all duration-500 ease-out cursor-pointer
          ${index === 0 ? "z-30 translate-x-0 translate-y-0" : ""}
          ${index === 1 ? "z-20 translate-x-4 translate-y-4" : ""}
          ${index === 2 ? "z-10 translate-x-8 translate-y-8" : ""}
          hover:z-40 hover:translate-x-0 hover:translate-y-0
        `}
      >
        <img
          src={work.img}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wide bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          Featured
        </span>

        <div className="absolute bottom-0 p-5 space-y-2">
          <h3 className="text-xl font-bold">{work.title}</h3>
          <p className="text-sm text-white/80">{work.desc}</p>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
          >
            Watch project →
          </a>
        </div>
      </div>
    ))}

  </div>
</div>

        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-1 h-6 bg-white/60 rounded-full animate-pulse" />
        </div>
      </section>

      <Services />
      <Works />
      <Testimonials />
      <Booking />
    </>
  )
}

export default Home
