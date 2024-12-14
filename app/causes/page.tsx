"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import FilterBtns from "@/components/Filterbtns";
import Image from "next/image";
import Link from 'next/link';


interface Cause {
  id: number;
  title: string;
  category: string;
  image_url: string;
  goal: number;
  raised: number;
}

const AllCauses = () => {
  const [causes, setCauses] = useState<Cause[]>([]);
  const [filteredCauses, setFilteredCauses] = useState<Cause[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCauses = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("causes").select("*");
      if (error) {
        console.error("Error fetching causes:", error.message);
        setLoading(false);
        return;
      }

      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(data.map((cause: Cause) => cause.category))
      );
      setCategories(["All", ...uniqueCategories]);
      setCauses(data);
      setFilteredCauses(data);
      setLoading(false);
    };

    fetchCauses();
  }, []);

  // Filter causes based on category
  const handleFilterClick = (category: string) => {
    setActiveCategory(category);
    setFilteredCauses(
      category === "All"
        ? causes
        : causes.filter((cause) => cause.category === category)
    );
  };

  return (
    <>
      <section className="relative bg-[url(/assets/images/savelife.jpg)] py-16 bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
        <div className="relative mx-auto max-w-screen-2xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:px-8 text-white text-5xl font-bold max-md:text-3xl capitalize">
          Our Causes
        </div>
      </section>
      <section className="relative z-10 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2 text-center pb-4">
          <div className="bg-teal-500 w-12 h-[3px] flex flex-col justify-center items-center text-center"></div>
          <h4 className="text-teal-500 font-bold">Causes</h4>
        </div>
        <h2 className="h2-title text-center">Explore All Causes <br></br> and Donate them</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Filter through our impactful causes and find one that resonates with
          you.
        </p>

        {/* Filter Buttons */}
        <div className="relative z-20">
          <FilterBtns filters={categories}  activeFilter={activeCategory} onFilterClick={handleFilterClick} />
        </div>

        {/* Causes Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-full h-64 bg-gray-200 animate-pulse rounded-md"
                ></div>
              ))
          ) : filteredCauses.length === 0 ? (
            <div className="text-center text-gray-500">No causes found.</div>
          ) : (
            filteredCauses.map((cause) => (
              <div
                key={cause.id}
                className="relative w-full h-64 rounded-md overflow-hidden shadow-md group"
              >
                {/* Image */}
                <Image
                  src={cause.image_url}
                  alt={cause.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Link href="/donate">
                  <h3 className="font-bold text-lg">{cause.title}</h3>
                  </Link>
                  <p className="text-sm">{cause.category}</p>
                  <div className="mt-2">
                    <div className="text-xs text-gray-300">
                      ${cause.raised.toLocaleString()} raised of $
                      {cause.goal.toLocaleString()}
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 mt-1">
                      <div
                        className="bg-teal-500 h-2 rounded-full"
                        style={{
                          width: `${(cause.raised / cause.goal) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default AllCauses;
