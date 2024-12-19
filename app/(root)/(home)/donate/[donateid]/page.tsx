"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import { ImSpinner2 } from "react-icons/im";
import NotFoundPageCustom from "@/app/(notfound)/notfoundpage/page";
import SkeletonLoader from "@/components/skeletonLoader";

import Card from "@/public/assets/icons/card .png";
import Paypal from "@/public/assets/icons/paypal.png";
import Visa from "@/public/assets/icons/visa.png";

interface Cause {
  id: number;
  title: string;
  category: string;
  description: string;
  image_url: string;
}

const DonatePage = ({ params }: { params: Promise<{ donateid: string }> }) => {
  const [cause, setCause] = useState<Cause | null>(null);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donateid, setDonateid] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number | string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    amount: "",
    paymentMethod: "",
    cause: "",
  });

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
    setLoading2(true);

    // Reset errors
    setErrors({
      name: "",
      email: "",
      amount: "",
      paymentMethod: "",
      cause: "",
    });

    let hasError = false;
    const newErrors = { ...errors };

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Full name is required.";
      hasError = true;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email address is required.";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }

    // Validate donation amount
    if (!amount || parseFloat(String(amount)) <= 0) {
      newErrors.amount = "Please enter a valid donation amount.";
      hasError = true;
    }

    // Validate payment method
    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
      hasError = true;
    }

    // Validate cause selection
    if (!donateid) {
      newErrors.cause = "Please select a cause to donate to.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Retrieve the cause category from Supabase
    try {
      const { data: causeData, error: causeError } = await supabase
        .from("causes")
        .select("category_id")
        .eq("id", donateid)
        .single();

      if (causeError || !causeData) {
        console.error("Error fetching cause category:", causeError);
        setErrors({
          ...newErrors,
          cause: "Failed to retrieve cause category.",
        });
        return;
      }

      const categoryId = causeData.category_id;

      // Insert donation data into the database
      const { error: insertError } = await supabase.from("donations").insert([
        {
          name,
          email,
          cause_id: donateid,
          category_id: categoryId,
          amount,
          currency,
          payment_method: paymentMethod,
        },
      ]);

      if (insertError) {
        throw new Error(insertError.message);
      }

      // Redirect to thank-you page
      window.location.href = "/thank-you";
    } catch (error) {
      console.error("Error inserting donation:", error);
    }
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
      setLoading2(false);
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
      } catch (err) {
        setError("The requested cause could not be found.");
        console.error(err);
        setCause(null);
      } finally {
        setLoading(false);
        setLoading2(false);
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
            {cause?.title}
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
                  src={cause?.image_url || "@/public/assets/images/voluntier2.jpeg"}
                  alt={cause?.title || 'Image Title'}
                  width={800}
                  height={400}
                  className="rounded-lg"
                  priority
                />

                <h2 className="h2-title mb-4 mt-4">{cause?.title}</h2>
                <p className="text-gray-600 mb-4">{cause?.category}</p>
                <p className="mt-6 text-lg">{cause?.description}</p>
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
                      htmlFor="text"
                      className="block text-gray-600 text-sm mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="text"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-2 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:ring-teal-500 focus:border-teal-500`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
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
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-2 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:ring-teal-500 focus:border-teal-500`}
                      placeholder="Enter your email"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
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
                      required
                      className={`w-full px-4 py-2 border ${
                        errors.amount ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:ring-teal-500 focus:border-teal-500`}
                    />
                    {convertedAmount && (
                      <p className="text-sm text-gray-600 mt-1">
                        Approx. {convertedAmount} {currency}
                      </p>
                    )}
                    {errors.amount && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.amount}
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
                    {errors.paymentMethod && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.paymentMethod}
                      </p>
                    )}
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
                    disabled={loading2}
                    className={`w-full py-3 rounded-lg font-semibold text-white text-sm tracking-wide shadow-md transition-transform focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                      loading2
                        ? "bg-teal-800 cursor-not-allowed"
                        : "bg-teal-600 hover:bg-teal-700 hover:-translate-y-0.5"
                    }`}
                  >
                    {loading2 ? (
                      <div className="flex items-center justify-center space-x-2">
                        <ImSpinner2 className="animate-spin h-5 w-5 text-white" />
                        <span>Processing Donation...</span>
                      </div>
                    ) : (
                      "Donate Now"
                    )}
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
