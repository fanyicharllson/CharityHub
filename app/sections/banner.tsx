"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";

const MotionDiv = motion.div as React.FC<HTMLMotionProps<"div">>;
const MotionStrong = motion.strong as React.FC<HTMLMotionProps<"strong">>;
const MotionP = motion.p as React.FC<HTMLMotionProps<"p">>;

const Banner = () => {
  return (
    <section className="relative bg-[url(/assets/images/banner.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          //  {...{ className: clsx("your-class") }}
          className="max-w-xl text-center sm:text-left"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-tight drop-shadow-lg">
            Make a Difference,
            <MotionStrong
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="block font-extrabold text-teal-500 sm:text-7xl"
            >
              One Life at a Time
            </MotionStrong>
          </h1>

          <MotionP
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 max-w-lg text-white sm:text-xl/relaxed"
          >
            Join us in creating lasting change by supporting those in need.
            Together, we can build a better future for everyone.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 flex gap-6"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-white">
                <CountUp end={1000000} duration={3} separator="," />+
              </p>
              <p className="text-white text-sm">Lives Impacted</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">
                <CountUp end={100000} duration={3} separator="," />+
              </p>
              <p className="text-white text-sm">Donations Received</p>
            </div>
          </MotionDiv>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
             <ButtonLink btnName={"Donate Now"}/>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Link
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
              >
                Learn More
              </Link>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Banner;
