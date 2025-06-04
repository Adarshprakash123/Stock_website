"use client";

import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FailurePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="bg-red-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
          <XCircle className="h-8 w-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Failed
        </h1>
        <p className="text-gray-600 mb-6">
          We couldn&apos;t process your payment. Please try again or contact
          support if the problem persists.
        </p>
        <Link href="/masterclass">
          <Button className="bg-[#0A4223] hover:bg-[#0d5a37] text-white">
            Try Again
          </Button>
        </Link>
      </Card>
    </div>
  );
}
