'use client';

import { EquipAbility, Select } from '@/components';
import { useState } from 'react';
import { NormalEquipHoneList } from '@/components/list';
import { EQUIP_SUBJECTS, NORMAL_EQUIP_NOTICE } from '@/contants';
import { EquipSubject } from '@/types';

export default function NormalEquipListPage() {
  const [subject, setSubject] = useState<EquipSubject | '기타'>('종류');
  const [equip, setEquip] = useState<string>('');

  const selectSubject = (item: string) => {
    setSubject(item as EquipSubject | '기타');
    setEquip('');
  };

  const selectEquip = (item: string) => {
    setEquip(item);
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 연마</span>
        <Select
          className="w-20 sm:w-24"
          name={subject}
          items={['종류', ...EQUIP_SUBJECTS, '기타']}
          onSelect={selectSubject}
        />
      </div>

      <NormalEquipHoneList
        subject={subject as EquipSubject}
        notice={NORMAL_EQUIP_NOTICE.enhance}
        onSelect={selectEquip}
      />

      {equip !== '' && (
        <div className="flex flex-row flex-wrap gap-5">
          <EquipAbility equip={equip} />

          <div className="flex flex-col justify-center items-center flex-1 border rounded p-4">
            <span className="font-medium text-lg">장비 능력치</span>
            <div className="flex flex-1 felx-col justify-center items-center">장비 데이터를 최신화 중입니다</div>
          </div>
        </div>
      )}
      <div className="min-h-40" />
    </div>
  );
}
