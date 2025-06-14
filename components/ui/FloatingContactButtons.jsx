'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingContactButtons() {
  const phoneNumber = '9289736744';
  const whatsappNumber = '919289736744';

  const [notificationCount, setNotificationCount] = useState(1);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello, TradingWalla! 👋\nCould you please describe your course details?'
    );
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    setNotificationCount(0); // reset count on click
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationCount(prev => prev + 1);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Call Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={handleCall}
          size="icon"
          className="h-14 w-14 rounded-full bg-yellow-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
          aria-label="Call us"
        >
          <Phone className="h-7 w-7" />
        </Button>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {notificationCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
              {notificationCount}
            </span>
          )}
          <Button
            onClick={handleWhatsApp}
            size="icon"
            className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="h-7 w-7"
            >
              <path d="M20.5 3.5A11.49 11.49 0 0012 0C5.373 0 0 5.373 0 12c0 2.1.55 4.15 1.6 5.95L0 24l6.35-1.6A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12a11.5 11.5 0 00-3.5-8.5zm-8.5 19.5c-1.85 0-3.7-.5-5.3-1.45l-.4-.25-3.75.95 1-3.65-.25-.4A10.14 10.14 0 012.5 12c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5zm5.25-7.15c-.3-.15-1.75-.85-2.025-.95-.275-.1-.475-.15-.675.15-.2.3-.775.95-.95 1.15-.175.2-.35.225-.65.075-.3-.15-1.25-.45-2.375-1.45-.875-.775-1.45-1.725-1.625-2.025-.175-.3-.02-.475.13-.625.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.25-.6-.5-.5-.675-.5h-.575c-.2 0-.5.075-.75.375s-.975.95-.975 2.325c0 1.375 1 2.7 1.15 2.9.15.2 1.95 3 4.725 4.2.65.275 1.15.45 1.55.575.65.2 1.25.175 1.725.1.525-.075 1.6-.65 1.825-1.275.225-.625.225-1.15.15-1.275-.075-.125-.275-.2-.575-.35z" />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}
