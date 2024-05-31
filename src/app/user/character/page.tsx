import { CharacterAuth, CharacterList } from '@/components/character';
import { getCharacterList } from '@/actions/character.action';

export default async function CharacterPage() {
  const characters = await getCharacterList();

  return (
    <div className="flex flex-col grow mx-auto px-2.5 py-5 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-semibold">캐릭터 관리</span>

      <div className="flex flex-col sm:flex-row gap-5">
        <CharacterAuth />
        {/* <div className="flex flex-col min-w-[340px] border rounded p-5 gap-5">
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
        </div> */}

        <CharacterList list={characters?.data} />
        {/* <div className="flex flex-col min-w-[340px] border rounded p-5 gap-5">
          <span className="text-lg font-medium text-center">캐릭터 목록</span>

          <div className="flex flex-col gap-2 max-h-[302px] overflow-y-scroll">
            {characters.length === 0 && <span className="text-center text-gray-400">인증된 캐릭터가 없습니다.</span>}
            {characters?.map((char: string) => (
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
        </div> */}
      </div>
    </div>
  );
}
