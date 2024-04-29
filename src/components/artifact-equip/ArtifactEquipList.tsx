'use client';
import { useState } from 'react';
import { Select } from '@/components';

const PARTS = ['무기', '갑옷', '투구', '명경', '장갑', '보주', '영옥'] as const;
type Parts = (typeof PARTS)[number];

type ArtifactListData = {
  [key in Parts]: {
    [key: string]: {
      [key: string]: string;
    }[];
  };
};

export default function ArtifactEquipList({ data }: { data: ArtifactListData }) {
  const [part, setPart] = useState<Parts>('무기');

  const DATA = data[part];
  const subjects = Object.keys(DATA);

  const selectPart = (item: string) => {
    setPart(item as Parts);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">신수 유물 - 도감</span>
        <Select className="w-20" name={part} items={PARTS} onSelect={selectPart} />
      </div>

      {subjects.map((subject, index) => (
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
    </>
  );
}
