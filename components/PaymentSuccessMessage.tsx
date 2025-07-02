"use client";

import { useEffect, useState } from "react";
import { Alert } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";

export function PaymentSuccessMessage() {
  const [message, setMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("payment_status");
    
    // Show message based on payment status
    if (status === "success") {
      setShowMessage(true);
      setMessage("You will be redirected to our WhatsApp group!");
    } else if (status === "failed") {
      setShowMessage(true);
      setMessage("Payment failed. Please try again.");
    }
  }, []);

  // Clear message after 1 second
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setMessage(null);
        setShowMessage(false);
        // Clear URL parameters
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }, 1000);

      // Cleanup timeout if component unmounts
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  if (!showMessage || !message) return null;

  return (
    <Alert
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-96 bg-blue-50 border-blue-200 text-blue-700"
    >
      <CheckCircle className="h-4 w-4 text-blue-500" />
      <div className="flex items-center gap-2">
        <span className="font-medium">
          {message}
        </span>
      </div>
    </Alert>
  );
}
