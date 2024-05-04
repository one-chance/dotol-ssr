'use client';

import { useEffect, useState } from 'react';

type ListProps = {
  list: string[];
  notice: string[];
  onSelect: (item: string) => void;
};

export default function NormalOriginList({ list, notice, onSelect }: ListProps) {
  const [selectedEquip, setSelectedEquip] = useState('');

  const selectItem = (item: string) => {
    setSelectedEquip(item);
    onSelect(item);
  };

  useEffect(() => {
    setSelectedEquip('');
  }, [list]);

  return (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 h-64 overflow-y-auto scrollbar-hidden content-start border rounded p-2.5 sm:p-5">
      {notice.length !== 0 ? (
        <div className="flex flex-col justify-between select-none mx-auto gap-2.5">
          {notice.map((item: string) => (
            <p key={item} className="text-sm sm:text-base text-[#6877FF]">
              {item}
            </p>
          ))}
        </div>
      ) : (
        list?.map((item: string) => (
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
  );
}
