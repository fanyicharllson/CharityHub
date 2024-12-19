"use client";

import { useState } from "react";
import Image from "next/image";
import FaqImage from "@/public/assets/images/banner.jpg";

type FaqCategory = {
  question: string;
  answer: string;
};

type FaqData = {
  [key: string]: FaqCategory[];
};

const FaqSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("General");

  const faqData: FaqData = {
    General: [
      {
        question: "How do I donate?",
        answer:
          "You can donate directly through our payment gateway on the website.",
      },
      {
        question: "Is my donation secure?",
        answer:
          "Yes, all donations are processed securely through our encrypted payment system.",
      },
      {
        question: "Can I specify where my donation is used?",
        answer:
          "Yes, during the donation process, you can choose a specific cause or program to support.",
      },
    ],
    Donations: [
      {
        question: "How is my donation used?",
        answer:
          "Your donation goes directly to the charity fund, helping those in need.",
      },
      {
        question: "Can I donate anonymously?",
        answer:
          "Yes, you can choose to hide your personal details during the donation process.",
      },
    ],
    Events: [
      {
        question: "How can I attend events?",
        answer: "Check out the events section to register for upcoming events.",
      },
      {
        question: "Can I host an event?",
        answer:
          "Yes, contact us to discuss hosting your event through our platform.",
      },
    ],
  };

  const filteredFaqs = faqData[selectedCategory].filter(
    (faq: { question: string; answer: string }) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAnswer = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={FaqImage}
          alt="Charity Image"
          className="object-cover w-full h-full "
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* FAQ Content */}
      <div className="relative z-10 container mx-auto pt-28 max-sm:pt-5 flex flex-col items-center justify-center">
        <div className="bg-gray-100 bg-opacity-90 rounded-lg shadow-lg p-8 max-w-5xl w-full max-sm:w-[95%]">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full p-3 mb-6 rounded-md border border-gray-300"
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Category Tabs */}
          <div className="flex justify-center mb-6 space-x-4">
            {Object.keys(faqData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="overflow-y-auto max-h-96">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(
                (faq: { question: string; answer: string }, index: number) => (
                  <div key={index} className="border-b py-4">
                    <h3
                      onClick={() => toggleAnswer(index)}
                      className="cursor-pointer font-semibold text-lg text-teal-600 hover:text-teal-800 flex justify-between items-center"
                    >
                      {faq.question}
                      <span
                      // className={`transition-transform duration-300 ${
                      //   activeQuestion === index ? "rotate-180" : ""
                      // }`}
                      >
                        ▼
                      </span>
                    </h3>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        activeQuestion === index ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      {activeQuestion === index && (
                        <p className="text-gray-700 mt-2">{faq.answer}</p>
                      )}
                    </div>
                  </div>
                )
              )
            ) : (
              <p className="text-gray-700">No FAQs found for your search.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
