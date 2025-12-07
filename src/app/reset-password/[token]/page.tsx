'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { resetPassword } from '@/actions/user.action';

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams<{ token: string }>();
  const [newPassword, setNewPassword] = useState('');

  const inputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const changePassword = async () => {
    const res = await resetPassword(params.token, newPassword);

    if (res.statusCode === 404) {
      return alert('존재하지 않는 계정입니다.');
    } else if (res.statusCode === 200) {
      alert('비밀번호가 변경되었습니다.');
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-5 py-10 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-bold">비밀번호 변경</span>

      <input
        type="text"
        autoComplete="new-password"
        placeholder="새로운 비밀번호"
        value={newPassword || ''}
        onChange={inputNewPassword}
        className="border rounded px-2 w-full h-10 outline-none"
      />

      <button
        disabled={newPassword.length < 8}
        type="button"
        className="h-10 rounded bg-red-500 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={changePassword}
      >
        변경하기
      </button>
    </div>
  );
}
