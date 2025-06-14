import React from 'react'

const PrivacyPolicyPage : React.FC  = () => {
  return (
    <div>
       <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-8 text-center">
        Effective Date: June 13, 2025
      </p>

      <p className="mb-6">
        This Privacy Policy applies to <strong>www.tradingwalla.com</strong>, operated by <strong>TRADINGWALLA™</strong>, a registered and trademarked educational brand founded by Sudhanshu Raj, in collaboration with partner academies like Trading Bulls Academy.
      </p>

      <p className="mb-6">
        We respect your privacy and are committed to protecting your personal data.
      </p>

      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-2">
          When you fill out a form, contact us via WhatsApp, or register for demo classes, we may collect:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Full Name</li>
          <li>Email ID</li>
          <li>Mobile Number</li>
          <li>Location</li>
          <li>Any message or query you submit</li>
        </ul>
        <p className="mt-2">
          We never collect banking or card details unless required during payment, and even then, it's done through secure third-party gateways.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Responding to course inquiries and demo class bookings</li>
          <li>Sending class updates, batch schedules, or learning resources</li>
          <li>Internal insights to improve our academy offerings</li>
        </ul>
        <p className="mt-2">
          We do not sell, rent, or misuse your data. Ever.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p>
          Your information is securely stored with restricted access. Only authorized staff trained in data privacy can view or use it.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Copyright & Content Usage</h2>
        <p>
          All materials (videos, slides, notes) are owned by <strong>TRADINGWALLA™</strong>. Any unauthorized sharing, recording, or duplication is strictly prohibited and may result in legal action.
        </p>
      </div>

      {/* Section 5 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Student Conduct</h2>
        <p>
          We maintain a professional learning environment. Any misconduct, abuse, or unethical behavior in classes (offline or online) may lead to immediate termination without refund.
        </p>
      </div>

      {/* Contact */}
      <div className="mb-4">
        <p>
          📧 For queries or clarifications, contact us at:{" "}
          <a href="mailto:WallahTrading@gmail.com" className="text-blue-600 underline">
            WallahTrading@gmail.com
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default PrivacyPolicyPage
