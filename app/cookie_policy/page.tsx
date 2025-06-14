import React from 'react';
import CookiePolicyPage from '@/components/site/CookiePolicyPage';
import { Metadata } from 'next';

// ✅ Static metadata export (Recommended for static content)
export const metadata: Metadata = {
  title: 'Cookie Policy | TradingWalla',
  description:
    'Learn how TradingWalla uses cookies to improve your experience. Read our cookie policy for detailed information on usage, consent, and control.',
};

const CookiePolicy = () => {
  return <CookiePolicyPage />;
};

export default CookiePolicy;
