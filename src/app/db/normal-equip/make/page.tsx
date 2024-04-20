'use client';

import { useState } from 'react';
import { Select } from '@/components';
import { NormalEquipList } from '@/components/list';
import { EQUIP_SUBJECTS } from '@/contants';
import { EquipSubject } from '@/types';

export default function NormalEquipListPage() {
  const [subject, setSubject] = useState<EquipSubject>('종류');

  const selectSubject = (item: string) => {
    setSubject(item as EquipSubject);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 제작 재료</span>
        <Select name="종류" className="w-20 sm:w-24" items={EQUIP_SUBJECTS} onSelect={selectSubject} />
      </div>

      <NormalEquipList type="make" subject={subject} />
    </div>
  );
}
