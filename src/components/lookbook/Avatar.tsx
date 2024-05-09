/* eslint-disable @next/next/no-img-element */
'use client';

import { Select } from '@/components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { arrowUp, arrowDown, arrowRight, arrowLeft } from '../icon';
import { getCharacterList, getMyInfo } from '@/utils';
import { useAtomValue } from 'jotai';
import { isloggedinAtom } from '@/states';
import { SKIN_LIST } from '@/contants';

type Direction = 0 | 1 | 2 | 3;
type Naked = 'y' | 'n';

type AvatarProps = {
  skin: keyof typeof SKIN_LIST | '현재 색상';
  equips?: string[];
};

const DIRECTIONS: { value: Direction; label: string; icon: JSX.Element }[] = [
  { value: 3, label: '왼쪽', icon: arrowLeft },
  { value: 2, label: '앞쪽', icon: arrowDown },
  { value: 0, label: '뒤쪽', icon: arrowUp },
  { value: 1, label: '오른쪽', icon: arrowRight },
];

export default function Avatar({ equips, skin }: AvatarProps) {
  // const baseURL = 'https://avatar.baram.nexon.com/Profile/AvatarRender.aspx?loginID=';
  const baseURL = 'https://avatar.baram.nexon.com/Profile/RenderAvatar/';

  const isLoggedIn = useAtomValue(isloggedinAtom);

  const [userId, setUserId] = useState<string>('');
  const [character, setCharacter] = useState<string>('');
  const [characters, setCharacters] = useState<string[]>([]);

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

  const getCharacters = async () => {
    const res = await getCharacterList();

    if (res.statusCode === 200) {
      setCharacters(res.data);
    } else {
      setCharacters([]);
    }
  };

  const getUserInfo = async () => {
    const res = await getMyInfo();

    if (res.statusCode === 200) {
      setUserId(res.data.userId);
      setCharacter(res.data.mainCharacter);
    } else {
      setUserId('');
      setCharacter('');
    }
  };

  useLayoutEffect(() => {
    getCharacters();
    getUserInfo();
  }, [isLoggedIn]);

  useEffect(() => {
    let equipsPath = '';

    const skinPath = `&skin=${SKIN_LIST[skin]}`;
    if (equips) equipsPath = `&items=${equips.join(',')}`;

    setPath(`/api/costume/${userId}/${character}?dir=${direction}&naked=${isNaked}${skinPath}${equipsPath}`);
  }, [character, direction, equips, isNaked, skin, userId]);

  return (
    <div className="flex flex-col border rounded gap-2.5 p-3 mx-auto">
      <div className="flex flex-row border">
        {DIRECTIONS.map(({ value, label, icon }) => (
          <button
            key={value}
            aria-label={label}
            className={`flex flex-row justify-center flex-1 border py-1 outline-none disabled:opacity-50 ${direction === value && 'text-blue-500'}`}
            disabled={character === ''}
            type="button"
            onClick={() => changeDirection(value)}
          >
            {icon}
          </button>
        ))}
      </div>

      <div className="relative flex flex-row justify-center items-center w-[180px] h-[158px] bg-[#EBE7E2]">
        {/* {character !== '' && <img src={path} alt={character} />} */}
      </div>

      <Select name={character} disabled={character === ''} items={characters} onSelect={changeCharacter} />

      <div className="flex flex-row justify-center gap-2.5">
        <button
          type="button"
          disabled={character === ''}
          className={`flex-1 rounded py-1 text-sm disabled:opacity-50 ${isNaked === 'y' ? 'bg-red-500 text-white' : 'border'}`}
          onClick={() => changeNaked('y')}
        >
          벗기
        </button>

        <button
          type="button"
          disabled={character === ''}
          className={`flex-1 rounded py-1 text-sm disabled:opacity-50 ${isNaked === 'n' ? 'bg-blue-500 text-white' : 'border'}`}
          onClick={() => changeNaked('n')}
        >
          입기
        </button>
      </div>
    </div>
  );
}
