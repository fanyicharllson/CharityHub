"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Savelife from "@/public/assets/images/savelife.jpg";
import Link from "next/link";
import { FaHeartbeat, FaHandsHelping, FaSeedling } from "react-icons/fa";
import { useRef } from "react";

const SaveLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div
        ref={ref}
       
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:items-center"
        >
          {/* Animated Image Section */}
          <motion.div
            variants={imageVariants}
            className="rounded-lg shadow-lg max-lg:w-full"
          >
            <Image
              src={Savelife}
              alt="Save a Life Campaign"
              width={600}
              height={600}
              className="rounded-md object-contain max-xl:w-full"
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div variants={textVariants} className="space-y-6">
            <h2 className="h2-title">Join Our Mission to Save Lives</h2>
            <p className="mt-4 text-lg text-gray-700">
              Every year, millions of people lose their lives due to preventable
              causes. Together, we can change this. Your contribution helps us
              provide essential resources, medical aid, and support to those in
              dire need.
            </p>
            <p className="text-lg text-gray-700">
              Be the reason someone smiles today. Be the change you want to see
              in the world. Every small act of kindness has the power to save a
              life.
            </p>

            {/* Icons Section */}
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-5"
              variants={containerVariants}
            >
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center"
              >
                <FaHeartbeat className="text-red-500 text-4xl mb-2" />
                <p className="font-semibold text-gray-900">Health Support</p>
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center"
              >
                <FaHandsHelping className="text-blue-500 text-4xl mb-2" />
                <p className="font-semibold text-gray-900">Emergency Aid</p>
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center"
              >
                <FaSeedling className="text-green-500 text-4xl mb-2" />
                <p className="font-semibold text-gray-900">
                  Sustainable Solutions
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex gap-4 justify-center text-center"
            >
              <Link href="/causes" className="link-btn">
                View Causes
              </Link>
              {/* Uncomment to add another button */}
              {/* <Link
                href="/volunteer"
                className="bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Become a Volunteer
              </Link> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SaveLife;
