"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    const txnid = searchParams.get("txnid");
    const hash = searchParams.get("hash");

    if (!txnid || !hash) {
      setStatus("error");
      return;
    }

    // Here you could verify the payment status with your backend
    // For now, we'll just show success if we have the required parameters
    setStatus("success");
    setTimeout(() => {
      window.location.href = "https://chat.whatsapp.com/BWKfMIOaRpkGSshH7F9F7N";
    }, 2000); // 2 seconds delay so user sees the success message
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        {status === "loading" && (
          <div className="animate-pulse">
            <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        )}

        {status === "success" && (
          <>
            <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for registering for the masterclass. We&apos;ll send you
              the details via email and WhatsApp.
            </p>
            <Link href="/">
              <Button className="bg-[#0A4223] hover:bg-[#0d5a37] text-white">
                Return to Home
              </Button>
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="bg-red-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Something Went Wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We couldn&apos;t verify your payment. Please contact support if
              you need assistance.
            </p>
            <Link href="/masterclass">
              <Button className="bg-[#0A4223] hover:bg-[#0d5a37] text-white">
                Try Again
              </Button>
            </Link>
          </>
        )}
      </Card>
    </div>
  );
}
