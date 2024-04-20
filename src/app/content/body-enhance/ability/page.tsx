'use client';

import { useState } from 'react';
import { Select } from '@/components/common';
import { BodyEnhanceAbilityTable } from '@/components/table';
import { BODY_ENHANCE_PARTS } from '@/contants';
import { BodyEnhancePart } from '@/types';
import jsonData from '@/contants/body-enhance-ability.json';

export default function BodyEnhanceAbilityPage() {
  const [part, setPart] = useState<BodyEnhancePart>('무기');
  const DATA = jsonData[part];

  const selectPart = (item: string) => {
    setPart(item as BodyEnhancePart);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5 sm:gap-10">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">신체 강화 - 능력치</span>
        <Select className="w-[100px]" items={BODY_ENHANCE_PARTS} onSelect={selectPart} />
      </div>

      <BodyEnhanceAbilityTable data={DATA} />
    </div>
  );
}
