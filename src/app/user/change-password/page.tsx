'use client';

import { isloggedinAtom } from '@/states';
import { updatePassword } from '@/utils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

export default function ChangePasswordPage() {
  const router = useRouter();
  const isLoggedin = useAtomValue(isloggedinAtom);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const inputOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const inputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const changePassword = async () => {
    const res = await updatePassword(oldPassword, newPassword);

    if (res.statusCode === 400) {
      return alert('비밀번호가 일치하지 않습니다.');
    } else if (res.statusCode === 200) {
      return alert('비밀번호가 변경되었습니다.');
    }
  };

  useLayoutEffect(() => {
    if (!isLoggedin) router.push('/');
  }, [isLoggedin, router]);

  return (
    <div className="flex flex-col grow mx-auto px-2.5 py-5 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-semibold">비밀번호 변경</span>

      <div className="flex flex-col gap-5">
        <input
          type="password"
          autoComplete="password"
          className="w-80 h-10 px-2 border rounded outline-none"
          value={oldPassword || ''}
          placeholder="기존 비밀번호"
          onChange={inputOldPassword}
        />

        <input
          type="password"
          autoComplete="new-password"
          className="w-80 h-10 px-2 border rounded outline-none"
          value={newPassword || ''}
          placeholder="새로운 비밀번호"
          onChange={inputNewPassword}
        />

        <button type="button" className="w-80 h-10 rounded outline-none bg-red-500 text-white" onClick={changePassword}>
          변경하기
        </button>
      </div>
    </div>
  );
}
