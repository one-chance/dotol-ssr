'use client';

import { Select } from '@/components/common';
import { useState } from 'react';

const SUBJECTS = [
  '탐험일지',
  '고고학',
  '전장',
  '세시마을',
  '환웅의유산',
  '안시성 전투',
  '환상의시련',
  '영웅의 기억',
  '그 외',
  '가이드',
  '레이드',
] as const;

type SubjectType = (typeof SUBJECTS)[number];
type ArchievementCell = {
  업적: string;
  업적_점수: string;
  조건: string;
};

type TableProps = {
  data: { [key: string]: ArchievementCell[] };
};

export default function AchievementTable({ data }: TableProps) {
  const [subject, setSubject] = useState<SubjectType>('탐험일지');
  const DATA = data[subject];

  const selectSubject = (name: string) => {
    setSubject(name as SubjectType);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">업적 정보</span>
        <Select className="w-[140px]" name={subject} items={SUBJECTS} onSelect={selectSubject} />
      </div>

      <div className="border-t border-r border-gray-300">
        {DATA.map((item: ArchievementCell, index: number) => (
          <div key={index} className="border-b border-gray-300 select-none">
            {Object.entries(item).map(([key, value]) => (
              <div key={key} className="flex flex-row">
                <span className="w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
                  {key.replace('_', ' ')}
                </span>
                <span className="flex-1 px-2 py-1 text-sm sm:text-base whitespace-pre-wrap keep-all">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
