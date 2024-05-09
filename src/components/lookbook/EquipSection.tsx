'use client';

import { useState } from 'react';

type EquipSectionProps = {
  onSelect: (item: string) => void;
};

export default function EquipSection({ onSelect }: EquipSectionProps) {
  const [equip, setEquip] = useState<string>('');

  const inputEquip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEquip(e.target.value);
  };

  const selectEquip = () => {
    if (equip === '') return;
    onSelect(equip);
  };

  return (
    <div className="flex flex-col gap-2.5 px-2.5 sm:px-4">
      <span className="min-w-28 text-lg font-medium">일반 장비</span>

      <div className="flex flex-row gap-2">
        <input
          className="border rounded px-2 min-h-9"
          value={equip || ''}
          placeholder="장비 이름"
          onChange={inputEquip}
        />
        <button type="button" className="w-12 sm:w-16 h-9 rounded bg-blue-500 text-white" onClick={selectEquip}>
          착용
        </button>
      </div>
    </div>
  );
}
