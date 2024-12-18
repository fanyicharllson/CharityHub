import { ReactNode } from "react";
import "@/styles/globals.css";

export default function SignInLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 ">
        {children}
      </body>
    </html>
  );
}
