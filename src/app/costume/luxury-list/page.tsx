/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { LUXURY_LIST } from '@/contants';

export default function CostumeListPage() {
  const [series, setSeries] = useState<keyof typeof LUXURY_LIST>(13);
  const names = Object.values(LUXURY_LIST).map(item => item.name);

  const selectSeries = (_series: number) => {
    setSeries(_series as keyof typeof LUXURY_LIST);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10">
      <span className="text-xl sm:text-2xl font-semibold">명품의 목록</span>

      <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 border rounded p-4 mt-10">
        {names.map((item: string, index: number) => (
          <button
            key={item}
            type="button"
            className={`outline-none ${series === index + 1 && 'text-red-500'}`}
            onClick={() => selectSeries(index + 1)}
          >
            {index + 1}기 {item}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-5 mt-1">
        <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 border rounded p-2.5">
          {LUXURY_LIST[series as keyof typeof LUXURY_LIST].parts.map((item: string) => (
            <span key={item} className="text-sm">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center rounded">
          {LUXURY_LIST[series as keyof typeof LUXURY_LIST].images.map((img: string) => (
            <img key={img} alt="luxury" src={`https://asset.dotols.com/image/luxury/${img}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
