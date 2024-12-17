"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient"; // Your supabase client
import Link from "next/link";


const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState<string>("Verifying your email, please wait...");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyEmail = async () => {
      const access_token = searchParams.get("token");
      const email = searchParams.get("email");

      // Debug logging
      console.log("Access Token:", access_token);
      console.log("Email:", email);

      if (!access_token || !email) {
        setMessage("Oops! It seems there's an issue with the verification link. Please try again later or request a new link."); //error here --------> Token null
        setLoading(false);
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          email: email as string,
          token: access_token as string,
          type: "signup",
        });

        if (error) {
          console.error("OTP Verification Error:", error.message);
          setMessage("We couldn't verify your email. Please check the link and try again later.");
        } else {
          setMessage("Your email has been successfully verified!");
        }
      } catch (err) {
        console.error("Unexpected Error:", err);
        setMessage("Something went wrong. Please try again later.");
      }

      setLoading(false);
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Email Verification</h1>
        <div className="mt-4 text-center">
          {loading ? (
            <p className="text-gray-600">Verifying...</p>
          ) : (
            <p className="text-red-600 font-semibold">{message}</p>
          )}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            If you didn’t receive the email, check your spam folder or{" "}
            <Link href="/resend-email" className="text-blue-500 hover:underline">
              request a new verification link
            </Link>.
          </p>
            {/* New clickable link to navigate to the dashboard */}
          <div className="mt-6">
            <Link
              href="/dashboard" // Change to the actual dashboard link
              className="text-blue-600 hover:underline text-lg"
            >
              Go to your Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;