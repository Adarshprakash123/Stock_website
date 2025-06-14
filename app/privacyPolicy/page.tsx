import React from 'react';
import PrivacyPolicyPage from '@/components/site/PrivacyPolicyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TradingWalla',
  description:
    'Read TradingWalla’s Privacy Policy to understand how we handle your personal data, ensuring transparency, security, and confidentiality in all our services.',
};

const PrivacyPolicy = () => {
  return <PrivacyPolicyPage />;
};

export default PrivacyPolicy;
