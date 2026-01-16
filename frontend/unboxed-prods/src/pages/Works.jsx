import React, { useState } from "react";
import { Heart, MoreVertical, X } from "lucide-react";

const worksData = [
  {
    id: 1,
    title: "Corporate Event",
    image:
      "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    tall: true,
  },
  {
    id: 2,
    title: "Stage Production",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Conference Setup",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    tall: true,
  },
  {
    id: 4,
    title: "Live Performance",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Lighting Design",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    tall: true,
  },
  {
    id: 6,
    title: "Event Crowd",
    image:
      "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Stage Lights",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Live Concert",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80",
    tall: true,
  },
  {
    id: 9,
    title: "Audience Energy",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "Outdoor Festival",
    image:
      "https://images.unsplash.com/photo-1575045663365-6d561e059e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG91dGRvb3IlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
    tall: true,
  },

  {
    id: 11,
    title: "Live Concert",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80",
    tall: true,
  },
  {
    id: 12,
    title: "Audience Energy",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 13,
    title: "Outdoor Festival",
    image:
      "https://images.unsplash.com/photo-1575045663365-6d561e059e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG91dGRvb3IlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
    tall: true,
  },
];

function Works() {
  const [likes, setLikes] = useState({});
  const [selectedWork, setSelectedWork] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8); // ✅ start with 8

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative w-full py-20">
      {/* background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/workbg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3A3677] via-black/40 to-[#000000]" />

      <div className="relative z-10">
        {/* header */}
        <div className="max-w-6xl mx-auto text-center px-4 mb-12">
          <h2 className="text-5xl font-playfair font-bold text-white"> Our Featured Works</h2>
          <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
            Curated productions, events, and live experiences.
          </p>
        </div>

        {/* STABLE MASONRY GRID */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[10px]">
          {worksData.slice(0, visibleCount).map((work) => (
            <div
              key={work.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${
                work.tall ? "row-span-28" : "row-span-20"
              }`}
            >
              {/* image */}
              <div
                className="relative cursor-pointer h-full"
                onClick={() => setSelectedWork(work)}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* actions */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(work.id);
                    }}
                    className="p-2 bg-white/90 rounded-full"
                  >
                    <Heart
                      size={18}
                      className={
                        likes[work.id]
                          ? "text-red-500 fill-red-500"
                          : "text-gray-700"
                      }
                    />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              {/* footer */}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900">
                  {work.title}
                </h3>
                <button
                  onClick={() => setSelectedWork(work)}
                  className="mt-3 w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
                >
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < worksData.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden relative">
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 bg-black text-white p-2 rounded-full"
            >
              <X size={18} />
            </button>

            <img
              src={selectedWork.image}
              alt={selectedWork.title}
              className="w-full h-[70vh] object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">
                {selectedWork.title}
              </h3>
              <p className="text-gray-600 mt-2">
                Full project breakdown, visuals, and story go here.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Works;
