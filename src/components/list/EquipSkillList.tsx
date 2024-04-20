'use client';

import { useState } from 'react';
import { SKILL_INDEX } from '@/contants';

type EquipSkillListProps = {
  title: string;
  description: string;
  list: string[];
};

export default function EquipSkillList({ title, description, list }: EquipSkillListProps) {
  const [skill, setSkill] = useState('');

  const selectSkill = (item: string) => {
    setSkill(item);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-base sm:text-xl font-medium">{title}</span>
      <span>{description}</span>

      <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 border rounded p-4">
        {list.map((item: string) => (
          <button
            key={item}
            type="button"
            className={`text-sm sm:text-base outline-none ${skill === item && 'text-red-500 font-medium'}`}
            onClick={() => selectSkill(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {skill !== '' && (
        <div className="flex flex-row flex-wrap rounded bg-gray-300 gap-2 p-4">
          {SKILL_INDEX[skill].map(img => (
            <img
              key={img}
              alt="skill"
              src={`https://asset.dotols.com/image/equip-skill/${img}.png`}
              className="w-full h-auto max-w-[260px]"
            />
          ))}
        </div>
      )}
    </div>
  );
}
