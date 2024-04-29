'use client';

import { NormalEquipHoneList, Select } from '@/components';
import { EquipSubject } from '@/types';
import { useState } from 'react';

const SUBJECTS = ['종류', '용', '중국', '일본', '환웅', '타계', '기타'] as const;
type Subjects = (typeof SUBJECTS)[number];

export default function HoneCalculatorPage() {
  const [subject, setSubject] = useState<Subjects>('종류');
  const [equip, setEquip] = useState<string>('');
  const [deatilEquip, setDetailEquip] = useState<string>('');

  const selectSubject = (item: string) => {
    setSubject(item as Subjects);
  };

  const selectEquip = (item: string) => {
    setEquip(item);
  };

  const deleteItem = (name: string) => {
    console.log(name);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center gap-10">
        <span className="text-xl sm:text-2xl font-bold">연마 분해 계산기</span>

        <Select className="w-20" name={subject} items={SUBJECTS} onSelect={selectSubject} />
      </div>

      <NormalEquipHoneList
        subject={subject as EquipSubject}
        notice="장비를 선택하면 분해할 장비 목록에 추가됩니다."
        onSelect={selectEquip}
      />

      {equip !== '' && (
        <div className="flex flex-row felx-wrap border rounded p-5">
          <span className="w-full text-center text-gray-500">장비 데이터를 최신화하고 있습니다.</span>
        </div>
      )}

      {deatilEquip !== '' && (
        <div className="flex flex-col border rounded p-4 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium">분해할 장비 목록</span>

            <div className="flex flex-row flex-wrap gap-2">
              <button
                type="button"
                className="flex flex-row justify-between min-w-20 border hover:border-red-500 hover:text-red-500 rounded-xl px-2 py-1 gap-2.5"
                onClick={() => deleteItem('환웅의창의5성')}
              >
                환웅의창의5성 1개
              </button>

              <button
                type="button"
                className="flex flex-row justify-between min-w-20 border hover:border-red-500 hover:text-red-500 rounded-xl px-2 py-1 gap-2.5"
                onClick={() => deleteItem('환웅의창의5성')}
              >
                환웅의창의5성 1개
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-lg font-medium">분해 결과</span>
            <span>연마석: 1개</span>
            <span>연마돌파석: 1개</span>
          </div>
        </div>
      )}
    </div>
  );
}
