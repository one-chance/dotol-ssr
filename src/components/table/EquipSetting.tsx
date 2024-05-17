'use client';

import { useEffect, useState } from 'react';
import { Select } from '@/components';
import { HoneData } from '@/types';
import { getHoneData } from '@/utils/supabase';

type EquipSettingProps = {
  origin: string;
  equip: string;
};

const RANDOM_ABILITY = [
  '방어구관통 30',
  '방어도무시 10',
  '방어도 -20',
  '공격력증가 8%',
  '마법치명 8%',
  '마력증강 80',
  '피해흡수무시 8%',
  '피해흡수 16%',
  '마법치명무시 4%',
  '명중률 20',
  '명중회피 10',
  '타격치 100',
  '타격흡수 5%',
  '마력흡수 5%',
  '시전향상 16%',
  '마법수준향상 10',
];

type EquipInfo = {
  종류: string;
  부위: string;
  장비: string;
  능력치1: string;
  능력치2: string;
  20: string;
  40: string;
  80: string;
};

export default function NormalHoneOption({ origin, equip }: EquipSettingProps) {
  const [data, setData] = useState<HoneData>({} as HoneData);
  const [level, setLevel] = useState<number>(0);

  const [ability, setAbility] = useState({
    20: '?',
    40: '?',
    60: '?',
    80: '?',
    90: '?',
    100: '?',
  });

  const inputHoneLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = e.target.value.replace(/[^0-9]/g, '');

    if (Number(temp) > data.max) {
      return setLevel(data.max);
    }

    setLevel(Number(temp));
  };

  useEffect(() => {
    const getData = async () => {
      const tempData = await getHoneData(origin, equip);
      setData(tempData);
    };

    getData();
  }, [equip, origin]);

  return (
    <div className="flex flex-col flex-1 border rounded p-4 gap-3">
      <span className="text-center font-semibold text-lg">연마 능력치</span>

      <div>
        <div className="flex flex-row py-2">
          <span className="w-20 text-center text-sm sm:text-base">장비 종류</span>
          {data.subject && (
            <span className="flex-1 text-center text-sm sm:text-base">{`[${data.subject}] ${data.part}`}</span>
          )}
        </div>

        <div className="flex flex-row py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 레벨</span>

          <div className="flex flex-row justify-center flex-1 gap-2">
            <input
              placeholder="?"
              className="w-10 border rounded outline-none text-center text-sm"
              value={level || ''}
              onChange={inputHoneLevel}
            />
            <span className="text-center text-sm sm:text-base">/ {data.max}</span>
          </div>
        </div>

        <div className="flex flex-row py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 옵션</span>
          <span className="flex-1 text-center text-sm sm:text-base">{data ? data.option1 : ''}</span>
        </div>
        <div className="flex flex-row py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 옵션</span>
          <span className="flex-1 text-center text-sm sm:text-base">{data.option2}</span>
        </div>
        <div className="flex flex-row py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 20</span>
          <span className="flex-1 text-center text-sm sm:text-base">{data.option20}</span>
        </div>
        <div className="flex flex-row py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 40</span>
          <span className="flex-1 text-center text-sm sm:text-base">{data.option40}</span>
        </div>
        <div className="flex flex-row items-center py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 60</span>

          <Select
            disabled={data.max < 60}
            maxHeight="max-h-52"
            className="w-40 mx-auto h-8"
            name="랜덤 능력치"
            items={['랜덤 능력치', ...RANDOM_ABILITY]}
            onSelect={item => setAbility({ ...ability, 60: item })}
          />
        </div>
        <div className="flex flex-row py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 80</span>
          <span className="flex-1 text-center text-sm sm:text-base">{data.option80}</span>
        </div>
        <div className="flex flex-row items-center py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 90</span>

          <Select
            disabled={data.max < 90}
            maxHeight="max-h-52"
            className="w-40 mx-auto h-8"
            name="랜덤 능력치"
            items={['랜덤 능력치', ...RANDOM_ABILITY]}
            onSelect={item => setAbility({ ...ability, 90: item })}
          />
        </div>
        <div className="flex flex-row items-center py-2">
          <span className="w-20 text-center text-sm sm:text-base">연마 100</span>

          <Select
            disabled={data.max < 100}
            maxHeight="max-h-52"
            className="w-40 mx-auto h-8"
            name="랜덤 능력치"
            items={['랜덤 능력치', ...RANDOM_ABILITY]}
            onSelect={item => setAbility({ ...ability, 100: item })}
          />
        </div>
      </div>
    </div>
  );
}
