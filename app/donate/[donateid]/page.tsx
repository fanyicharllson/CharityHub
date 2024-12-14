"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import NotFoundPageCustom from "@/app/notfoundpage_custom/page";
import SkeletonLoader from "@/components/skeletonLoader";

const DonatePage = ({ params }: { params: Promise<{ donateid: string }> }) => {
  const [cause, setCause] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [donateid, setDonateid] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setDonateid(resolvedParams.donateid);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (donateid === null) return;

    const causeId = Number(donateid);

    if (isNaN(causeId)) {
      setError("Invalid cause ID. Please enter a valid ID.");
      setCause(null);
      setLoading(false);
      return;
    }

    const fetchCause = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("causes")
          .select("*")
          .eq("id", causeId)
          .single();

        if (error || !data) {
          throw new Error("Cause not found");
        }

        setCause(data);
        setError(null);
      } catch (err: any) {
        setError("The requested cause could not be found.");
        setCause(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCause();
  }, [donateid]);

  if (loading) {
    return (
      <div className="max-w-screen-lg mx-auto py-32 px-4">
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <>
      <section className="relative bg-[url(/assets/images/savelife.jpg)] py-16 bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
        <div className="relative mx-auto max-w-screen-2xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:px-8 text-white text-5xl font-bold max-md:text-3xl capitalize">
          {cause.title}
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {error ? (
          <NotFoundPageCustom />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:items-center">
            <div>
              <Image
                src={cause.image_url}
                alt={cause.title}
                width={800}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{cause.title}</h1>
              <p className="text-gray-600 mb-4">{cause.category}</p>
              <p className="mt-6 text-lg">{cause.description}</p>
              <div className="mt-10">
                <button className="bg-teal-500 text-white py-3 px-6 rounded-md shadow-md">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DonatePage;
