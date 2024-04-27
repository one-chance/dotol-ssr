'use client';

import { useState } from 'react';
import { SKILL_LIST, SKILL_INDEX } from '@/contants';

type SkillListProps = {
  type: string;
  title: string;
  description: string;
};

const ImageList = ({ names }: { names: string[] }) => {
  return (
    <div className="flex flex-row flex-wrap items-start rounded bg-gray-300 gap-2 p-4">
      {names.map((name: string) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={name} width={260} alt="skill" src={`${process.env.NEXT_PUBLIC_ASSET}/image/set-effect/${name}.png`} />
      ))}
    </div>
  );
};

export default function SkillList({ type, title, description }: SkillListProps) {
  const [skill, setSkill] = useState('');
  const skillList = SKILL_LIST[type];
  const names = SKILL_INDEX[skill];

  const selectSkill = (item: string) => {
    setSkill(item);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-base sm:text-xl font-medium">{title}</span>
      <span>{description}</span>

      <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 border rounded p-4">
        {skillList?.map((item: string) => (
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

      {skill !== '' && <ImageList names={names} />}
    </div>
  );
}
