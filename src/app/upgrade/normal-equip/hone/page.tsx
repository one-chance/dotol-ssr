'use client';

import { EquipAbility, Select } from '@/components';
import { useState } from 'react';
import { NormalEquipList } from '@/components/list';
import { EQUIP_SUBJECTS, NORMAL_EQUIP_NOTICE } from '@/contants';
import { EquipSubject } from '@/types';

export default function NormalEquipListPage() {
  const [subject, setSubject] = useState<EquipSubject | '종류'>('종류');
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
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 연마</span>
        <Select name="종류" className="w-20 sm:w-24" items={EQUIP_SUBJECTS} onSelect={selectSubject} />
      </div>

      <NormalEquipList subject={subject as EquipSubject} notice={NORMAL_EQUIP_NOTICE.enhance} onSelect={selectEquip} />

      {/* <div className="flex mx-auto">
        <span className="text-red-500">
          아래에서 상세 장비, 연마 레벨, 랜덤 능력치를 선택해야 정확하게 계산됩니다.
          <br />
          연마로 증가하는 능력치의 소수점은 기준에 따라 버림으로 계산합니다.
          <br />
          방어구관통, 방어도무시, 방어도, 명중률, 명중회피는 소수점 버림
          <br />
          공격력증가, 마법치명, 마법치명무는 소수점 첫째자리에서 버림
        </span>
      </div> */}

      <div className="flex flex-row flex-wrap gap-5">
        <EquipAbility equip={equip} />

        <div className="flex flex-col justify-center items-center flex-1 border rounded p-4">
          <span className="font-medium text-lg">장비 능력치</span>
          <div className="flex flex-1 felx-col justify-center items-center">장비 데이터를 최신화 중입니다</div>
        </div>
      </div>
    </div>
  );
}
