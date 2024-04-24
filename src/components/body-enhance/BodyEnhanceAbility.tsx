'use client';

import { useState } from 'react';
import { Select } from '@/components';

type AbilityCell = {
  등급: string;
  선택_능력: string[];
  기본_능력: string[];
};

type BodyEnhanceAbilityProps = {
  data: { [key: string]: AbilityCell[] };
};

const PARTS = ['무기', '갑옷', '투구', '왼손', '오른손', '목/어깨', '신발', '망토'] as const;
type Parts = (typeof PARTS)[number];

export default function BodyEnhanceAbility({ data }: BodyEnhanceAbilityProps) {
  const [part, setPart] = useState<Parts>('무기');

  const selectPart = (item: string) => {
    setPart(item as Parts);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">신체 강화 - 능력치</span>
        <Select className="w-[100px]" items={PARTS} onSelect={selectPart} />
      </div>

      <div>
        <div className="flex flex-row bg-gray-300 py-2">
          <span className="w-16 text-center font-bold text-sm sm:text-base">등급</span>
          <span className="w-32 text-center font-bold text-sm sm:text-base">선택 능력</span>
          <span className="flex-1 text-center font-bold text-sm sm:text-base">기본 능력</span>
        </div>

        <div>
          {data[part]?.map((item: AbilityCell, index: number) => (
            <div key={index} className="flex flex-row items-center border-b py-1 bg-gray-100">
              <div className="flex w-16">
                <span className="w-full text-center text-sm sm:text-base">{item.등급}</span>
              </div>

              <div className="flex flex-col items-center w-32">
                {item.선택_능력.map((ability: string) => (
                  <span key={ability} className="text-sm">
                    {ability}
                  </span>
                ))}
              </div>

              <div className="flex flex-row flex-wrap justify-start items-center gap-1 flex-1 px-2">
                {item.기본_능력.map((ability: string) => (
                  <span key={ability} className="text-sm">
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
