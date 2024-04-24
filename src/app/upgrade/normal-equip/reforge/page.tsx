'use client';

import { useState } from 'react';
import { Select, NormalEquipList, NormalEquipTable } from '@/components';
import { EQUIP_SUBJECTS, NORMAL_EQUIP_NOTICE } from '@/contants';
import { EquipSubject } from '@/types';
import DATA from '@/contants/normal-equip-enhance-recipe.json';

export default function NormalEquipReforgePage() {
  const [subject, setSubject] = useState<EquipSubject>('종류');
  const [equip, setEquip] = useState<string>('');

  const selectSubject = (item: string) => {
    setSubject(item as EquipSubject);
    setEquip('');
  };

  const selectEquip = (item: string) => {
    setEquip(item);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 강화</span>
        <Select name="종류" className="w-20 sm:w-24" items={EQUIP_SUBJECTS} onSelect={selectSubject} />
      </div>

      <NormalEquipList subject={subject as EquipSubject} notice={NORMAL_EQUIP_NOTICE.reforge} onSelect={selectEquip} />
      {equip !== '' && <NormalEquipTable list={DATA[equip as keyof typeof DATA]} />}
    </div>
  );
}
