"use client";

import React, { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, message } = formData;

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          full_name: fullName,
          email,
          phone,
          message,
        },
      ]);

      if (error) {
        throw error;
      }

      setNotification({
        type: "success",
        message: "Thank you for contacting us, we will get back you shortly.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error from contact component", error);
      setNotification({
        type: "error",
        message:
          "An error occurred while submitting your information. Please try again.",
      });
    }
  };

  return (
    <>
      <section className="relative bg-[url(/assets/images/savelife.jpg)] py-16 bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
        <div className="relative mx-auto max-w-screen-2xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:px-8 text-white text-5xl font-bold max-md:text-3xl capitalize">
          Contact Us
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-gray-100 py-16 px-6 sm:px-12">
        {/* Left Text Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-teal-600 mb-4">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are here to answer any questions you may have about our
              charity. Reach out to us and we`ll respond as soon as we can.
            </p>
            <p className="text-lg text-gray-600">
              Whether you want to learn more about our work, get involved, or
              support us, we are here to help. Your support can make a
              significant impact.
            </p>
            <button className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700">
              Contact Us Today!
            </button>
          </div>

          {/* Right Form Section */}
          <div className="bg-white shadow-md rounded-md p-8">
            <form className="space-y-4 relative z-20" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700"
              >
                Submit
              </button>
              {notification.type && (
                <motion.div
                  className={`mb-4 p-3 mt-4 rounded-md ${
                    notification.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {notification.message}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
