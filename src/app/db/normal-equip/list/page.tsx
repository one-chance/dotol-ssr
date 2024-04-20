'use client';

import { Select } from '@/components';
import { EQUIP_PARTS } from '@/contants';
import { useState } from 'react';

export default function NormalEquipListPage() {
  const [part, setPart] = useState('무기');

  const selectPart = (item: string) => {
    setPart(item);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5 sm:gap-10">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 목록</span>
        <Select className="w-[140px]" name="부위" items={EQUIP_PARTS} onSelect={selectPart} />
      </div>
    </div>
  );
}
