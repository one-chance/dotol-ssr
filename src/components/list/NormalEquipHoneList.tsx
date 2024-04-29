'use client';

import { useEffect, useState } from 'react';
import { EQUIP_BY_SUBJECT2 } from '@/contants';
import { EquipSubject } from '@/types';

type ListProps = {
  subject: EquipSubject;
  notice: string;
  onSelect: (item: string) => void;
};

export default function NormalEquipHoneList({ subject, notice, onSelect }: ListProps) {
  const [selectedEquip, setSelectedEquip] = useState('');

  const selectItem = (item: string) => {
    setSelectedEquip(item);
    onSelect(item);
  };

  useEffect(() => {
    setSelectedEquip('');
  }, [subject]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 content-start min-h-40 border rounded p-2.5 sm:p-5">
        {subject === '종류' ? (
          <div className="flex flex-row items-center h-full select-none mx-auto whitespace-pre-wrap">
            <span className="text-sm sm:text-base text-[#6877FF]">{notice}</span>
          </div>
        ) : (
          EQUIP_BY_SUBJECT2[subject].map((item: string) => (
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
