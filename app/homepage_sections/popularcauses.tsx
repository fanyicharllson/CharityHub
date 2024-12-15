"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import CauseCard from "@/components/CauseCard";
import SkeletonLoader from "@/components/skeletonLoader";

const PopularCauses = () => {
  const [causes, setCauses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch causes from the Supabase database
  const fetchCauses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("causes")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      setError("Oops! Something went wrong while fetching the causes.");
    } else {
      setCauses(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCauses();
  }, []);

  // Handle loading and error states
  if (loading) {
    return (
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2 text-center pb-4">
          <div className="bg-teal-500 w-12 h-[3px] flex flex-col justify-center items-center text-center"></div>
          <h4 className="text-teal-500 font-bold">Latest Causes</h4>
        </div>
        <h2 className="h2-title text-center">
          Find the popular cause <br /> and donate them
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Discover some of the impactful causes we are supporting. Join us to
          make a difference.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Render skeleton loaders while fetching data */}
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-6 mt-8 bg-red-100 border border-red-300 rounded-lg">
        <p className="text-lg font-medium text-red-700 mb-4">{error}</p>
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => {
            setError("");
            fetchCauses();
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center gap-2 text-center pb-4">
        <div className="bg-teal-500 w-12 h-[3px] flex flex-col justify-center items-center text-center"></div>
        <h4 className="text-teal-500 font-bold">Latest Causes</h4>
      </div>
      <h2 className="h2-title text-center">
        Find the popular cause <br></br> and donate them
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        Discover some of the impactful causes we are supporting. Join us to make
        a difference.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {causes.map((cause: any, index: number) => (
          <CauseCard
            key={index}
            causeId={cause.id}
            title={cause.title}
            description={cause.description}
            image={cause.image_url}
            goal={cause.goal}
            raised={cause.raised}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCauses;
