import { Layers } from 'lucide-react';
import React from 'react';

type Props = {
  order: {
    color: string;
    sales: number;
    period: string;
  };
};

export default function LargeCard({ order }: Props) {
  return (
    <div
      className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${order.color}`}
    >
      <Layers />
      <h4>{order.period}</h4>
      <h2 className="text-2xl lg:text-3xl">₦{order.sales}</h2>
    </div>
  );
}
