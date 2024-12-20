"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLElement | null>(null);
  const windowClickHandler = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", windowClickHandler);
    return () => {
      window.removeEventListener("click", windowClickHandler);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link className="flex text-teal-600 items-center gap-0" href="/">
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
              <span className="ml-2 text-2xl font-bold text-teal-600">
                CharityHub
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 max-lg:gap-2 text-sm">
                <li>
                  <Link className="header-link" href="/">
                    Home
                  </Link>
                </li>

                <li
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {/* Desktop Dropdown */}
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 pt-2 w-44 bg-white shadow-lg rounded-md overflow-hidden transition-opacity duration-300">
                      <li>
                        <Link className="header-dropdown" href="/causes">
                          All Causes
                        </Link>
                      </li>
                      <li>
                        <Link className="header-dropdown" href="#">
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link className="header-dropdown" href="#">
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link className="header-dropdown" href="#">
                          Environment
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link className="header-link" href="/notfoundpage">
                    Events
                  </Link>
                </li>
                <li>
                  <a className="header-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <Link className="header-link" href="/about">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Buttons and Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium text-teal-600 shadow transition hover:bg-gray-200"
                href="/signup"
              >
                Sign Up
              </Link>
              <Link
                className="rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium text-teal-600 shadow transition hover:bg-gray-200"
                href="/signin"
              >
                Login
              </Link>
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-teal-700"
                href="/causes"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded bg-teal-300 py-2 px-4  text-teal-800 transition hover:text-teal-900"
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
                <Link
                  className="mobile-hover"
                  href="/"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  Home
                </Link>
              </li>

              <li className="relative">
                {/* Mobile Dropdown */}
                <div
                  className="cursor-pointer hover:bg-teal-100 rounded-md"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <button className="flex items-center gap-2 mobile-hover">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                {isDropdownOpen && (
                  <ul className="pl-4 space-y-2">
                    <li>
                      <Link
                        className="mobile-hover"
                        href="/causes"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        All Causes
                      </Link>
                    </li>
                    <li>
                      <Link className="mobile-hover" href="#">
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link className="mobile-hover" href="#">
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link className="mobile-hover" href="#">
                        Environment
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  className="mobile-hover"
                  href="/notfoundpage"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="mobile-hover"
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="mobile-hover"
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  About
                </Link>
              </li>
              <div className="flex flex-col gap-y-2">
                <Link className=" text-white" href="/causes">
                  <div
                    className="bg-teal-700 cursor-pointer rounded py-3 px-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <li>Donate</li>
                  </div>
                </Link>
                <Link className=" text-teal-600" href="/signin">
                  <div
                    className="cursor-pointer rounded py-3 px-2 bg-teal-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <li>Login</li>
                  </div>
                </Link>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
