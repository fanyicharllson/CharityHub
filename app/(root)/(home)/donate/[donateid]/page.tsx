"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import NotFoundPageCustom from "@/app/(notfound)/notfoundpage/page";
import SkeletonLoader from "@/components/skeletonLoader";

import Card from "@/public/assets/icons/card .png";
import Paypal from "@/public/assets/icons/paypal.png";
import Visa from "@/public/assets/icons/visa.png";

const DonatePage = ({ params }: { params: Promise<{ donateid: string }> }) => {
  const [cause, setCause] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [donateid, setDonateid] = useState<string | null>(null);

  const [amount, setAmount] = useState<number | string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [convertedAmount, setConvertedAmount] = useState<string>("");

  // Fetch conversion rates
  useEffect(() => {
    const fetchConversion = async () => {
      if (amount && currency !== "USD") {
        try {
          const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/USD`
          );
          const rates = await response.json();
          setConvertedAmount(
            (Number(amount) * rates.rates[currency]).toFixed(2)
          );
        } catch (error) {
          console.error("Error fetching conversion rates:", error);
        }
      } else {
        setConvertedAmount("");
      }
    };
    fetchConversion();
  }, [amount, currency]);



  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    const donationData = {
      amount,
      paymentMethod,
      currency,
    };

    console.log("Submitting Donation Data:", donationData);

    // API call logic here
    alert(`Thank you for donating ${amount} ${currency}!`);
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
        <div className="py-32 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
          </div>
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
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 relative z-20"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-600 text-sm mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  {/* Dynamic Donation Suggestions */}
                  <div className="flex space-x-4  flex-wrap gap-y-4">
                    {[10, 50, 100, 200, 500].map((amountValue) => (
                      <button
                        key={amountValue}
                        type="button"
                        className="px-4 py-2 bg-teal-100 text-teal-600 font-medium rounded-md hover:bg-teal-200"
                        onClick={() => setAmount(amountValue.toString())}
                      >
                        ${amountValue}
                      </button>
                    ))}
                  </div>

                  {/* Donation Amount */}
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-gray-600 text-sm mb-2"
                    >
                      Donation Amount ({currency})
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
                    {convertedAmount && (
                      <p className="text-sm text-gray-600 mt-1">
                        Approx. {convertedAmount} {currency}
                      </p>
                    )}
                  </div>

                  {/* Currency Selector */}
                  <div>
                    <label
                      htmlFor="currency"
                      className="block text-gray-600 text-sm mb-2"
                    >
                      Select Currency
                    </label>
                    <select
                      id="currency"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="INR">INR - Indian Rupee</option>
                    </select>
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
                        className={`flex items-center px-6 border rounded-lg ${
                          paymentMethod === "paypal"
                            ? "border-blue-700 bg-blue-50"
                            : "border-gray-300"
                        } hover:bg-gray-100`}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <Image
                          src={Paypal}
                          alt="PayPal"
                          className="object-cover"
                          height={35}
                          priority
                        />
                      </button>
                      <button
                        type="button"
                        className={`flex items-center px-6 border rounded-lg ${
                          paymentMethod === "visa"
                            ? "border-blue-700 bg-blue-100"
                            : "border-gray-300"
                        } hover:bg-gray-100`}
                        onClick={() => setPaymentMethod("visa")}
                      >
                        <Image
                          src={Visa}
                          alt="Visa"
                          className="object-cover"
                          height={35}
                          priority
                        />
                      </button>
                      <button
                        type="button"
                        className={`flex items-center px-6 border rounded-lg ${
                          paymentMethod === "mastercard"
                            ? "border-blue-700 bg-blue-50"
                            : "border-gray-300"
                        } hover:bg-gray-100`}
                        onClick={() => setPaymentMethod("mastercard")}
                      >
                        <Image
                          src={Card}
                          alt="MasterCard"
                          className="object-cover"
                          height={35}
                        />
                      </button>
                    </div>
                  </div>
                  {/* Tax Receipt Checkbox */}
                  <div className="flex items-center">
                    <input
                      id="tax-receipt"
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="tax-receipt" className="ml-2 text-gray-700">
                      Send me a tax receipt for this donation
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!paymentMethod || !amount}
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
