'use client';
import { useState } from 'react';
import { Select } from '@/components';

const JOBS = ['전사', '도적', '주술사', '도사', '궁사', '천인', '마도사', '영술사', '차사', '살수'] as const;
const PARTS = ['목/어깨장식', '투구', '무기', '갑옷', '망토'] as const;
type Job = (typeof JOBS)[number];
type Part = (typeof PARTS)[number];

type EnchantData = {
  [key in Job]: {
    [key in Part]: {
      기술능력: string;
      전설: string;
      신화: string;
    }[];
  };
};

export default function NormalEquipEnchant({ data }: { data: EnchantData }) {
  const [job, setJob] = useState<Job>('전사');
  const [part, setPart] = useState<Part>('목/어깨장식');
  const DATA = data[job][part];

  const selectJob = (newJob: Job) => {
    setJob(newJob);
  };

  const selectPart = (newPart: Part) => {
    setPart(newPart);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-between gap-2.5">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 기술 능력</span>
        <div className="flex flex-row items-center gap-2">
          <Select className="w-24" name={job} items={JOBS} onSelect={selectJob} />
          <Select className="w-32" name={part} items={PARTS} onSelect={selectPart} />
        </div>
      </div>

      <div>
        <div className="flex flex-row py-1 bg-gray-200">
          <span className="text-center font-semibold text-sm sm:text-base" style={{ flex: 2 }}>
            종류
          </span>
          <span className="flex-1 text-center font-semibold text-sm sm:text-base">전설</span>
          <span className="flex-1 text-center font-semibold text-sm sm:text-base">신화</span>
        </div>

        <div>
          {DATA?.map((item, index) => (
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
    </>
  );
}
