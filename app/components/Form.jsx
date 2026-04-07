"use client";
import Link from "next/link";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Clear error on change
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSubmit = async () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter Link valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showNotification("error", "Please fix the errors before submitting.");
      return;
    }

    // ✅ Console pe print
    console.log("📩 Form Submitted Successfully!");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);
    console.log("Full Data:", formData);
    setIsLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message Sent Successfully 🚀");
    } else {
      alert("Error sending message");
    }
    setIsLoading(false);

    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div>
      {notification && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 9999,
            animation: "slideIn 0.4s ease",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              borderRadius: "12px",
              color: "white",
              fontWeight: "600",
              fontSize: "15px",
              maxWidth: "360px",
              boxShadow:
                notification.type === "success"
                  ? "0 0 30px rgba(34,197,94,0.4)"
                  : "0 0 30px rgba(239,68,68,0.4)",
              background:
                notification.type === "success"
                  ? "linear-gradient(135deg, #16a34a, #22c55e)"
                  : "linear-gradient(135deg, #dc2626, #ef4444)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "20px" }}>
              {notification.type === "success" ? "✅" : "❌"}
            </span>
            {notification.message}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .input-error {
          border-color: #ef4444 !important;
        }
        .error-text {
          color: #f87171;
          font-size: 12px;
          margin-top: 4px;
        }
      `}</style>

      <section className="py-24 relative" id="contact">
        <div className="max-w-3xl mx-auto px-6 rounded-2xl border border-gray-100/10 transition-all duration-700 ease-in-out backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] flex items-center justify-center hover:border-[#3b82f6] hover:shadow-2xl hover:shadow-blue-500/40">
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let&apos;s work together
                </h2>
                <p className="text-gray-400">
                  Have Link project in mind? I&apos;m always open to discussing
                  new opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-300"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all ${errors.name ? "input-error" : ""}`}
                      id="name"
                      placeholder="John Doe"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-300"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all ${errors.email ? "input-error" : ""}`}
                      id="email"
                      placeholder="john@example.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-300"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all ${errors.message ? "input-error" : ""}`}
                    id="message"
                    placeholder="Tell me about your project..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="error-text">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  className="w-full bg-[#1900ff] cursor-pointer text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  type="button"
                  onClick={handleSubmit}
                >
                  {isLoading ? "Loading..." : "Send Message"}
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-8">
                <Link
                  className="text-gray-400 hover:text-white transition-colors"
                  href="https://github.com/Muhammad-Faizan-Marral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  className="text-gray-400 hover:text-white transition-colors"
                  href="https://www.linkedin.com/in/muhammad-faizan-05093b2a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </Link>
                <Link
                  className="text-gray-400 hover:text-white transition-colors"
                  href="https://wa.me/923498289100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
