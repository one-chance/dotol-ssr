'use client';

import { useState } from 'react';
import { Select } from '@/components/common';

const LOCATIONS = ['환상의섬', '백두촌', '용궁', '백제', '지옥', '금천군', '흉수계', '인도'] as const;
const SUBJECTS = ['괴수', '물품', '임무', '탐방', '보상'] as const;

type LocationType = (typeof LOCATIONS)[number];
type SubjectType = (typeof SUBJECTS)[number];
type AdventureCell =
  | {
      괴수: string;
      탐험도: string;
      주요_등장위치: string;
    }
  | {
      물품: string;
      탐험도: string;
      획득_방법: string;
    }
  | {
      임무: string;
      탐험도: string;
      시작_NPC: string;
    }
  | {
      탐방: string;
      탐험도: string;
      상세_위치: string;
    }
  | {
      탐험일지_장비: string;
      탐험일지_분신: string;
      칭호: string;
    };

type TableProps = {
  data: { [key: string]: { [key: string]: AdventureCell[] } };
};

export default function AdventureTable({ data }: TableProps) {
  const [location, setLocation] = useState<LocationType>('환상의섬');
  const [subject, setSubject] = useState<SubjectType>('괴수');

  const DATA = data[location][subject];

  const selectLocation = (location: string) => {
    setLocation(location as LocationType);
  };

  const selectSubject = (name: string) => {
    setSubject(name as SubjectType);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">탐험일지 정보</span>
        <div className="flex flex-row items-center gap-2">
          <Select className="w-[110px]" name={location} items={LOCATIONS} onSelect={selectLocation} />
          <Select className="w-20" name={subject} items={SUBJECTS} onSelect={selectSubject} />
        </div>
      </div>

      <div className="border-t border-r border-gray-300">
        {DATA.map((item: AdventureCell, index: number) => (
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
