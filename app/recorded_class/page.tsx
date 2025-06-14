import React from 'react';
import RecordedCourse from '@/components/site/RecordedCourse';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recorded class | TradingWalla',
  description:
    'Access our self-paced recorded stock market course at TradingWalla. Learn equity, F&O, crypto, and more with 3 months access and expert guidance.',
};

const Page = () => {
  return <RecordedCourse />;
};

export default Page;
