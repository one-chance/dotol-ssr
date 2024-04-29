'use client';

import { useAtom } from 'jotai';
import { showLoginAtom } from '@/states';
import { useRouter } from 'next/navigation';

export default function SignUp4() {
  const router = useRouter();
  const [, showLoginModal] = useAtom(showLoginAtom);

  const test = () => {
    router.push('/');
    showLoginModal(true);
  };

  return (
    <>
      <div className="flex flex-col border rounded p-2.5 sm:p-10 gap-10">
        <span className="text-xl sm:text-2xl font-semibold text-center">회원가입 완료</span>

        <span className="text-sm sm:text-base">
          로그인을 하고 [내 정보 - 캐릭터 관리]로 이동하여 캐릭터를 등록하세요.
          <br />
          캐릭터 룩북과 게시판 메뉴를 이용하려면 대표 캐릭터가 필요합니다.
        </span>

        <button type="button" className="h-10 rounded bg-[#6877FF] text-white font-medium" onClick={test}>
          메인으로
        </button>
      </div>
    </>
  );
}
