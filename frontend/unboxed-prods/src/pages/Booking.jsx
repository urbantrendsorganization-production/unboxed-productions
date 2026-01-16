import React, { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // simple frontend validation
  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errs.email = "Invalid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    return errs;
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    console.log("Form submitted:", formData);

    // mock async submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ fullName: "", email: "", subject: "" });
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* booking text */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold">
          Book a meeting with us
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          An unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries.
        </p>
      </div>

      {/* booking frame */}
      <main className="w-full min-h-screen relative mt-12 flex items-center">
        {/* background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/book.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#363DC2] via-black/40 to-black" />

        {/* white card */}
        <div className="relative z-10 w-[90%] max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT – FORM */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6">
                Schedule your session
              </h3>

              {submitted && (
                <div className="mb-6 text-green-600 font-semibold">
                  Thank you! Your booking request has been submitted.
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-black"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-black"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <textarea
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-black"
                    }`}
                  />
                  
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                  Submit request
                </button>
              </form>
            </div>

            {/* RIGHT – TILTED IMAGE */}
            <div className="relative hidden md:flex items-center justify-center bg-gray-50">
              <div className="w-4/5 h-4/5 transform rotate-[-6deg] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/tilt.jpg"
                  alt="Booking visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Booking;
