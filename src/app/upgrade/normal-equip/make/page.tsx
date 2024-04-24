'use client';

import { useState } from 'react';
import { NormalEquipList, NormalEquipTable, Select } from '@/components';
import { EQUIP_SUBJECTS, NORMAL_EQUIP_NOTICE } from '@/contants';
import { EquipSubject } from '@/types';
import DATA from '@/contants/normal-equip-make-recipe.json';

export default function NormalEquipMakePage() {
  const [subject, setSubject] = useState<EquipSubject>('종류');
  const [equip, setEquip] = useState<string>('');

  const selectSubject = (_subject: string) => {
    setSubject(_subject as EquipSubject);
    setEquip('');
  };

  const selectEquip = (_equip: string) => {
    setEquip(_equip);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 제작</span>
        <Select name="종류" className="w-20 sm:w-24" items={EQUIP_SUBJECTS} onSelect={selectSubject} />
      </div>

      <NormalEquipList subject={subject} notice={NORMAL_EQUIP_NOTICE.make} onSelect={selectEquip} />

      {equip !== '' && <NormalEquipTable list={DATA[equip as keyof typeof DATA]} />}
    </div>
  );
}
