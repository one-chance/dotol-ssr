'use client';

import { Select } from '@/components';
import { useState } from 'react';
import jsonData from '@/contants/skill-ability-list.json';

const JOBS = ['전사', '도적', '주술사', '도사', '궁사', '천인', '마도사', '영술사', '차사', '살수'];
const PARTS = ['목/어깨장식', '투구', '무기', '갑옷', '망토'];

export default function SkillAbilityPage() {
  const [job, setJob] = useState<(typeof JOBS)[number]>('전사');
  const [part, setPart] = useState<(typeof PARTS)[number]>('목/어깨장식');

  const DATA = jsonData[job as keyof typeof jsonData];

  const selectJob = (item: string) => {
    setJob(item);
  };

  const selectPart = (item: string) => {
    setPart(item);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row items-center justify-between">
        <span className="text-xl sm:text-2xl font-semibold">기술 능력</span>
        <div className="flex flex-row items-center gap-2">
          <Select className="w-24" items={JOBS} onSelect={selectJob} />
          <Select className="w-32" items={PARTS} onSelect={selectPart} />
        </div>
      </div>

      <div>
        <div className="flex flex-row py-2 bg-gray-200">
          <span className="text-center font-semibold text-sm sm:text-base" style={{ flex: 2 }}>
            종류
          </span>
          <span className="flex-1 text-center font-semibold text-sm sm:text-base">전설</span>
          <span className="flex-1 text-center font-semibold text-sm sm:text-base">신화</span>
        </div>

        <div>
          {DATA[part as keyof typeof DATA]?.map((item, index) => (
            <div key={index} className="flex flex-row py-1 bg-gray-100 border-b border-gray-300">
              <span className="text-xs sm:text-sm text-center" style={{ flex: 2 }}>
                {item.기술능력}
              </span>
              <span className="flex-1 text-xs sm:text-sm text-center">{item.전설}</span>
              <span className="flex-1 text-xs sm:text-sm text-center">{item.신화}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
