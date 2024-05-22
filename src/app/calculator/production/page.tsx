'use client';

import { useEffect, useState } from 'react';
import { Select } from '@/components';
import jsonData from '@/contants/production-item.json';
import jsonData2 from '@/contants/production-recipe.json';

const SKILL_LIST = ['종류', '직조술', '벌목술', '채광술', '조제술', '재봉술', '목공술', '대장술', '강화술'] as const;
const GRADES = [
  '단계',
  '왕초보',
  '초보',
  '견습',
  '도제',
  '숙련',
  '전문',
  '장인',
  '명장인',
  '대장인',
  '절대장인',
  '전설장인',
] as const;
type Skill = (typeof SKILL_LIST)[number];
type Grade = (typeof GRADES)[number];

export default function ProductionCalculatorPage() {
  const [skill, setSkill] = useState<Skill>('종류');
  const [grade, setGrade] = useState<Grade>('단계');
  const [item, setItem] = useState<string>('품목');
  const [ingredients, setIngredients] = useState(new Map());
  const [qunaity, setQuantity] = useState<number>(1);

  const DATA = jsonData[skill as keyof typeof jsonData];
  const DATA2 = DATA[grade as keyof typeof DATA];

  const selectSkill = (newSkill: Skill) => {
    setSkill(newSkill);
    setGrade('단계');
    setItem('품목');
  };

  const selectGrade = (newGrade: Grade) => {
    setGrade(newGrade);
    setItem('품목');
  };

  const selectItem = (newItem: string) => {
    setItem(newItem);
    setQuantity(1);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-5 py-10 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-bold">생산 재료 계산기</span>

      <div className="flex flex-row gap-2">
        <Select className="w-24" name={skill} items={SKILL_LIST} onSelect={selectSkill} />
        <Select className="w-28" disabled={skill === '종류'} name={grade} items={GRADES} onSelect={selectGrade} />
        <Select
          className="w-48"
          disabled={grade === '단계'}
          name={item}
          items={['품목', ...DATA2]}
          onSelect={selectItem}
        />
      </div>

      <div className="flex flex-row gap-2">
        <input placeholder="수량" className="w-14 border px-2 py-1 rounded outline-none text-center" />
        <button>확인</button>
      </div>
    </div>
  );
}
