import React from 'react';
import SmallCard from './SmallCard';
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

type Props = {};

export default function SmallCards({}: Props) {
  const orderStatus = [
    {
      title: 'Total Orders',
      number: 600,
      iconBg: 'bg-green-600',
      icon: <ShoppingCart />,
    },
    {
      title: 'Orders Pending',
      number: 170,
      iconBg: 'bg-blue-600',
      icon: <Loader2 />,
    },
    {
      title: 'Order Processing',
      number: 50,
      iconBg: 'bg-orange-600',
      icon: <RefreshCcw />,
    },
    {
      title: 'Orders Delivered',
      number: 400,
      iconBg: 'bg-purple-600',
      icon: <CheckCheck />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((status, i) => (
        <SmallCard key={i} data={status} />
      ))}
    </div>
  );
}
