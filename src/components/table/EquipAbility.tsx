'use client';

import { useState } from 'react';
import { Select } from '../common';

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

export default function EquipAbility({ equip }: EquipEnhanceTableProps) {
  const [item, setItem] = useState('장비 선택');
  const [detailEquip, setDetailEquip] = useState<string>('선택');
  const [level, setLevel] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0,
  });
  const [maxLevel, setMaxLevel] = useState<number>(100);
  const [ability, setAbility] = useState({
    60: '?',
    90: '?',
    100: '?',
  });

  const selectItem = (_item: string) => {
    setItem(_item);
  };

  return (
    <div className="flex flex-col flex-1 border rounded p-4">
      <span className="text-center font-semibold text-lg">장비 설정</span>
      <div className="flex flex-row items-center py-2">
        <span className="w-20 text-center">상세 장비</span>
        <Select name="장비 선택" className="w-40 mx-auto" items={[equip]} onSelect={selectItem} />
      </div>

      <div className="flex flex-row py-2">
        <span className="w-20 text-center">장비 종류</span>
        <span className="flex-1 text-center">[용]무기</span>
      </div>

      <div className="flex flex-row py-2">
        <span className="w-20 text-center">연마 레벨</span>
        <div className="flex flex-row justify-center flex-1 gap-2">
          <input placeholder="?" className="w-10 border rounded outline-none text-center text-sm" />
          <span className="text-center">/ {level.end}</span>
        </div>
      </div>

      <div className="flex flex-row py-1">
        <span className="w-20 text-center">능력치 1</span>
        <span className="flex-1 text-center">방어구관통</span>
      </div>
      <div className="flex flex-row py-1">
        <span className="w-20 text-center">능력치 2</span>
        <span className="flex-1 text-center">타격치</span>
      </div>
      <div className="flex flex-row py-1">
        <span className="w-20 text-center">연마 20</span>
        <span className="flex-1 text-center">타격치 200</span>
      </div>
      <div className="flex flex-row py-1">
        <span className="w-20 text-center">연마 40</span>
        <span className="flex-1 text-center">명중률 12</span>
      </div>
      <div className="flex flex-row items-center py-1">
        <span className="w-20 text-center">연마 60</span>

        <Select
          className="w-40 mx-auto h-8"
          name="랜덤 능력치"
          items={RANDOM_ABILITY}
          onSelect={item => setAbility({ ...ability, 60: item })}
        />
      </div>
      <div className="flex flex-row py-1">
        <span className="w-20 text-center">연마 80</span>
        <span className="flex-1 text-center">공격력증가 8%</span>
      </div>
      <div className="flex flex-row items-center py-1">
        <span className="w-20 text-center">연마 90</span>

        <Select
          className="w-40 mx-auto h-8"
          name="랜덤 능력치"
          items={RANDOM_ABILITY}
          onSelect={item => setAbility({ ...ability, 90: item })}
        />
      </div>
      <div className="flex flex-row items-center py-1">
        <span className="w-20 text-center">연마 100</span>

        <Select
          className="w-40 mx-auto h-8"
          name="랜덤 능력치"
          items={RANDOM_ABILITY}
          onSelect={item => setAbility({ ...ability, 100: item })}
        />
      </div>
    </div>
  );
}
