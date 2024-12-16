// app/signin/layout.tsx (Custom Layout for Sign-In Page)
import { ReactNode } from "react";
import Link from "next/link";

export default function SignInLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="mb-8">
        logo
      </div>
      {/* Only Sign-In page content will be rendered here */}
      {children}
      <div className="mt-4">
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
      {/* Footer */}
      <footer className="mt-8 bg-gray-800 text-white text-center py-4 w-full">
        <div className="text-sm">
          <a href="/terms" className="hover:underline">Terms of Service</a> • 
          <a href="/privacy" className="hover:underline">Privacy Policy</a> •
          <a href="/help" className="hover:underline">Help Center</a>
        </div>
        <div className="mt-2 text-xs">
          © 2024 Charityhub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
