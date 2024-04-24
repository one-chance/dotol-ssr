'use client';

import { Select } from '@/components';
import { useState } from 'react';
import jsonData from '@/contants/pet-equip-reforge.json';

const TYPES = ['황룡', '청룡', '주작', '백호', '현무', '공용'];

const Title = ({ isPublic }: { isPublic: boolean }) => {
  return (
    <div className="flex flex-row bg-gray-200 py-1">
      <span className={`${isPublic ? 'w-[88px]' : 'w-20'} sm:w-28 pl-1 font-medium text-xs sm:text-sm`}>장비</span>
      <span className="flex-1 pl-1 font-medium text-xs sm:text-sm">재료</span>
      <span className="w-20 sm:w-24 pl-1 font-medium text-xs sm:text-sm">성공률</span>
    </div>
  );
};

export default function PetEquipReforgePage() {
  const [type, setType] = useState<(typeof TYPES)[number]>('황룡');

  const DATA = jsonData[type as keyof typeof jsonData];

  const selectType = (item: string) => {
    setType(item);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">환수 장비 - 재련</span>

        <Select className="w-24" items={TYPES} onSelect={selectType} />
      </div>

      <div className="flex flex-col gap-5">
        {Object.entries(DATA).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-2">
            <span className="sm:text-lg font-medium">{key}</span>

            <div className="flex flex-col">
              <Title isPublic={type == '공용'} />

              {value.map((item, index) => (
                <div key={index} className="flex flex-row items-center py-1 border-b border-gray-300">
                  <span className={`${type === '공용' ? 'w-[88px]' : 'w-20'} sm:w-28 pl-1 text-xs sm:text-sm`}>
                    {item.장비}
                  </span>
                  <span className="flex-1 pl-1 text-xs sm:text-sm">{item.재료}</span>
                  <span className="w-[74px] sm:w-24 pl-1 text-xs sm:text-sm">{item.성공률}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
