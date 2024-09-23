'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Select } from '@/components/common';
import { getGreetingMessage, registerCharacter } from '@/actions';

const SERVERS = ['서버', '연', '유리', '무휼', '하자', '호동', '진'] as const;
type Server = (typeof SERVERS)[number];

export default function CharacterAuth() {
  const [character, setCharacter] = useState('');
  const [server, setServer] = useState<Server>('서버');

  const inputCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(e.target.value);
  };

  const selectServer = (item: Server) => {
    setServer(item);
  };

  const getAuthentication = async () => {
    const res = await registerCharacter(`${character}@${server}`);

    if (res.statusCode === 400) {
      return alert('이미 등록된 캐릭터거나 인사말이 일치하지 않습니다.');
    } else if (res.statusCode === 200) {
      alert('캐릭터가 등록되었습니다.');
      window.location.reload();
    }
  };

  useEffect(() => {
    const test = async () => {
      console.log(await getGreetingMessage('감소셔틀@하자'));
    };

    test();
  }, []);

  return (
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
        <Select className="w-20" name={server} items={SERVERS} onSelect={selectServer} />
      </div>

      <button
        type="button"
        disabled={character === '' || server === '서버'}
        className="h-10 border rounded bg-red-500 text-white disabled:opacity-50"
        onClick={getAuthentication}
      >
        인증하기
      </button>
    </div>
  );
}
