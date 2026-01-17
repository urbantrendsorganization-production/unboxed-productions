import { Button } from "@/components/ui/button"
import React from "react"
import Services from "./Services"
import Works from "./Works"
import Testimonials from "./Testimonials"
import Booking from "./Booking"

function Home() {
    return (
        <>
            {/* Hero */}
<div className="relative w-full h-screen isolate">
  {/* Main background */}
  <img
    src="/mainbg.jpg"
    alt="Main background"
    loading="eager"
    className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform pointer-events-none select-none"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

  <section className="relative w-full h-screen overflow-hidden isolate">

    {/* Landscape background image */}
    <img
      src="/photographer.jpg"
      alt="Photographer background"
      className="absolute inset-0 w-full h-full object-cover opacity-45 transform-gpu will-change-transform pointer-events-none select-none"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-4 text-white space-y-6">

      <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-kufam">
        CRAFTING MOMENTS YOU <br className="hidden md:block" />
        CAN HEAR AND FEEL
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl font-kufam">
        We turn ideas into cinematic visuals that captivate your audience and drive results.
        Your story, our lens.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a
          href="#services"
          className="px-6 py-3 bg-gradient-to-r from-[#0a1f5c] to-black text-white font-semibold rounded-lg transition"
        >
          Get Started
        </a>
        <a
          href="#portfolio"
          className="px-6 py-3 bg-white hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition"
        >
          See Portfolio
        </a>
      </div>

      {/* Available festivals box */}
      <div className="mt-8 h-32 flex justify-center items-center rounded-lg max-w-md relative overflow-hidden isolate shadow-lg">
        <img
          src="/fest.jpg"
          alt="Festival background"
          className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 space-x-3">
          <Button>Available festivals</Button>
          <Button>Book festival</Button>
        </div>
      </div>
    </div>

    {/* Portrait accent image */}
    <img
      src="/grapher.jpg"
      alt="Portrait accent"
      className="absolute bottom-0 right-20 w-1/4 h-3/4 md:w-1/5 md:h-4/5 opacity-15 object-cover rounded-lg shadow-xl transform-gpu will-change-transform pointer-events-none select-none"
    />
  </section>
</div>



            <Services />

            <Works />

            <Testimonials />

            <Booking />


        </>
    )
}

export default Home
