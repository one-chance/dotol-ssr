'use client';

import { Select } from '@/components';
import { useState } from 'react';
import jsonData from '@/contants/artifact-equip-list.json';

const PARTS = ['무기', '갑옷', '투구', '명경', '장갑', '보주', '영옥'];

type DataType = {
  [key: string]: { [key: string]: string }[];
};

export default function AntiquityEquipPage() {
  const [part, setPart] = useState<(typeof PARTS)[number]>('무기');

  const DATA: DataType = jsonData[part as keyof typeof jsonData];
  const SUBJECTS = Object.keys(DATA);

  const selectPart = (item: string) => {
    setPart(item);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">신수 유물</span>
        <Select className="w-20" items={PARTS} onSelect={selectPart} />
      </div>

      {SUBJECTS.map((subject, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="sm:text-lg font-medium">{subject}</span>

          <div className="flex flex-row flex-wrap gap-2">
            {DATA[subject].map((item, index) => (
              <div key={index} className="flex flex-col flex-wrap border-t border-l border-r border-gray-300">
                {Object.entries(item).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-300">
                    <span className="w-20 sm:w-[88px] py-1 bg-gray-100 text-center text-xs sm:text-sm font-medium whitespace-pre-wrap">
                      {key}
                    </span>
                    <span
                      className={`${part === '영옥' ? 'w-[84px] sm:w-28' : 'w-16 sm:w-[75px]'} py-1 text-center text-xs sm:text-sm`}
                    >
                      {value}
                    </span>
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
