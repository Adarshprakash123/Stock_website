import React from 'react';
import OnlineClass from '@/components/site/OnlineClass';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Classes | TradingWalla',
  description:
    'Learn stock trading online with TradingWalla. Access expert-led classes on Equity, F&O, Crypto, and more. Flexible and interactive online learning.',
};

const OnlineClassPage = () => {
  return <OnlineClass />;
};

export default OnlineClassPage;
