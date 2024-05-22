'use client';

import { useState } from 'react';

type DetailListProps = {
  list: string[];
  onSelect: (item: string) => void;
};

export default function NormalDetailList({ list, onSelect }: DetailListProps) {
  const [item, setItem] = useState('');

  const selectItem = (newItem: string) => {
    setItem(newItem);
    onSelect(newItem);
  };

  return (
    <div className="flex flex-col gap-3 border rounded p-5 min-h-40">
      <span className="font-semibold text-lg">세부 장비</span>
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 content-start">
        {list?.map((equip: string) => (
          <button
            className={`h-7 text-sm sm:text-base outline-none ${equip === item && 'text-red-500'}`}
            type="button"
            key={equip}
            onClick={() => selectItem(equip)}
          >
            {equip}
          </button>
        ))}
      </div>
    </div>
  );
}
