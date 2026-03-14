import React, { useRef, useState } from "react";

const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
};

export default function ContactUs() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,
      }}
    >
      {/* Wider container to remove side empty space */}
      <div className="max-w-6xl xl:max-w-7xl mx-auto space-y-10">

        {/* Title Section */}
        <div className="text-center space-y-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
            style={{ color: COLORS.primary }}
          >
            Need Guidance?
          </h2>

          <p
            className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Not sure where to begin? TaleemiGuide provides reliable academic
            and career guidance for students and professionals at every stage.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
            <button
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-medium transition duration-300"
              style={{
                backgroundColor: COLORS.primary,
                color: "white",
              }}
            >
              Learn More
            </button>

            <button
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-medium transition duration-300"
              style={{
                backgroundColor: COLORS.secondary,
                color: "white",
              }}
            >
              Create Free Account
            </button>
          </div>
        </div>

        {/* Quick Question */}
        <div className="text-center space-y-2">
          <h3
            className="text-lg sm:text-xl md:text-2xl font-semibold"
            style={{ color: COLORS.primary }}
          >
            Have a Quick Question?
          </h3>

          <p
            className="text-sm sm:text-base"
            style={{ color: COLORS.textGray }}
          >
            Send us a message for quick clarification or use{" "}
            <a
              href="#"
              className="underline font-medium"
              style={{ color: COLORS.secondary }}
            >
              Live Chat
            </a>
          </p>
        </div>

        {/* Form Card */}
        <div className="relative bg-white shadow-xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-blue-300 transition-shadow duration-500 max-w-4xl lg:max-w-5xl mx-auto">

          {/* Form Title */}
          <h3
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-center"
            style={{ color: COLORS.primary }}
          >
            Need More Information
          </h3>

          <p
            className="text-center text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: COLORS.textGray }}
          >
            Ask Us Anything. If you need general information about TaleemiGuide,
            send us a message and we will respond shortly.
          </p>

          {/* Note */}
          <p
            className="text-xs sm:text-sm text-center mb-6"
            style={{ color: COLORS.secondary }}
          >
            Note: For academic problem solving and expert guidance, you may go
            to Taleemi Advice section.
          </p>

          {/* Success Message */}
          {submitted ? (
            <div
              className="text-center text-base sm:text-lg font-medium py-8"
              style={{ color: COLORS.primary }}
            >
              Thank you for your message, our representative will respond shortly.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full px-4 pt-5 pb-2 text-sm sm:text-base rounded-xl border border-gray-300 focus:outline-none focus:border-2 transition peer"
                  />
                  <label
                    className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    style={{ color: COLORS.textGray }}
                  >
                    Name
                  </label>
                </div>

                {/* Email / Phone */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full px-4 pt-5 pb-2 text-sm sm:text-base rounded-xl border border-gray-300 focus:outline-none focus:border-2 transition peer"
                  />
                  <label
                    className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    style={{ color: COLORS.textGray }}
                  >
                    Email / Phone Number
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows="4"
                  placeholder=" "
                  className="w-full px-4 pt-5 pb-2 text-sm sm:text-base rounded-xl border border-gray-300 focus:outline-none focus:border-2 transition peer"
                ></textarea>

                <label
                  className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  Message
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base"
                style={{
                  backgroundColor: COLORS.primary,
                  color: "white",
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}