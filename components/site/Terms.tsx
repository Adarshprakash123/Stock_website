// Terms.tsx
"use client";

import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Services</h1>

      <p className="text-sm text-gray-500 mb-8 text-center">
        Effective Date: June 13, 2025
      </p>

      {/* Intro */}
      <p className="mb-6">
        These terms govern your use of <strong>www.tradingwalla.com</strong>, operated by <strong>TRADINGWALLA™</strong> (founded by Sudhanshu Raj), an educational brand that partners with Trading Bulls Academy and other institutions.
      </p>

      <p className="mb-6">
        By accessing our website, demo classes, or enrolling in any course, you agree to the following terms:
      </p>

      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Educational Intent Only</h2>
        <p>
          All our courses, videos, webinars, and materials are strictly for educational purposes.
          We do not provide investment advice or profit guarantees.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Age Requirement</h2>
        <p>
          Only individuals 18 years or older are allowed to register or enroll in paid training programs.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Refund & Payment Terms</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Registration Fee is non-refundable</li>
          <li>Full course fee must be paid as per agreed terms</li>
          <li>To understand how users navigate our site</li>
          <li>To improve website performance</li>
          <li>To deliver a smooth user experience</li>
        </ul>
      </div>

      {/* Manage Cookies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manage Your Cookies</h2>
        <p>
          You can clear or disable cookies anytime in your browser settings. This may affect some features or functions of the website.
        </p>
      </div>

      {/* Contact */}
      <div className="mb-4">
        <p>
          📧 Cookie concerns? Reach us at:{" "}
          <a
            href="mailto:WallahTrading@gmail.com"
            className="text-blue-600 underline"
          >
            WallahTrading@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
