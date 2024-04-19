import { ShoppingCart } from 'lucide-react';
import React from 'react';

type Props = {
  data: {
    title: string;
    number: number;
    iconBg: string;
    icon: React.ReactNode;
  };
};

export default function SmallCard({ data }: Props) {
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${data.iconBg} rounded-full flex items-center justify-center`}
        >
          {data.icon}
        </div>

        <div className="">
          <p>{data.title}</p>
          <h3 className="text-2xl">{data.number}</h3>
        </div>
      </div>
    </div>
  );
}
