"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link className="flex text-teal-600 items-center gap-0" href="/">
              <span className="sr-only">CharityHub Home</span>
              <svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C15.46 5.99 16.96 5 18.5 5 20.58 5 22 6.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="currentColor"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-teal-600">CharityHub</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="header-link" href="#">Home</a>
                </li>
                <li>
                  <a className="header-link" href="#">About Us</a>
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-2 header-link"
                  >
                    Causes
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 pt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden transition-opacity duration-300">
                      <li>
                        <a
                          className="header-dropdown"
                          href="#"
                        >
                          Education
                        </a>
                      </li>
                      <li>
                        <a
                          className="header-dropdown"
                          href="#"
                        >
                          Healthcare
                        </a>
                      </li>
                      <li>
                        <a
                          className="header-dropdown"
                          href="#"
                        >
                          Environment
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a className="header-link" href="#">Donate</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Buttons and Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-teal-700"
                href="#"
              >
                Login
              </a>
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 shadow transition hover:bg-gray-200"
                href="#"
              >
                Register
              </a>
            </div>
            <div className="block md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-2 mb-2">
            <ul className="space-y-2 text-sm">
              <li>
                <a className="mobile-hover" href="#">Home</a>
              </li>
              <li>
                <a className="mobile-hover" href="#">About Us</a>
              </li>
              <li>
                <a className="mobile-hover" href="#">Causes</a>
              </li>
              <li>
                <a className="mobile-hover" href="#">Donate</a>
              </li>
              <li>
                <a className="mobile-hover" href="#">Login</a>
              </li>
              <li>
                <a className="mobile-hover" href="#">Register</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
