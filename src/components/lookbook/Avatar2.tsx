/* eslint-disable @next/next/no-img-element */
'use client';

import { Select } from '@/components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { arrowUp, arrowDown, arrowRight, arrowLeft } from '../icon';
import { getAvatar, getCharacterList, getMyInfo } from '@/utils';
import { useAtomValue } from 'jotai';
import { isloggedinAtom } from '@/states';
import { Skin } from '@/types';

type Direction = 0 | 1 | 2 | 3;
type Naked = 'y' | 'n';

const DIRECTIONS: { value: Direction; label: string; icon: JSX.Element }[] = [
  { value: 3, label: '왼쪽', icon: arrowLeft },
  { value: 2, label: '앞쪽', icon: arrowDown },
  { value: 0, label: '뒤쪽', icon: arrowUp },
  { value: 1, label: '오른쪽', icon: arrowRight },
];

type AvatarProps = {
  skin: Skin;
  equips: string[];
};

export default function Avatar({ equips, skin }: AvatarProps) {
  const isLoggedIn = useAtomValue(isloggedinAtom);

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
      setCharacter(res.data.mainCharacter);
    } else {
      setCharacter('');
    }
  };

  useLayoutEffect(() => {
    getCharacters();
    getUserInfo();
  }, [isLoggedIn]);

  useEffect(() => {
    if (character === '') return;

    // async function loadAvartar() {
    //   const test = await getAvatar(character, String(direction), skin, isNaked, equips.join(','));

    //   setPath(test);
    // }

    // loadAvartar();

    const params = new URLSearchParams();
    params.set('dir', String(direction));
    params.set('naked', isNaked);
    params.set('skin', skin);
    if (equips.length > 0) params.set('items', equips.join(','));

    setPath(`/api/avatar/${character}?${params.toString()}`);

    // return () => {
    //   URL.revokeObjectURL(path);
    // };
  }, [character, direction, isNaked, skin, equips]);

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
        {character !== '' && path !== '' && <img src={path} alt={character} />}
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
