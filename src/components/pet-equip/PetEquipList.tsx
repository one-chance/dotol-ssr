'use client';
import { useState } from 'react';
import { Select } from '@/components';

const SUBJECTS = ['황룡', '청룡', '주작', '백호', '현무', '공용'] as const;
type Subjects = (typeof SUBJECTS)[number];

type PetListData = {
  [key in Subjects]: {
    [key: string]: {
      [key: string]: string;
    }[];
  };
};

export default function PetEquipList({ data }: { data: PetListData }) {
  const [subject, setSubject] = useState<Subjects>('황룡');
  const parts = {
    황룡: ['무기', '갑옷', '투구', '문양', '신물', '세트옷'],
    청룡: ['무기', '갑옷', '투구', '문양', '신물', '세트옷'],
    주작: ['무기', '갑옷', '투구', '문양', '신물', '세트옷'],
    백호: ['무기', '갑옷', '투구', '문양', '신물', '세트옷'],
    현무: ['무기', '갑옷', '투구', '문양', '신물', '세트옷'],
    공용: ['목걸이', '물의성물', '불의성물', '바람의성물', '땅의성물'],
  };

  const DATA = data[subject];

  const selectSubject = (item: string) => {
    setSubject(item as Subjects);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">환수 장비 - 도감</span>
        <Select className="w-24" items={SUBJECTS} onSelect={selectSubject} />
      </div>

      {parts[subject].map(part => (
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
    </>
  );
}
