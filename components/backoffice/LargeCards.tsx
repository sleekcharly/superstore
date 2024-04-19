import React from 'react';
import LargeCard from './LargeCard';

type Props = {};

export default function LargeCards({}: Props) {
  const orderStats = [
    {
      period: "Today's Orders",
      sales: 110000,
      color: 'bg-green-600',
    },
    {
      period: "Yesterday's Orders",
      sales: 540000,
      color: 'bg-blue-600',
    },
    {
      period: 'This Month',
      sales: 1200000,
      color: 'bg-orange-600',
    },
    {
      period: 'ALl-Time Sales',
      sales: 6700100,
      color: 'bg-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((order, i) => (
        <LargeCard key={i} order={order} />
      ))}
    </div>
  );
}
