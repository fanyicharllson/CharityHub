"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import NotFoundPageCustom from "@/app/notfoundpage_custom/page";
import SkeletonLoader from "@/components/skeletonLoader";

import Card from "@/public/assets/icons/card.png";
import Paypal from "@/public/assets/icons/paypal.png";
import Visa from "@/public/assets/icons/visa.png";

const DonatePage = ({ params }: { params: Promise<{ donateid: string }> }) => {
  const [cause, setCause] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [donateid, setDonateid] = useState<string | null>(null);

  const [amount, setAmount] = useState<number | string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission logic here
    alert(`Thank you for donating $${amount}!`);
  };

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
      <>
        <section className="relative bg-[url(/assets/images/savelife.jpg)] py-16 bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
          <div className="relative mx-auto max-w-screen-2xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:px-8 text-white text-5xl font-bold max-md:text-3xl capitalize">
            {/* {cause.title} */}
          </div>
        </section>
        <div className="max-w-screen-lg mx-auto py-32 px-4">
          <SkeletonLoader />
        </div>
      </>
    );
  }

  return (
    <>
      {error ? (
        <NotFoundPageCustom />
      ) : (
        <>
          <section className="relative bg-[url(/assets/images/savelife.jpg)] py-16 bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
            <div className="relative mx-auto max-w-screen-2xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:px-8 text-white text-5xl font-bold max-md:text-3xl capitalize">
              {cause.title}
            </div>
          </section>
          <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={cause.image_url}
                  alt={cause.title}
                  width={800}
                  height={400}
                  className="rounded-lg"
                  priority
                />

                <h2 className="h2-title mb-4 mt-4">{cause.title}</h2>
                <p className="text-gray-600 mb-4">{cause.category}</p>
                <p className="mt-6 text-lg">{cause.description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-10"
                

              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Support Cause
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 relative z-20">
                  {/* Donation Amount */}
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-gray-600 text-sm mb-2"
                    >
                      Donation Amount (USD)
                    </label>
                    <input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label
                      htmlFor="payment-method"
                      className="block text-gray-600 text-sm mb-2"
                    >
                      Select Payment Method
                    </label>
                    <div className="flex space-x-4 items-center">
                      <button
                        type="button"
                        className={`flex items-center px-4 py-2 border rounded-lg ${
                          paymentMethod === "paypal"
                            ? "border-blue-700 bg-blue-50"
                            : "border-gray-300"
                        } hover:bg-gray-100`}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <Image
                          src={Paypal}
                          alt="PayPal"
                          className="h-6 object-cover"
                          width={100}
                          height={50}
                        />
                      </button>
                      <button
                        type="button"
                        className={`flex items-center px-4 py-2 border rounded-lg ${
                          paymentMethod === "visa"
                            ? "border-blue-700 bg-blue-100"
                            : "border-gray-300"
                        } hover:bg-gray-100`}
                        onClick={() => setPaymentMethod("visa")}
                      >
                        <Image
                          src={Visa}
                          alt="Visa"
                          className="h-6 object-cover"
                          width={100}
                          height={50}
                        />
                      </button>
                      <button
                        type="button"
                        className={`flex items-center px-4 py-2 border rounded-lg ${
                          paymentMethod === "mastercard"
                            ? "border-blue-700 bg-blue-50"
                            : "border-gray-300"
                        } hover:bg-gray-100`}
                        onClick={() => setPaymentMethod("mastercard")}
                      >
                        <Image
                          src={Card}
                          alt="MasterCard"
                          className="h-6 object-fill"
                          width={100}
                          height={50}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition"
                  >
                    Donate Now
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </section>
        </>
      )}
    </>
  );
};

export default DonatePage;
