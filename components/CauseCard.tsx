"use client";

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Image from 'next/image';
import Link from 'next/link';

const CauseCard: React.FC<{causeId: number; title: string; description: string; image: string; goal: number; raised: number }> = ({causeId, title, description, image, goal, raised }) => {
    const percentage = Math.min((raised / goal) * 100, 100); // Ensure it doesn't exceed 100
    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [inView, controls]);
  
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <Image
          alt="Charity Cause"
          src={image}
          className="h-56 w-full object-cover"
          width={224}
          height={224}
          priority 
        />
  
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-3 text-sm text-gray-600">{description}</p>
  
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <p>
                Raised: <span className="font-medium text-green-600">${raised.toLocaleString()}</span>
              </p>
              <p>
                Goal: <span className="font-medium text-gray-900">${goal.toLocaleString()}</span>
              </p>
            </div>
  
            <div className="relative mt-2 h-4 w-full overflow-hidden rounded-full bg-gray-200">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </div>
  
            <p className="mt-2 text-sm text-gray-500">
              <CountUp start={0} end={percentage} duration={1.2} suffix="%" /> achieved
            </p>
          </div>
  
          <Link
            href={`/donate/${causeId}`}
            className="mt-6 inline-block w-full rounded-md bg-teal-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-teal-700"
          >
            Donate 
          </Link>
        </div>
      </motion.article>
    );
  };

  export default CauseCard;