import { ReactNode } from "react";
import "@/styles/globals.css";
import Link from "next/link";

export default function SignInLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 ">
        <header className="w-full pt-6">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link
                  className="flex text-teal-600 items-center gap-0"
                  href="/"
                >
                  <span className="sr-only">CharityHub Home</span>
                  <svg
                    className="h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C15.46 5.99 16.96 5 18.5 5 20.58 5 22 6.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ml-2 text-xl font-bold text-teal-600">
                    CharityHub
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="mt-8 text-center py-4 w-full">
          <div className="text-sm">
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>{" "}
            •
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            •
            <Link href="#" className="hover:underline">
              Help Center
            </Link>
          </div>
          <div className="mt-2 text-xs">
            © 2024 Charityhub. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
