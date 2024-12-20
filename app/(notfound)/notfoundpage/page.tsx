import Link from "next/link"

export default function NotFoundPageCustom() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 animate-fadeIn">
          <div className="max-w-2xl">
            {/* Animated Hero Section */}
            <h1 className="text-8xl font-extrabold text-teal-600 mb-6 animate-bounce">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4  animate-fadeInDelay">
              Where hope should shine, there is empty air.
            </p>
            <p className="text-teal-600 mb-6  animate-fadeInDelay2">
              The page you seek is not there. But together, we can make a difference and bring hope where it’s needed.
            </p>
            {/* Buttons with Hover and Ripple Effects */}
            <div className="mt-4 flex justify-center gap-4 max-sm:flex-col">
              <Link
                href="/causes"
                className="bg-teal-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-teal-600 transition transform hover:scale-105 focus:ring focus:ring-teal-300"
              >
                Browse Causes
              </Link>
              <Link
                href="/"
                className="border border-teal-500 text-teal-500 py-3 px-6 rounded-md hover:bg-teal-100 transition transform hover:scale-105 focus:ring focus:ring-teal-300"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
}
