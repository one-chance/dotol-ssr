'use client';

import { useState } from 'react';
import { Select, NormalEquipList, NormalEquipTable } from '@/components';
import { EQUIP_SUBJECTS, NORMAL_EQUIP_NOTICE } from '@/contants';
import { EquipSubject } from '@/types';
import jsonData from '@/contants/normal-equip-reforge-recipe.json';

const PARTS = ['무기', '갑옷', '투구', '손', '보조무기', '망토', '신발', '얼굴장식', '목/어깨', '보조'] as const;
type Parts = (typeof PARTS)[number];
type ReforgeData = {
  [key: string]: string;
}[];

export default function NormalEquipReforgePage() {
  const [subject, setSubject] = useState<EquipSubject>('종류');
  const [part, setPart] = useState<Parts>('무기');
  const [equip, setEquip] = useState<string>('');

  const DATA: ReforgeData = equip === '' ? ([] as ReforgeData) : jsonData[equip as keyof typeof jsonData];

  const selectSubject = (_subject: string) => {
    setSubject(_subject as EquipSubject);
    setEquip('');
  };

  const selectPart = (_part: string) => {
    setPart(_part as Parts);
    setEquip('');
  };

  const selectEquip = (_equip: string) => {
    setEquip(_equip);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 강화</span>
        <div className="flex flex-row items-center gap-2">
          <Select
            className="w-20 sm:w-24"
            name={subject}
            items={['종류', ...EQUIP_SUBJECTS]}
            onSelect={selectSubject}
          />
          <Select
            className="w-20 sm:w-28"
            disabled={subject === '종류'}
            name={part}
            items={PARTS}
            onSelect={selectPart}
          />
        </div>
      </div>

      <NormalEquipList subject={subject} part={part} notice={NORMAL_EQUIP_NOTICE.reforge} onSelect={selectEquip} />

      {equip !== '' && equip !== '흑룡화살통' && <NormalEquipTable list={DATA} />}
    </div>
  );
}
