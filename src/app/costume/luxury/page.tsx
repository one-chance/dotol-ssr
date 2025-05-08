/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { LUXURY_LIST } from '@/contants';

type Series = keyof typeof LUXURY_LIST;

export default function LuxuryPage() {
  const [series, setSeries] = useState<Series>('북두칠성');
  const names = Object.keys(LUXURY_LIST) as Series[];

  const DATA = LUXURY_LIST[series as Series];

  const selectSeries = (newSeries: Series) => {
    setSeries(newSeries);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10">
      <span className="text-xl sm:text-2xl font-semibold">명품의 목록</span>

      <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 border rounded p-4 mt-10">
        {names.map((item: Series, index: number) => (
          <button
            key={item}
            type="button"
            className={`outline-none ${series === item && 'text-red-500'}`}
            onClick={() => selectSeries(item)}
          >
            {index + 1}기 {item}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-5 mt-1">
        <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 border rounded p-2.5">
          {DATA?.parts.map((item: string) => (
            <span key={item} className="text-sm">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center rounded">
          {DATA?.images.map((img: string) => (
            <img key={img} alt="luxury" src={`${process.env.NEXT_PUBLIC_ASSET}/image/luxury/${img}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
