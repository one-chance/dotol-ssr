'use client';

import { useEffect, useState } from 'react';
import { Select } from '@/components';
import jsonData from '@/contants/normal-equip-hone-recipe.json';

type EquipEnhanceTableProps = {
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

const HONE_ABILITY_LIST = {
  '[용]무기': {
    최대연마레벨: 100,
    능력치_1: '방어구관통',
    능력치_2: '타격치',
    연마_20: '타격치 200',
    연마_40: '명중률 12',
    연마_80: '공격력증가 8%',
  },
};

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

export default function EquipAbility({ equip }: EquipEnhanceTableProps) {
  const [item, setItem] = useState('장비 선택');
  const [detailEquip, setDetailEquip] = useState<string>('장비 선택');
  const [level, setLevel] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0,
  });

  const DATA: EquipInfo[] = jsonData;

  const [ability, setAbility] = useState({
    20: '?',
    40: '?',
    60: '?',
    80: '?',
    90: '?',
    100: '?',
  });

  const [test, setTest] = useState({} as EquipInfo);

  const inputStartLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = Number(e.target.value);

    if (temp > 100) return;
    setLevel({ ...level, start: temp });
  };

  const selectItem = (_item: string) => {
    setItem(_item);
  };

  useEffect(() => {
    DATA.forEach((data: EquipInfo) => {
      if (data.장비 === equip) {
        setTest(data);
      }
    });
  }, [DATA, equip]);

  return (
    <div className="flex flex-col flex-1 border rounded p-4">
      <span className="text-center font-semibold text-lg">장비 설정</span>
      <div className="flex flex-row items-center py-2">
        <span className="w-20 text-center">상세 장비</span>
        <Select disabled name={detailEquip} className="w-40 mx-auto" items={[equip]} onSelect={selectItem} />
      </div>

      <div className="flex flex-row py-2">
        <span className="w-20 text-center">장비 종류</span>
        <span className="flex-1 text-center">
          [{test.종류}]{test.부위}
        </span>
      </div>

      <div className="flex flex-row py-2">
        <span className="w-20 text-center">연마 레벨</span>
        <div className="flex flex-row justify-center flex-1 gap-2">
          <input
            placeholder="?"
            className="w-10 border rounded outline-none text-center text-sm"
            value={level.start || ''}
            onChange={inputStartLevel}
          />
          <span className="text-center">/ {level.end}</span>
        </div>
      </div>

      <div className="flex flex-row py-1">
        <span className="w-20 text-center">능력치 1</span>
        <span className="flex-1 text-center">{test.능력치1}</span>
      </div>
      <div className="flex flex-row py-1">
        <span className="w-20 text-center">능력치 2</span>
        <span className="flex-1 text-center">{test.능력치2}</span>
      </div>
      <div className="flex flex-row py-1">
        <span className="w-20 text-center">연마 20</span>
        <span className="flex-1 text-center">{test[20]}</span>
      </div>
      <div className="flex flex-row py-1">
        <span className="w-20 text-center">연마 40</span>
        <span className="flex-1 text-center">{test[40]}</span>
      </div>
      <div className="flex flex-row items-center py-1">
        <span className="w-20 text-center">연마 60</span>

        <Select
          maxHeight="max-h-52"
          className="w-40 mx-auto h-8"
          name="랜덤 능력치"
          items={['랜덤 능력치', ...RANDOM_ABILITY]}
          onSelect={item => setAbility({ ...ability, 60: item })}
        />
      </div>
      <div className="flex flex-row py-1">
        <span className="w-20 text-center">연마 80</span>
        <span className="flex-1 text-center">{test[80]}</span>
      </div>
      <div className="flex flex-row items-center py-1">
        <span className="w-20 text-center">연마 90</span>

        <Select
          maxHeight="max-h-52"
          className="w-40 mx-auto h-8"
          name="랜덤 능력치"
          items={['랜덤 능력치', ...RANDOM_ABILITY]}
          onSelect={item => setAbility({ ...ability, 90: item })}
        />
      </div>
      <div className="flex flex-row items-center py-1">
        <span className="w-20 text-center">연마 100</span>

        <Select
          maxHeight="max-h-52"
          className="w-40 mx-auto h-8"
          name="랜덤 능력치"
          items={['랜덤 능력치', ...RANDOM_ABILITY]}
          onSelect={item => setAbility({ ...ability, 100: item })}
        />
      </div>
    </div>
  );
}
