/* eslint-disable @next/next/no-img-element */
'use client';

import { Select } from '@/components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { arrowUp, arrowDown, arrowRight, arrowLeft } from '../icon';

type Direction = 0 | 1 | 2 | 3;
type Naked = 'y' | 'n';

type AvatarProps = {
  skin?: number;
  equips?: string[];
};

const DIRECTIONS: { value: Direction; label: string; icon: JSX.Element }[] = [
  { value: 3, label: '왼쪽', icon: arrowLeft },
  { value: 2, label: '앞쪽', icon: arrowDown },
  { value: 0, label: '뒤쪽', icon: arrowUp },
  { value: 1, label: '오른쪽', icon: arrowRight },
];

export default function Avatar({ equips, skin }: AvatarProps) {
  const basicURL = 'https://avatar.baram.nexon.com/Profile/AvatarRender.aspx?loginID=';
  const [character, setCharacter] = useState('');
  const [direction, setDirection] = useState<Direction>(2);
  const [isNaked, setIsNaked] = useState<Naked>('n');

  const [path, setPath] = useState<string>('');

  const changeCharacter = (chr: string) => {
    setCharacter(chr);
  };

  const changeDirection = (dir: Direction) => {
    setDirection(dir);
  };

  const changeNaked = (naked: Naked) => {
    setIsNaked(naked);
  };

  useLayoutEffect(() => {
    setCharacter('협가검@하자');
  }, []);

  useEffect(() => {
    let skinPath = '';
    let equipsPath = '';

    if (skin) skinPath = skin >= 0 ? `&sc=${skin}` : '';
    if (equips) equipsPath = `&previewEquip=${encodeURI(equips.join('|'))}`;

    setPath(`${basicURL}${character}&is=1&changeDir=${direction}&ed=${isNaked}${skinPath}${equipsPath}`);
  }, [character, direction, equips, isNaked, skin]);

  return (
    <div className="flex flex-col border rounded gap-2.5 p-4 mx-auto">
      <div className="flex flex-row border">
        {DIRECTIONS.map(({ value, label, icon }) => (
          <button
            key={value}
            aria-label={label}
            type="button"
            className={`flex flex-row justify-center flex-1 border py-1 outline-none ${direction === value && 'text-blue-500'}`}
            onClick={() => changeDirection(value)}
          >
            {icon}
          </button>
        ))}
      </div>

      <div className="relative flex flex-row justify-center items-center w-[180px] h-[158px] bg-[#EBE7E2]">
        {character !== '' && <img src={path} alt="avatar" />}
      </div>

      <Select items={['협가검@하자']} onSelect={changeCharacter} />

      <div className="flex flex-row justify-center gap-2.5">
        <button
          type="button"
          className={`flex-1 rounded py-1 text-sm ${isNaked === 'y' ? 'bg-red-500 text-white' : 'border'}`}
          onClick={() => changeNaked('y')}
        >
          벗기
        </button>

        <button
          type="button"
          className={`flex-1 rounded py-1 text-sm ${isNaked === 'n' ? 'bg-blue-500 text-white' : 'border'}`}
          onClick={() => changeNaked('n')}
        >
          입기
        </button>
      </div>
    </div>
  );
}
