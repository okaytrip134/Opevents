"use client";

import { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface EnquiryFormProps {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryForm({ open, onClose }: EnquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({ message: "", type: null });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const eventType = formData.get("eventType")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // ✅ Validation
    if (!name || !email || !phone || !eventType) {
      showNotification("Please fill all fields", "error");
      return;
    }

    setLoading(true);

    // ✅ EmailJS Integration
    emailjs
      .sendForm(
        "service_3n4z0xc", // 🔑 replace with actual service ID
        "template_m7vlqbd", // 🔑 replace with actual template ID
        form,
        { publicKey: "rVYUcthqJg_gMeQZt" } // 🔑 required in new API
      )
      .then(
        () => {
          showNotification("Enquiry submitted successfully!", "success");
          form.reset();

          setTimeout(() => {
            onClose();
          }, 1000);
        },
        (error) => {
          console.error(error.text);
          showNotification("Something went wrong. Please try again.", "error");
        }
      )
      .finally(() => setLoading(false));
  };

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });

    // Auto-hide after 3s
    setTimeout(() => {
      setNotification({ message: "", type: null });
    }, 3000);
  };

  return (
    <>
      {/* Custom Notification */}
      {notification.type && (
        <div className="fixed top-5 right-5 z-[9999]">
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-white transition-all duration-300 ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Modal */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <X size={24} />
          </button>

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Enquiry Form
          </h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="name" // ✅ must match template variable in EmailJS
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email" // ✅ must match template variable
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                name="phone" // ✅ must match template variable
                type="tel"
                placeholder="Enter your phone number"
                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            {/* Event Type Dropdown */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Event Type
              </label>
              <select
                name="eventType" // ✅ must match template variable
                className="mt-2 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Select event type
                </option>
                <option value="official">Official Event</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday Party</option>
                <option value="corporate">Corporate Meeting</option>
                <option value="engagement">Engagement</option>
                <option value="conference">Conference</option>
                <option value="others">Others</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message" // ✅ must match template variable
                rows={3}
                placeholder="Tell us about your event..."
                className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#778da9] text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? (
                <>
                  {/* Loader */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="opacity-25"
                      cx="25"
                      cy="25"
                      r="20"
                      stroke="black"
                      strokeWidth="5"
                      fill="none"
                    />
                    <path
                      className="opacity-100"
                      fill="black"
                      d="M25 5a20 20 0 0 1 20 20h-5a15 15 0 0 0-15-15V5z"
                    >
                      <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.8s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
