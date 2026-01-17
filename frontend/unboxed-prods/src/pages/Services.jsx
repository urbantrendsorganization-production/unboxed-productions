import { Link2 } from "lucide-react";
import React from "react";

function Services() {
  return (
    <section className="w-full py-16">
      {/* Text Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-kufam">
          Our Services
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          We offer a wide range of services to cater to your needs, including:
        </p>
      </div>

      {/* CONTENT SECTION */}
      <main className="w-full relative mt-3">
        {/* Background Image */}
        <img
          src="/servbg.jpg"
          alt="Services background"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none transform-gpu will-change-transform"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-white p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* PHOTOGRAPHY */}
            <div className="md:col-span-3 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden isolate">
              <img
                src="/photograph.jpg"
                alt="Photography service"
                className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
              />

              <div className="absolute top-3 left-3 z-20">
                <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-semibold uppercase bg-black/70 rounded-full backdrop-blur-sm">
                  common
                </span>
              </div>

              <a
                href="#"
                className="absolute top-3 right-3 z-20 bg-white/70 hover:bg-white text-black p-2 rounded-full transition"
              >
                <Link2 className="h-5 w-5" />
              </a>

              <div className="absolute bottom-0 left-0 w-full p-4 bg-white/80">
                <h1 className="text-black text-3xl font-extrabold font-playfair">
                  PHOTOGRAPHY
                </h1>
                <p className="text-black text-sm sm:text-base mt-1">
                  When an unknown printer took a galley of type and scrambled it to make a
                  type specimen book.
                </p>
              </div>
            </div>

            {/* LAUNCHES */}
            <div className="md:col-span-1 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden isolate">
              <img
                src="/launch.jpg"
                alt="Launch events"
                className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
              />

              <div className="absolute bottom-3 left-3 z-20">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase bg-black/70 rounded-full backdrop-blur-sm">
                  Service
                </span>
              </div>

              <a
                href="#"
                className="absolute bottom-3 right-3 z-20 bg-black hover:bg-white text-white p-2 rounded-full transition"
              >
                <Link2 className="h-5 w-5" />
              </a>

              <div className="absolute top-0 left-0 w-full p-3 bg-white/85">
                <h1 className="text-black text-xl sm:text-2xl font-extrabold font-playfair">
                  LAUNCHES
                </h1>
                <p className="text-black text-xs sm:text-sm mt-1">
                  When an unknown printer took a galley of type.
                </p>
              </div>
            </div>

            {/* CONCERTS */}
            <div className="md:col-span-3 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden isolate">
              <img
                src="/concert.jpg"
                alt="Concert coverage"
                className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
              />

              <div className="absolute top-3 left-3 z-20">
                <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-semibold uppercase bg-black/70 rounded-full backdrop-blur-sm">
                  common
                </span>
              </div>

              <a
                href="#"
                className="absolute top-3 right-3 z-20 bg-white/70 hover:bg-white text-black p-2 rounded-full transition"
              >
                <Link2 className="h-5 w-5" />
              </a>

              <div className="absolute bottom-0 left-0 w-full p-4 bg-white/80">
                <h1 className="text-black text-3xl font-extrabold font-playfair">
                  CONCERTS
                </h1>
                <p className="text-black text-sm sm:text-base mt-1">
                  When an unknown printer took a galley of type and scrambled it.
                </p>
              </div>
            </div>

            {/* CORPORATE */}
            <div className="md:col-span-1 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden isolate">
              <img
                src="/corp.jpg"
                alt="Corporate events"
                className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
              />

              <div className="absolute bottom-3 left-3 z-20">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase bg-black/70 rounded-full backdrop-blur-sm">
                  Service
                </span>
              </div>

              <a
                href="#"
                className="absolute bottom-3 right-3 z-20 bg-black hover:bg-white text-white p-2 rounded-full transition"
              >
                <Link2 className="h-5 w-5" />
              </a>

              <div className="absolute top-0 left-0 w-full p-3 bg-white/85">
                <h1 className="text-black text-xl sm:text-2xl font-extrabold font-playfair">
                  CORPORATE
                </h1>
                <p className="text-black text-xs sm:text-sm mt-1">
                  When an unknown printer took a galley of type.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </section>
  );
}

export default Services;
