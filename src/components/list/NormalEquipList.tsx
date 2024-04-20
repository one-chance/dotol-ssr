'use client';

import { useEffect, useState } from 'react';
import { EQUIP_BY_SUBJECT } from '@/contants';
import makeData from '@/contants/normal-equip-make-recipe.json';
import enhanceData from '@/contants/normal-equip-enhance-recipe.json';
import { EquipSubject } from '@/types';

type ListProps = {
  type: 'make' | 'enhance';
  subject: EquipSubject;
};

export default function NormalEquipList({ type, subject }: ListProps) {
  const [selectedEquip, setSelectedEquip] = useState('');

  const DATA =
    type === 'make'
      ? makeData[selectedEquip as keyof typeof makeData]
      : enhanceData[selectedEquip as keyof typeof enhanceData];

  const selectItem = (item: string) => {
    setSelectedEquip(item);
  };

  useEffect(() => {
    setSelectedEquip('');
  }, [subject]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 content-start min-h-40 border rounded p-2.5 sm:p-5">
        {EQUIP_BY_SUBJECT[subject].map((item: string) => (
          <button
            type="button"
            key={item}
            className={`h-7 text-sm sm:text-base outline-none ${selectedEquip === item && 'text-red-500'}`}
            onClick={() => selectItem(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {selectedEquip !== '' && (
        <div className="border-t border-r border-gray-300">
          {DATA?.map((item: { [key: string]: string }, index: number) => (
            <div key={index} className="border-b border-gray-300 select-none">
              {Object.entries(item).map(([key, value]) => (
                <div key={key} className="flex flex-row">
                  <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
                    {key.replace('_', ' ')}
                  </span>
                  <span className="flex-1 px-2 py-1 text-sm sm:text-base">{value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
