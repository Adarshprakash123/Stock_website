import React from 'react';
import OfflineClassPage from '@/components/site/OfflineClassPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offline Classes | TradingWalla',
  description:
    'Join TradingWalla’s offline stock market classes for hands-on learning. Covering Equity, F&O, MCX, Crypto & more. Learn with experts in a classroom environment.',
};

const OfflineClass = () => {
  return <OfflineClassPage />;
};

export default OfflineClass;
