'use client';

import { useState } from 'react';
import { Select } from '@/components';

const Title = ({ isPublic }: { isPublic: boolean }) => {
  return (
    <div className="flex flex-row bg-gray-200 py-1">
      <span className={`${isPublic ? 'w-[88px]' : 'w-20'} sm:w-28 pl-1 font-medium text-xs sm:text-sm`}>장비</span>
      <span className="flex-1 pl-1 font-medium text-xs sm:text-sm">재료</span>
      <span className="w-20 sm:w-24 pl-1 font-medium text-xs sm:text-sm">성공률</span>
    </div>
  );
};

const SUBJECTS = ['황룡', '청룡', '주작', '백호', '현무', '공용'] as const;
const PARTS = ['무기', '갑옷', '투구', '문양', '신물', '세트옷'] || [
  '목걸이',
  '물의성물',
  '불의성물',
  '바람의성물',
  '땅의성물',
];
type Subjects = (typeof SUBJECTS)[number];
type Parts = (typeof PARTS)[number];

type PetReforgeData = {
  [key in Subjects]: {
    [key in Parts]: {
      장비: string;
      재료: string;
      성공률: string;
    }[];
  };
};

export default function PetEquipReforge({ data }: { data: PetReforgeData }) {
  const [subject, setSubject] = useState<Subjects>('황룡');

  const DATA = data[subject];

  const selectSubject = (item: string) => {
    setSubject(item as Subjects);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">환수 장비 - 재련</span>

        <Select className="w-24" items={SUBJECTS} onSelect={selectSubject} />
      </div>

      <div className="flex flex-col gap-5">
        {Object.entries(DATA).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-2">
            <span className="sm:text-lg font-medium">{key}</span>

            <div className="flex flex-col">
              <Title isPublic={subject == '공용'} />

              {value.map((item, index) => (
                <div key={index} className="flex flex-row items-center py-1 border-b border-gray-300">
                  <span className={`${subject === '공용' ? 'w-[88px]' : 'w-20'} sm:w-28 pl-1 text-xs sm:text-sm`}>
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
    </>
  );
}
