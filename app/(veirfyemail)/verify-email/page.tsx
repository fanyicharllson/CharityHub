import { Suspense } from "react";
import VerifyEmailPage from "@/components/VerifyEmailPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailPage />
    </Suspense>
  );
}
