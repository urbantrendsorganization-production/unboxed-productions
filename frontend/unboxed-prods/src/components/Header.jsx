import React, { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  const offers = [
    "events offers",
    "exhibitions offers",
    "videography offers",
    "corporate offers",
    "festivals offers",
    "photography offers",
    "cinematography offers",
  ]

  return (
    <header className="w-full sticky top-0 z-50 mt-3">
      
      <div className="mx-auto text-white max-w-8xl px-4 py-3 bg-gradient-to-r from-[#282665] to-[#000000] relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl md:text-3xl font-light tracking-wide font-christmas">
              Unboxed <span className="text-orange-500">Productions</span>
            </h1>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex absolute left-1/2 px-4 bg-white text-black -translate-x-1/2 font-playfair">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-white/10 z-50"
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {open && (
          <div className="mt-4 rounded-lg bg-white text-black shadow-lg">
            <div className="p-4 grid gap-4">
              <ul className="md:hidden space-y-3 font-medium">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>

              <div className="border-t pt-3 text-sm text-gray-600">
                <p>Extra info:</p>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:underline">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full h-10 font-playfair mt-2 bg-gradient-to-r from-[#0a1f5c] to-black flex justify-center items-center overflow-hidden">
        <div className="flex space-x-8 text-white font-semibold text-sm sm:text-base animate-marquee px-4 md:px-8">
          {offers.map((offer, idx) => (
            <span key={idx}>{offer}</span>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
