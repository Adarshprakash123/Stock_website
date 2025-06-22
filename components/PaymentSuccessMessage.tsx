"use client";

import { useEffect, useState } from "react";
import { Alert } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function PaymentSuccessMessage() {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [txnid, setTxnId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("payment_status");
    const id = params.get("txnid");
    
    setPaymentStatus(status);
    setTxnId(id);

    // Clear the URL parameters after 3 seconds
    if (status) {
      setTimeout(() => {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }, 3000);
    }
  }, []);

  if (!paymentStatus) return null;

  return (
    <Alert
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-96"
      variant="default"
    >
      <AlertCircle className="h-4 w-4" />
      <div className="flex items-center gap-2">
        <span className="font-medium">
          Payment {paymentStatus === "success" ? "Successful" : "Failed"}
        </span>
        {txnid && (
          <span className="text-sm text-gray-600">
            (TXN: {txnid.substring(0, 8)}...)
          </span>
        )}
      </div>
    </Alert>
  );
}
