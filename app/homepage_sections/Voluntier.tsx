// pages/volunteer.tsx
import React from "react";

const VolunteerSection: React.FC = () => {
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
          <h2 className="text-4xl font-bold text-teal-600 mb-4">
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
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teak-500 focus:border-teal-500"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
