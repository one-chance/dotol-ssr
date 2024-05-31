'use client';

import { deleteCharacter, updateMainCharacter } from '@/actions/character.action';
import { useState } from 'react';

type CharacterListProps = {
  list: string[];
};

export default function CharacterList({ list }: CharacterListProps) {
  const [mainCharacter, setMainCharacter] = useState('협가검@하자');

  const changeMainCharacter = async (newMainCharacter: string) => {
    const res = await updateMainCharacter(newMainCharacter);

    if (res.statusCode === 200) {
      setMainCharacter(newMainCharacter);
      return alert('대표 캐릭터가 변경되었습니다.');
    }
  };

  const removeCharacter = async (character: string) => {
    const res = await deleteCharacter(character);

    if (res.statusCode === 200) {
      alert('캐릭터가 삭제되었습니다.');
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col min-w-[340px] border rounded p-5 gap-5">
      <span className="text-lg font-medium text-center">캐릭터 목록</span>

      <div className="flex flex-col gap-2 max-h-[302px] overflow-y-scroll">
        {list?.length === 0 && <span className="text-center text-gray-400">인증된 캐릭터가 없습니다.</span>}

        {list?.length > 0 &&
          list?.map((char: string) => (
            <div key={char} className="flex flex-row justify-between items-center">
              <span className={`${char === mainCharacter && 'text-blue-500'}`}>{char}</span>

              <div className="flex flex-row gap-2">
                <button
                  disabled={mainCharacter === char}
                  type="button"
                  className="w-12 h-8 border rounded border-blue-400 text-blue-400 disabled:opacity-50"
                  onClick={() => changeMainCharacter(char)}
                >
                  대표
                </button>

                <button
                  disabled={mainCharacter === char}
                  type="button"
                  className="w-12 h-8 border rounded border-red-400 text-red-400 disabled:opacity-50"
                  onClick={() => removeCharacter(char)}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
