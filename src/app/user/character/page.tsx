'use client';

import { useState } from 'react';
import { Select } from '@/components';
import Image from 'next/image';

const SERVERS = ['연', '유리', '무휼', '하자', '호동', '진'] as const;
type Server = (typeof SERVERS)[number] | '서버';

export default function CharacterPage() {
  const [character, setCharacter] = useState('');
  const [server, setServer] = useState<Server>('서버');
  const [charactes, setCharacters] = useState<string[]>([]);
  const mainCharacter = '캐릭터';

  const inputCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(e.target.value);
  };

  const selectServer = (item: string) => {
    setServer((item as (typeof SERVERS)[number]) || '서버');
  };

  const getAuth = () => {
    console.log('getAuth');
  };

  const changeMainCharacter = (_character: string) => {
    console.log(_character);
  };

  const deleteCharacter = (_character: string) => {
    console.log(_character);
  };

  return (
    <div className="flex flex-col grow mx-auto px-2.5 py-5 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-semibold">캐릭터 관리</span>

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex flex-col min-w-[340px] border rounded p-5 gap-5">
          <span className="text-lg font-medium text-center">캐릭터 등록</span>

          <Image src="/auth.png" alt="character register" width={298} height={100} />

          <span className="text-sm text-red-400">
            1) 인증할 캐릭터의 호패 인사말에 도톨ID 저장하기
            <br />
            2) 아래 캐릭터명과 서버를 입력하고 인증버튼 누르기
            <br />
            3) 인증에 성공하면 캐릭터 목록에 추가완료
          </span>

          <div className="flex flex-row gap-2.5">
            <input
              placeholder="캐릭터명"
              value={character || ''}
              className="flex-1 h-10 px-2 border rounded text-center outline-none"
              onChange={inputCharacter}
            />
            <Select name="서버" className="w-20" items={SERVERS} onSelect={selectServer} />
          </div>

          <button type="button" className="h-10 border rounded border-red-400 text-red-400" onClick={getAuth}>
            인증하기
          </button>
        </div>

        <div className="flex flex-col min-w-[340px] border rounded p-5 gap-5">
          <span className="text-lg font-medium text-center">캐릭터 목록</span>

          <div className="flex flex-col gap-2 max-h-[302px] overflow-y-scroll">
            {charactes.length === 0 && <span className="text-center text-gray-400">인증된 캐릭터가 없습니다.</span>}
            {charactes?.map((char: string) => (
              <div key={char} className="flex flex-row justify-between items-center">
                <span>{char}</span>
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
                    type="button"
                    className="w-12 h-8 border rounded border-red-400 text-red-400"
                    onClick={() => deleteCharacter(char)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
