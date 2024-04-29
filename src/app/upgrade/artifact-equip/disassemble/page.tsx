'use client';

import { Select } from '@/components';
import { useState } from 'react';
// import jsonData from '@/contants/artifact-equip-reforge.json';

const PARTS = ['부위', '무기', '갑옷', '투구', '명경', '장갑', '보주'];

type DataType = {
  [key: string]: { [key: string]: string }[];
};

const Title = () => {
  const TITLES = ['등급', '재료', '금전', '성공률', '전투력'];

  return (
    <div className="flex flex-row w-full text-center bg-gray-200 py-1">
      {TITLES.map(title => (
        <span key={title} className="flex-1 font-medium text-sm sm:text-base">
          {title}
        </span>
      ))}
    </div>
  );
};

export default function ArtifactEquipDisassemblePage() {
  const [part, setPart] = useState<(typeof PARTS)[number]>('무기');

  // const DATA: DataType = jsonData[part as keyof typeof jsonData];
  // const SUBJECTS = Object.keys(DATA);

  const selectPart = (item: string) => {
    setPart(item);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">신수 유물 - 제작</span>
        <Select className="w-20" name={part} items={PARTS} onSelect={selectPart} />
      </div>

      {/* {SUBJECTS.map((subject, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="sm:text-lg font-medium">{subject}</span>

          <div>
            <Title />

            {DATA[subject].map((item, index) => (
              <div key={index} className="flex flex-row items-center min-h-8 py-2 bg-gray-100 border-b border-gray-300">
                {Object.values(item).map(value => (
                  <span key={value} className="flex-1 text-center text-xs sm:text-sm whitespace-pre-wrap">
                    {value}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
}
