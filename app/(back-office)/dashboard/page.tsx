import Heading from '@/components/backoffice/Heading';
import LargeCards from '@/components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Heading title="Overview" />
      {/* large cards */}
      <LargeCards />
      {/* small cards */}
      <SmallCards />
      {/* charts */}
      {/* recent orders */}
    </div>
  );
}
