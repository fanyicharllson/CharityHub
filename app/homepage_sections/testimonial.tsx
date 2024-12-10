"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import { useRef } from "react";

const testimonials = [
  {
    title: "Helping Hands",
    quote:
      "With the support of this charity, I was able to get the medical help I desperately needed. Their dedication is truly life-changing.",
    author: "— Sarah Johnson",
  },
  {
    title: "Hope Restored",
    quote:
      "This organization gave me hope when I thought there was none left. I'm forever grateful for their unwavering support.",
    author: "— Ahmed Khalil",
  },
  {
    title: "Education Restored",
    quote:
      "This organization build schools, providing education when i   . I'm forever grateful for their unwavering support.",
    author: "— George Peter",
  },
  {
    title: "Joy",
    quote:
      "This organization gave me hope when I thought there was none left. I'm forever grateful for their unwavering support.",
    author: "— Amos John",
  },
];

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: 1,
      spacing: 8,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      "(max-width: 900px)": {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
  });

  const prevSlide = () => instanceRef.current?.prev();
  const nextSlide = () => instanceRef.current?.next();

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div className="mx-auto max-w-[1340px]  lg:me-0 lg:pe-0 lg:ps-8 xl:py-24">
      <div className="flex justify-start items-center gap-2 text-left pb-4">
            <div className="bg-teal-500 w-12 h-[3px] flex flex-col justify-center items-center text-center"></div>
            <h4 className="text-teal-500 font-bold text-left">Our Testimonial</h4>
          </div>
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="h2-title text-gray-900">
            Transforming Lives Through <br></br> Your Generosity
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={prevSlide}
              className="rounded-full border border-teal-600 p-3 text-teal-600 transition hover:bg-teal-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              onClick={nextSlide}
              className="rounded-full border border-teal-600 p-3 text-teal-600 transition hover:bg-teal-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between  bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-teal-600 sm:text-3xl">
                        {testimonial.title}
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    {testimonial.author}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
