import React, { useRef } from "react";

const COLORS = {
    primary: '#1E3A8A', 
    secondary: '#F97316', 
    textGray: '#4B5563',
    lightBackground: '#EFF6FF',
};

export default function ContactUs() {
  const ref = useRef(null);
  

  return (
    <section
      ref={ref}
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      
      style={{ background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)` }}
    >
      
      {/* Container */}
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Title & Description Header */}
        <div className="text-center space-y-3">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold"
            style={{ color: COLORS.primary }}
          >
            Need Quick Help? (Seek Taleemi Advice)
          </h2>

          <p
            className="text-center max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            <span className="font-semibold" style={{ color: COLORS.primary }}>
              Taleemi Advice
            </span>{" "}
            is your academic emergency service. Whether you're choosing subjects, facing confusion, stuck in academic challenges, or planning a career transition — get expert guidance in time
          </p>
        </div>

        {/* Form Container Card */}
        <div
          className="relative bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-blue-300 transition-shadow duration-500 max-w-3xl mx-auto"
        >
          {/* Form Title */}
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: COLORS.primary }}>
            Submit Your Query
          </h3>

          <form className="space-y-6">
            {/* Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Name", "Email", "Phone"].map((placeholder, i) => (
                <div key={i} className="relative">
                  <input
                    type={placeholder === "Email" ? "email" : placeholder === "Phone" ? "tel" : "text"}
                    placeholder=" "
                    className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition peer bg-white hover:border-gray-400 duration-300"
                    style={{ 
                        borderColor: '#E5E7EB', 
                        focusBorderColor: COLORS.primary 
                    }}
                  />
                  {/* Floating Label */}
                  <label 
                    className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs"
                    style={{ color: COLORS.textGray }}
                  >
                    {placeholder}
                  </label>
                </div>
              ))}
            </div>

            {/* Dropdown - */}
            <div className="relative">
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition bg-white appearance-none hover:border-gray-400 duration-300"
                style={{ 
                    borderColor: '#E5E7EB',
                    paddingTop: '1rem', 
                    paddingBottom: '0.5rem',
                }}
              >
                <option disabled>Select your category</option>
                <option>Class 10-12</option>
                <option>BA/BSc</option>
                <option>Associate Degree</option>
                <option>BS & Equivalent</option>
                <option>MS & Equivalent</option>
                <option>PhD</option>
                <option>Working Professional</option>
              </select>
            </div>

            {/* Query Textarea */}
            <div className="relative">
              <textarea
                rows="4"
                placeholder=" "
                className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition peer bg-white hover:border-gray-400 duration-300"
                style={{ 
                    borderColor: '#E5E7EB', 
                    focusBorderColor: COLORS.primary 
                }}
              ></textarea>
              {/* Floating Label */}
              <label 
                className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs"
                style={{ color: COLORS.textGray }}
              >
                Enter your query
              </label>
            </div>

            {/* File Upload */}
            <div>
              <label className="block mb-2 font-medium text-sm" style={{ color: COLORS.primary }}>
                Supporting Documents (Optional)
              </label>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer px-5 py-2 rounded-lg transition transform hover:scale-[1.02] duration-300 font-medium"
                  style={{ 
                    backgroundColor: COLORS.secondary, 
                    color: 'white',
                    boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.5), 0 2px 4px -2px rgba(249, 115, 22, 0.5)'
                  }}
                >
                  Choose Files
                </label>
                <span className="text-sm" style={{ color: COLORS.textGray }}>No file chosen</span>
                <input id="file-upload" type="file" className="hidden" multiple />
              </div>
            </div>

            {/* Submit Button - Solid Primary Color with Secondary Hover */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
              style={{
                backgroundColor: COLORS.primary,
                color: 'white',
                boxShadow: `0 10px 15px -3px rgba(30, 58, 138, 0.5), 0 4px 6px -4px rgba(30, 58, 138, 0.5)`,
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = COLORS.secondary}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = COLORS.primary}
            >
              Click Here to Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}