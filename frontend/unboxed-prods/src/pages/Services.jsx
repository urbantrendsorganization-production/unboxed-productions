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
          We offer a wide range of services to cater to your needs.
        </p>
      </div>

      {/* CONTENT SECTION */}
      <main className="w-full relative mt-6">
        <img
          src="/servbg.jpg"
          alt=""
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* PHOTOGRAPHY */}
            <a
              href="/services/photography"
              className="group md:col-span-3 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden isolate focus:outline-none"
            >
              <img
                src="/photograph.jpg"
                alt="Photography service"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="absolute top-3 left-3 z-20 px-3 py-1 text-xs font-semibold uppercase bg-black/70 rounded-full backdrop-blur-sm">
                Popular
              </span>

              <div className="absolute top-3 right-3 z-20 bg-white/80 p-2 rounded-full transform transition group-hover:rotate-45 group-hover:scale-110">
                <Link2 className="h-5 w-5 text-black" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4 bg-white/90 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-black text-3xl font-extrabold font-playfair">
                  PHOTOGRAPHY
                </h3>
                <p className="text-black text-sm mt-1">
                  High-impact visuals that capture emotion, detail, and story.
                </p>
                <span className="inline-block mt-2 text-sm font-semibold text-[#0a1f5c]">
                  View service →
                </span>
              </div>
            </a>

            {/* LAUNCHES */}
            <a
              href="/services/launches"
              className="group md:col-span-1 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden isolate"
            >
              <img
                src="/launch.jpg"
                alt="Launch events"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-0 left-0 w-full p-3 bg-white/90">
                <h3 className="text-black text-xl font-extrabold font-playfair">
                  LAUNCHES
                </h3>
                <p className="text-black text-xs mt-1">
                  Product, brand & experience launches.
                </p>
              </div>

              <div className="absolute bottom-3 right-3 bg-black text-white p-2 rounded-full group-hover:bg-white group-hover:text-black transition">
                <Link2 className="h-4 w-4" />
              </div>
            </a>

            {/* CONCERTS */}
            <a
              href="/services/concerts"
              className="group md:col-span-3 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden isolate"
            >
              <img
                src="/concert.jpg"
                alt="Concert coverage"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 left-0 w-full p-4 bg-white/90">
                <h3 className="text-black text-3xl font-extrabold font-playfair">
                  CONCERTS
                </h3>
                <p className="text-black text-sm mt-1">
                  Live energy, crowd emotion, unforgettable moments.
                </p>
                <span className="inline-block mt-2 text-sm font-semibold text-[#0a1f5c]">
                  Explore concerts →
                </span>
              </div>
            </a>

            {/* CORPORATE */}
            <a
              href="/services/corporate"
              className="group md:col-span-1 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden isolate"
            >
              <img
                src="/corp.jpg"
                alt="Corporate events"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-0 left-0 w-full p-3 bg-white/90">
                <h3 className="text-black text-xl font-extrabold font-playfair">
                  CORPORATE
                </h3>
                <p className="text-black text-xs mt-1">
                  Professional coverage for brands that mean business.
                </p>
              </div>

              <div className="absolute bottom-3 right-3 bg-black text-white p-2 rounded-full group-hover:bg-white group-hover:text-black transition">
                <Link2 className="h-4 w-4" />
              </div>
            </a>

          </div>
        </div>
      </main>
    </section>
  );
}

export default Services;
