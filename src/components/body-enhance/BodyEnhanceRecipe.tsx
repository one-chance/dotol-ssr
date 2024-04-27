'use client';

import { useState } from 'react';
import { Select } from '@/components';

const PARTS = ['무기, 갑옷, 투구', '왼손, 오른손', '목/어깨', '신발, 망토'] as const;
type Parts = (typeof PARTS)[number];

type BodyEnhanceRecipeData = {
  [key in Parts]: {
    등급: string;
    비약: string;
    전표: string;
    '누적 비약': string;
    '누적 전표': string;
  }[];
};

export default function BodyEnhanceRecipe({ data }: { data: BodyEnhanceRecipeData }) {
  const TITLES = ['등급', '비약', '전표', '누적 비약', '누적 전표'] as const;
  const [part, setPart] = useState<Parts>('무기, 갑옷, 투구');
  const DATA = data[part];

  const selectPart = (item: string) => {
    setPart(item as Parts);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">신체 강화 - 재료</span>
        <Select className="w-40" items={PARTS} onSelect={selectPart} />
      </div>

      <div>
        <div className="flex flex-row">
          {TITLES.map((title: string) => (
            <span key={title} className="w-32 bg-gray-300 py-2 font-bold text-sm sm:text-base text-center">
              {title}
            </span>
          ))}
        </div>

        {DATA?.map((item, index) => (
          <div key={index} className="flex flex-row border-b border-gray-300 select-none bg-gray-100">
            {Object.values(item).map((value: string, index: number) => (
              <span key={index} className="flex-1 py-1 text-sm sm:text-base text-center">
                {value}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
