'use client';

import { useLayoutEffect, useState } from 'react';
import { Select } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAtomValue } from 'jotai';
import { isloggedinAtom } from '@/states';
import { deleteCharacter, getCharacterList, registerCharacter, updateMainCharacter } from '@/utils/api';
import { getMyInfo } from '@/utils';

const SERVERS = ['서버', '연', '유리', '무휼', '하자', '호동', '진'] as const;
type Server = (typeof SERVERS)[number] | '서버';

export default function CharacterPage() {
  const router = useRouter();
  const isLoggedin = useAtomValue(isloggedinAtom);

  const [character, setCharacter] = useState('');
  const [server, setServer] = useState<Server>('서버');
  const [charactes, setCharacters] = useState<string[]>([]);
  const [mainCharacter, setMainCharacter] = useState('');

  const inputCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(e.target.value);
  };

  const selectServer = (item: string) => {
    setServer((item as (typeof SERVERS)[number]) || '서버');
  };

  const getMainCharacter = async () => {
    const res = await getMyInfo();

    if (res.statusCode === 200) {
      setMainCharacter(res.data.mainCharacter);
    }
  };

  const getCharacters = async () => {
    const res = await getCharacterList();

    if (res.statusCode === 200) {
      setCharacters(res.data);
    }
  };

  const getAuth = async () => {
    const res = await registerCharacter(`${character}@${server}`);

    if (res.statusCode === 400) {
      return alert('이미 등록된 캐릭터거나 인시말이 일치하지 않습니다.');
    } else if (res.statusCode === 200) {
      alert('캐릭터가 등록되었습니다.');
      window.location.reload();
    }
  };

  const changeMainCharacter = async (_character: string) => {
    const res = await updateMainCharacter(_character);

    if (res.statusCode === 200) {
      return alert('대표 캐릭터가 변경되었습니다.');
    }
  };

  const removeCharacter = async (_character: string) => {
    const res = await deleteCharacter(_character);

    if (res.statusCode === 400) {
      return alert('대표 캐릭터는 삭제할 수 없습니다.');
    } else if (res.statusCode === 200) {
      return alert('캐릭터가 삭제되었습니다.');
    }
  };

  useLayoutEffect(() => {
    if (!isLoggedin) router.push('/');

    getMainCharacter();
    getCharacters();
  }, [isLoggedin, router]);

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
            <Select className="w-20" name={server} items={SERVERS} onSelect={selectServer} />
          </div>

          <button
            type="button"
            disabled={character === '' || server === '서버'}
            className="h-10 border rounded bg-red-500 text-white disabled:opacity-50"
            onClick={getAuth}
          >
            인증하기
          </button>
        </div>

        <div className="flex flex-col min-w-[340px] border rounded p-5 gap-5">
          <span className="text-lg font-medium text-center">캐릭터 목록</span>

          <div className="flex flex-col gap-2 max-h-[302px] overflow-y-scroll">
            {charactes.length === 0 && <span className="text-center text-gray-400">인증된 캐릭터가 없습니다.</span>}
            {charactes?.map((char: string) => (
              <div key={char} className="flex flex-row justify-between items-center">
                <span>
                  {char}
                  {mainCharacter === char ? ' [대표]' : ''}
                </span>
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
                    onClick={() => removeCharacter(char)}
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
