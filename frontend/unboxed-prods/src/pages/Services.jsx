import { Link2, Link2Off } from 'lucide-react'
import React from 'react'

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
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/servbg.jpg)' }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content goes here */}
                <div className="relative z-10 text-white p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                        {/* Top Row */}
                        <div
                            className="md:col-span-3 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden"
                            style={{
                                backgroundImage: "url(/photograph.jpg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Top-left indicator */}
                            <div className="absolute top-3 left-3 z-20">
                                <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wide bg-black/70 text-white rounded-full backdrop-blur">
                                    common
                                </span>
                            </div>

                            {/* Top-right link icon */}
                            <a
                                href="#"
                                className="absolute top-3 right-3 z-20 bg-white/70 hover:bg-white text-black p-2 rounded-full transition"
                                aria-label="View photography"
                            >
                                <Link2 className="h-5 w-5" />
                            </a>

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-white/70 backdrop-blur">
                                <h1 className="text-black text-3xl font-extrabold font-playfair">
                                    PHOTOGRAPHY
                                </h1>
                                <p className="text-black text-sm sm:text-base mt-1">
                                    When an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries.
                                </p>
                            </div>
                        </div>

                        {/* second-slim row */}
                        <div
                            className="md:col-span-1 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden"
                            style={{
                                backgroundImage: "url(/launch.jpg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Top-left indicator */}
                            <div className="absolute bottom-3 left-3 z-20">
                                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-black/70 text-white rounded-full backdrop-blur">
                                    Service
                                </span>
                            </div>

                            {/* Top-right link icon */}
                            <a
                                href="#"
                                className="absolute bottom-3 right-3 z-20 bg-black hover:bg-white text-white p-2 rounded-full transition"
                                aria-label="View launches"
                            >
                                <Link2 className="h-5 w-5" />
                            </a>

                            {/* Bottom content */}
                            <div className="absolute top-0 left-0 w-full p-3 bg-white/85 backdrop-blur">
                                <h1 className="text-black text-xl sm:text-2xl font-extrabold font-playfair">
                                    LAUNCHES
                                </h1>
                                <p className="text-black text-xs sm:text-sm mt-1 leading-snug">
                                    When an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book.
                                </p>
                            </div>
                        </div>



                        {/* Bottom Row */}
                        <div
                            className="md:col-span-3 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden"
                            style={{
                                backgroundImage: "url(/concert.jpg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Top-left indicator */}
                            <div className="absolute top-3 left-3 z-20">
                                <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wide bg-black/70 text-white rounded-full backdrop-blur">
                                    common
                                </span>
                            </div>

                            {/* Top-right link icon */}
                            <a
                                href="#"
                                className="absolute top-3 right-3 z-20 bg-white/70 hover:bg-white text-black p-2 rounded-full transition"
                                aria-label="View photography"
                            >
                                <Link2 className="h-5 w-5" />
                            </a>

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-white/70 backdrop-blur">
                                <h1 className="text-black text-3xl font-extrabold font-playfair">
                                    CONCERTS
                                </h1>
                                <p className="text-black text-sm sm:text-base mt-1">
                                    When an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries.
                                </p>
                            </div>
                        </div>

                        {/* fourth-slim row */}
                        <div
                            className="md:col-span-1 h-56 sm:h-64 md:h-80 rounded-lg relative overflow-hidden"
                            style={{
                                backgroundImage: "url(/corp.jpg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Top-left indicator */}
                            <div className="absolute bottom-3 left-3 z-20">
                                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-black/70 text-white rounded-full backdrop-blur">
                                    Service
                                </span>
                            </div>

                            {/* Top-right link icon */}
                            <a
                                href="#"
                                className="absolute bottom-3 right-3 z-20 bg-black hover:bg-white text-white p-2 rounded-full transition"
                                aria-label="View launches"
                            >
                                <Link2 className="h-5 w-5" />
                            </a>

                            {/* Bottom content */}
                            <div className="absolute top-0 left-0 w-full p-3 bg-white/85 backdrop-blur">
                                <h1 className="text-black text-xl sm:text-2xl font-extrabold font-playfair">
                                    CORPORATE
                                </h1>
                                <p className="text-black text-xs sm:text-sm mt-1 leading-snug">
                                    When an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </main>




        </section>
    )
}

export default Services
