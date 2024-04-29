'use client';

import { isloggedinAtom } from '@/states';
import { getMyInfo } from '@/utils';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

const TITLES = ['userId', 'email', 'grade', 'point', 'mainCharacter', 'openTalk'] as const;

const TEST = {
  userId: '아이디',
  email: '이메일',
  grade: '도톨 레벨',
  point: '도톨 포인트',
  mainCharacter: '대표 캐릭터',
  openTalk: '오픈 카톡',
};

type IUser = {
  index: number;
  userId: string;
  password: string;
  email: string;
  grade: number;
  point: number;
  mainCharacter: string;
  openTalk: string;
  createdAt: string;
  updatedAt: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const isLoggedin = useAtomValue(isloggedinAtom);
  const [userInfo, setUserInfo] = useState<IUser>({
    index: 1,
    userId: '',
    password: '',
    email: '',
    grade: 1,
    point: 0,
    mainCharacter: '',
    openTalk: '',
    createdAt: '',
    updatedAt: '',
  } as IUser);

  const getInfo = async () => {
    const res = await getMyInfo();

    if (res.statusCode === 200) {
      setUserInfo(res.data);
    }
  };

  useLayoutEffect(() => {
    if (!isLoggedin) router.push('/');

    getInfo();
  }, [isLoggedin, router]);

  return (
    <div className="flex flex-col grow mx-auto px-2.5 py-5 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-semibold">프로필</span>

      <div className="flex flex-col gap-2.5">
        {TITLES.map((title: string, index: number) => (
          <div key={title} className="flex flex-row items-center h-9">
            <span className="min-w-20 sm:min-w-28 text-sm sm:text-base font-medium">
              {TEST[title as keyof typeof TEST]}
            </span>
            <span className="flex-1 text-sm sm:text-base">{userInfo[title as keyof typeof userInfo]}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-2.5">
        <Link href="/user/withdrawl" className="w-80 leading-[40px] bg-red-500 text-white rounded text-center">
          탈퇴하기
        </Link>
        {/* <button type="button" className="text-center rounded bg-blue-500 text-white w-48 h-10">
          수정하기
        </button> */}
      </div>
    </div>
  );
}
