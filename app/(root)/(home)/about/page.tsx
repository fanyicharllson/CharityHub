"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Savelife from "@/public/assets/images/faqimage.avif";
import { useRef, useState, useEffect } from "react";
import VoluntierCard from "@/components/aboutpagecomponents/voluntiercard";
import Voluntier4 from "@/public/assets/images/voluntier4.webp";
import Voluntier5 from "@/public/assets/images/voluntier5.webp";
import Voluntier2 from "@/public/assets/images/voluntier2.jpeg";

export default function AboutPage() {
  const [successfulCauses, setSuccessfulCauses] = useState(0);
  const [amazingDonors, setAmazingDonors] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        if (count <= 80) setSuccessfulCauses(count);
        if (count <= 70) setAmazingDonors(count);
        if (count >= 80 && count >= 70) clearInterval(interval);
      }, 20);
    }
  }, [isInView]);

  const renderProgressBar = (
    percentage: number,
    color: string,
    label: string
  ) => (
    <div className="space-y-2 text-center">
      <div>
        <span id="ProgressLabel" className="sr-only">
          {label}
        </span>
        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow={percentage}
          className="relative block rounded-full bg-gray-200 w-full h-4"
        >
          <span className="absolute inset-0 flex items-center justify-center text-xs">
            <span className="font-bold text-white">{percentage}%</span>
          </span>
          <span
            className={`block h-4 rounded-full ${
              color === "green" ? "bg-green-600" : ""
            } ${color === "blue" ? "bg-blue-600" : ""}`}
            style={{ width: `${percentage}%` }}
          />
        </span>
      </div>
      <p className="text-sm font-bold text-gray-700">{label}</p>
    </div>
  );

  return (
    <>
      {/* About Banner section */}
      <section className="relative bg-[url('https://qbfyfenofkxhkgzanjlu.supabase.co/storage/v1/object/public/banner_image/savelife.jpg')] py-16 bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
        <div className="relative mx-auto max-w-screen-2xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:px-8 text-white text-5xl font-bold max-md:text-3xl capitalize">
          About Us
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg shadow-lg"
            >
              <Image
                src={Savelife}
                alt="Save a Life Campaign"
                width={600}
                height={600}
                className="rounded-md object-contain max-xl:w-full"
              />
            </motion.div>

            {/* Progress Bars */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="h2-title text-center">Who We Are</h2>
              <p className="mt-4 text-lg text-gray-700">
                We are a dedicated team on a mission to create a better world by
                addressing critical needs. From providing essential resources to
                empowering communities, our efforts are driven by the belief
                that together, we can make a lasting impact. Join us as we work
                towards a brighter, more compassionate future.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                {renderProgressBar(
                  successfulCauses,
                  "green",
                  "Successful Causes"
                )}
                {renderProgressBar(amazingDonors, "blue", "Amazing Donors")}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recent voluntier section */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2 text-center pb-4">
          <div className="bg-teal-500 w-12 h-[3px] flex flex-col justify-center items-center text-center"></div>
          <h4 className="text-teal-500 font-bold">Our Inspiring Volunteers</h4>
        </div>
        <h2 className="h2-title text-center">
          Meet Our Recent Voluntiers <br></br> that Change Lives
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <VoluntierCard
            heading="John Doe"
            text="Contributed 50 hours of teaching in underprivileged schools."
            image={Voluntier4}
          />
          <VoluntierCard
            heading="Jane Smith"
            text="Organized a health camp, assisting 200+ families with medical aid."
            image={Voluntier5}
          />
          <VoluntierCard
            heading="Sam Lee"
            text="Helped construct sustainable homes for displaced communities."
            image={Voluntier2}
          />
        </div>
      </section>
    </>
  );
}
