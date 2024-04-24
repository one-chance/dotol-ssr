'use client';

import { Select } from '@/components';
import { useState } from 'react';
import jsonData from '@/contants/pet-equip-list.json';

const TYPES = ['황룡', '청룡', '주작', '백호', '현무', '공용'];

type DataType = {
  [key: string]: { [key: string]: string }[];
};

export default function PetEquipPage() {
  const [type, setType] = useState<(typeof TYPES)[number]>('황룡');

  const DATA: DataType = jsonData[type as keyof typeof jsonData];
  const PARTS = Object.keys(DATA);

  const selectType = (item: string) => {
    setType(item);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">환수 장비 - 목록</span>
        <Select className="w-24" items={TYPES} onSelect={selectType} />
      </div>

      {PARTS.map(part => (
        <div key={part} className="flex flex-col gap-2">
          <span className="sm:text-lg font-medium">{part}</span>

          <div className="flex flex-row flex-wrap gap-2">
            {DATA[part].map((item, index) => (
              <div key={index} className="flex flex-col flex-wrap border-t border-l border-r border-gray-300">
                {Object.entries(item).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-300">
                    <span className="w-20 sm:w-[88px] py-1 bg-gray-100 text-center text-xs sm:text-sm font-medium">
                      {key}
                    </span>
                    <span className="w-20 sm:w-28 py-1 text-center text-xs sm:text-sm">{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
