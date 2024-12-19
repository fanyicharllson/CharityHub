import Link from "next/link";

export default function ThankyouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Hero Section */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-teal-600 mb-6 animate-bounce">
          Thank You!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 animate-fadeInDelay">
          Your generosity lights up lives.
        </p>
        <p className="text-teal-600 text-sm sm:text-base md:text-lg mb-6 animate-fadeInDelay2">
          Together, we`re creating a ripple of hope and changing the world, one
          act of kindness at a time.
        </p>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 animate-fadeInDelay2">
          Your donation has been successfully received and will be put to
          meaningful use. Thank you for believing in the power of compassion. ❤️
        </p>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 animate-fadeInDelay2">
          Feel proud—because you`ve made a real difference today.
        </p>
        {/* Buttons with Hover and Ripple Effects */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="border border-teal-500 text-teal-500 py-3 px-6 rounded-md hover:bg-teal-100 transition transform hover:scale-105 focus:ring focus:ring-teal-300 w-full sm:w-auto"
          >
            Go Home
          </Link>
          <Link
            href="/causes"
            className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition transform hover:scale-105 focus:ring focus:ring-teal-300 w-full sm:w-auto"
          >
            Support Another Cause
          </Link>
        </div>
      </div>
    </div>
  );
}
