// CookiePolicyPage.tsx
"use client";

import React from "react";

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">🍪 Cookie Policy</h1>
      <p className="text-sm text-gray-500 mb-8 text-center">
        Effective Date: June 13, 2025
      </p>

      <p className="mb-6">
        This website uses cookies to enhance your browsing experience on <strong>www.tradingwalla.com</strong> — the official site of <strong>TRADINGWALLA™</strong>.
      </p>

      {/* What Are Cookies Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">What Are Cookies?</h2>
        <p className="mb-2">
          Cookies are small files stored on your browser to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Remember your preferences</li>
          <li>Track site usage anonymously</li>
          <li>Improve page loading speed</li>
        </ul>
        <p className="mt-2">
          We do not store sensitive personal data like card numbers or passwords in cookies.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
