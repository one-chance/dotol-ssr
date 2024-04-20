'use client';

import { useState } from 'react';
import { Select } from '@/components';
import { BODY_ENHANCE_PARTS } from '@/contants';
import { BodyEnhancePart } from '@/types';
import jsonData from '@/contants/body-enhance-bonus.json';

export default function BonusPage() {
  const [part, setPart] = useState<BodyEnhancePart>('무기');
  const selectPart = (item: string) => {
    setPart(item as BodyEnhancePart);
  };

  const DATA = jsonData[part];

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5 sm:gap-10">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">신체 강화 - 보너스</span>
        <Select className="w-[100px]" items={BODY_ENHANCE_PARTS} onSelect={selectPart} />
      </div>

      <div>
        <div className="flex flex-row items-center h-10 bg-gray-300">
          <span className="w-14 sm:w-20 text-center font-semibold text-sm sm:text-base">단계</span>
          <span className="w-24 sm:w-32 text-center font-semibold text-sm sm:text-base">능력치</span>
          <span className="flex-1 text-center font-semibold text-sm sm:text-base">장비 목록</span>
        </div>

        <div>
          {DATA.map((item, index) => (
            <div key={index} className="flex flex-row items-center py-2 bg-gray-100 border-b">
              <div className="flex w-14 sm:w-20">
                <span className="w-full text-center text-xs sm:text-sm">{item.단계}</span>
              </div>
              <div className="flex flex-col justify-center w-24 sm:w-32">
                {item.능력치.map((ability: string) => (
                  <span key={ability} className="text-center text-xs sm:text-sm">
                    {ability}
                  </span>
                ))}
              </div>
              <div className="flex-1 flex flex-row flex-wrap gap-x-2 gap-x-1 px-2">
                {item.목록.map((name: string) => (
                  <span key={name} className="text-center text-xs sm:text-sm">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
