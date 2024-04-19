import React from 'react';

type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  return <h2 className="text-2xl font-bold text-slate-50">{title}</h2>;
}
