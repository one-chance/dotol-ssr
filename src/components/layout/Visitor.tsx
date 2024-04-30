'use client';

import { getTodayVisitor, getTotalVisitor } from '@/utils';
import { useLayoutEffect, useState } from 'react';

export default function Visitor() {
  const [todayVisitor, setTodayVisitor] = useState(0);
  const [totalVisitor, setTotalVisitor] = useState(0);

  const getVisitors = async () => {
    setTodayVisitor(await getTodayVisitor());
    setTotalVisitor(await getTotalVisitor());
  };

  useLayoutEffect(() => {
    getVisitors();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 p-5 border-t border-b border-[#808396]">
      <span className="text-[#e9e1d1]">Today: {todayVisitor}</span>
      <span className="text-[#e9e1d1]">Total: {totalVisitor}</span>
    </div>
  );
}
