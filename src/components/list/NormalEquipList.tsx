'use client';

import { useEffect, useState } from 'react';
import { EQUIP_BY_SUBJECT } from '@/contants';
import { EquipSubject } from '@/types';

const PARTS = ['무기', '갑옷', '투구', '손', '보조무기', '망토', '신발', '얼굴장식', '목/어깨', '보조'] as const;
type Parts = (typeof PARTS)[number];

type ListProps = {
  subject: EquipSubject;
  part?: Parts;
  notice: string;
  onSelect: (item: string) => void;
};

export default function NormalEquipList({ subject, part, notice, onSelect }: ListProps) {
  const [selectedEquip, setSelectedEquip] = useState('');
  const DATA = EQUIP_BY_SUBJECT[subject][part as Parts];

  const selectItem = (item: string) => {
    setSelectedEquip(item);
    onSelect(item);
  };

  useEffect(() => {
    setSelectedEquip('');
  }, [subject, part]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 content-start min-h-40 border rounded p-2.5 sm:p-5">
        {subject === '종류' ? (
          <div className="leading-loose select-none mx-auto whitespace-pre-wrap">
            <span className="text-sm sm:text-base text-[#6877FF]">{notice}</span>
          </div>
        ) : (
          DATA?.map((item: string) => (
            <button
              type="button"
              key={item}
              className={`h-7 text-sm sm:text-base outline-none ${selectedEquip === item && 'text-red-500'}`}
              onClick={() => selectItem(item)}
            >
              {item}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
