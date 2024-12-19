"use client";

import React from "react";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { motion } from "framer-motion";

const VolunteerSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    availability: "",
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
    const { fullName, email, phone, dateOfBirth, availability, message } =
      formData;

    try {
      const { error } = await supabase.from("charity_voluntiers").insert([
        {
          full_name: fullName,
          email,
          phone,
          date_of_birth: dateOfBirth,
          availability,
          message,
        },
      ]);

      if (error) {
        throw error;
      }

      setNotification({
        type: "success",
        message:
          "Thank you! Your information has been submitted successfully, we will get back you shortly.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        availability: "",
        message: "",
      });
    } catch (error) {
      console.error("Error from volunteer component", error);
      setNotification({
        type: "error",
        message:
          "An error occurred while submitting your information. Please try again.",
      });
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="flex justify-center items-center gap-2 text-center pb-4">
        <div className="bg-teal-500 w-12 h-[3px] flex flex-col justify-center items-center text-center"></div>
        <h4 className="text-teal-500 font-bold">Become a Volunteer</h4>
      </div>
      <h2 className="h2-title text-center pb-12">
        Together We Can Make <br></br> A Difference
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            Make a Difference Today. Shape a Better Tomorrow.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join our mission to bring positive change to the world. Volunteering
            with us means making an impact not only for today but also for
            generations to come. Your efforts can transform lives and foster
            hope where its needed most.
          </p>
          <p className="text-lg text-gray-600">
            Whether you have an hour to spare or a lifetime to share, every
            contribution matters. Take the first step towards creating a
            brighter future. Together, we can achieve more.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700">
            Join Us Today!
          </button>
        </div>

        {/* Right Form Section */}
        <div className="bg-white shadow-md rounded-md p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium text-gray-700"
              >
                Availability
              </label>
              <select
                id="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message/Notes
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Any additional details..."
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
  );
};

export default VolunteerSection;
