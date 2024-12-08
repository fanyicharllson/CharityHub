"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Savelife from "@/public/assets/images/savelife.jpg";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import { FaHeartbeat, FaHandsHelping, FaSeedling } from "react-icons/fa";

const SaveLife = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 md:items-center">
          {/* Animated Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={Savelife}
              className="rounded-lg shadow-lg max-xl:w-full object-contain"
              alt="Save a Life Campaign"
              width={600}
              height={600}
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Join Our Mission to Save Lives
              </h2>
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
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-5">
                <div className="flex flex-col items-center">
                  <FaHeartbeat className="text-red-500 text-4xl mb-2" />
                  <p className="font-semibold text-gray-900">Health Support</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaHandsHelping className="text-blue-500 text-4xl mb-2" />
                  <p className="font-semibold text-gray-900">Emergency Aid</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaSeedling className="text-green-500 text-4xl mb-2" />
                  <p className="font-semibold text-gray-900">Sustainable Solutions</p>
                </div>
              </div>

              <div className="flex gap-4 justify-center text-center">
                <Link href="/causes" className="link-btn">
                  View Causes
                </Link>
                {/* <Link
                  href="/volunteer"
                  className="bg-yellow-500 text-white hover:bg-yellow-600"
                >
                  Become a Volunteer
                </Link> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaveLife;
