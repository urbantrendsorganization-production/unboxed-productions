import React from "react";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Unboxed Productions transformed our corporate event into an unforgettable experience.",
      client: "Acme Corp",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      quote:
        "Professional, creative, and flawless execution from start to finish.",
      client: "Nova Events",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Their attention to detail and production quality is on another level.",
      client: "Pulse Media",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="relative w-full py-24">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80)",
        }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* content */}
      <div className="relative z-10">
        {/* heading */}
        <div className="max-w-6xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Real feedback from brands and partners we’ve worked with.
          </p>
        </div>

        {/* grid */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center flex flex-col items-center"
            >
              {/* image circle */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-black">
                <img
                  src={item.image}
                  alt={item.client}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* testimonial */}
              <p className="text-gray-700 italic mb-8">
                “{item.quote}”
              </p>

              {/* client button */}
              <button className="mt-auto px-6 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
                {item.client}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
