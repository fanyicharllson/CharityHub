"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import NotFoundPageCustom from "@/app/notfoundpage_custom/page";

const DonatePage = ({ params }: { params: Promise<{ donateid: string }> }) => {
  const [cause, setCause] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [donateid, setDonateid] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setDonateid(resolvedParams.donateid); // Extract donateid from params
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (donateid === null) return; // Wait until donateid is set

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
        setError(null); // Clear any previous error
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
      <div className="max-w-screen-lg mx-auto py-10 px-4">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto py-32 px-4">
      {error ? (
       <NotFoundPageCustom/>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4">{cause.title}</h1>
          <p className="text-gray-600 mb-4">{cause.category}</p>
          <Image
            src={cause.image_url}
            alt={cause.title}
            width={800}
            height={400}
            className="rounded-md"
          />
          <p className="mt-6 text-lg">{cause.description}</p>
          <div className="mt-10">
            <button className="bg-teal-500 text-white py-3 px-6 rounded-md shadow-md">
              Donate Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DonatePage;
