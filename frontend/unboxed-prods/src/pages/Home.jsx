import { Button } from "@/components/ui/button"
import React from "react"
import Services from "./Services"

function Home() {
    return (
        <>
            {/* Hero */}
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: "url(/mainbg.jpg)" }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

                <section className="relative w-full h-screen overflow-hidden">

                    {/* Landscape main image (background) */}
                    <div
                        className="absolute inset-0 opacity-45 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url(/photographer.jpg)" }}
                    >
                        {/* Optional dark overlay */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Content over the hero */}
                    <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-4 text-white space-y-6">

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-kufam">
                            CRAFTING MOMENTS YOU <br className="hidden md:block" />CAN HEAR AND FEEL
                        </h1>

                        {/* Supporting text */}
                        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl font-kufam">
                            We turn ideas into cinematic visuals that captivate your audience and drive results. Your story, our lens.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a
                                href="#services"
                                className="px-6 py-3 bg-gradient-to-r from-[#0a1f5c] to-black hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 text-center"
                            >
                                Get Started
                            </a>
                            <a
                                href="#portfolio"
                                className="px-6 py-3 bg-white hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors duration-300 text-center"
                            >
                                See Portfolio
                            </a>
                        </div>

                        {/* Available festivals box */}
                        <div
                            className="mt-8 h-32 flex justify-center items-center rounded-lg max-w-md relative overflow-hidden"
                            style={{
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                backgroundImage: 'url(/fest.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Dark overlay for opacity */}
                            <div className="absolute inset-0 bg-black/60" />

                            {/* Button/content */}
                            <div className="relative z-10 space-x-3">
                                <Button>Available festivals</Button>
                                <Button>Book festival</Button>
                            </div>
                        </div>


                    </div>


                    {/* Portrait accent image (bottom-right) */}
                    <div
                        className="absolute bottom-0 right-20 w-1/4 opacity-15 h-3/4 md:w-1/5 md:h-4/5 bg-cover bg-center rounded-lg shadow-xl"
                        style={{ backgroundImage: "url(/grapher.jpg)" }}
                    />
                </section>



            </div>


            <Services />


        </>
    )
}

export default Home
