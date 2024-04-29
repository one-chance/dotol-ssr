'use client';

import { Select } from '@/components';
import { EQUIP_PARTS } from '@/contants';
import { useState } from 'react';

export default function NormalEquipPage() {
  const [part, setPart] = useState('부위');

  const selectPart = (item: string) => {
    setPart(item);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5 sm:gap-10">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 목록</span>
        <Select className="w-[140px]" name={part} items={['부위', ...EQUIP_PARTS]} onSelect={selectPart} />
      </div>

      <span className="text-xl">2024.04.18 환골탈태 업데이트로 변경된 데이터를 적용 중입니다.</span>
    </div>
  );
}
