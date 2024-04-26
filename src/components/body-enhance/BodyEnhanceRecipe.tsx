'use client';

import { useState } from 'react';
import { Select } from '@/components';

type RecipeCell = {
  등급: string;
  비약: string;
  전표: string;
  누적_비약: string;
  누적_전표: string;
};

type BodyEnhanceRecipeProps = {
  data: { [key: string]: RecipeCell[] };
};

const PARTS = ['무기, 갑옷, 투구', '왼손, 오른손', '목/어깨', '신발, 망토'] as const;
type Parts = (typeof PARTS)[number];

export default function BodyEnhanceRecipe({ data }: BodyEnhanceRecipeProps) {
  const TITLES = ['등급', '비약', '전표', '누적_비약', '누적_전표'] as const;

  const [part, setPart] = useState<Parts>('무기, 갑옷, 투구');

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
              {title.replace('_', ' ')}
            </span>
          ))}
        </div>

        {data[part]?.map((item: RecipeCell, index: number) => (
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
