'use client';

import { useEffect, useState } from 'react';
import { isDuplicatedEmail, sendOTPCode, verifyOTPCode } from '@/actions/user.action';

type SignUpProps = {
  setPhase: (phase: 1 | 2 | 3 | 4, email?: string) => void;
};

export default function SignUp2({ setPhase }: SignUpProps) {
  const [email, setEmail] = useState<string>('');
  const [otp, setOTP] = useState<string>('');
  const [timer, setTimer] = useState(300);

  const [isSentOTP, setIsSentOTP] = useState<boolean>(false);

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 6) return;

    const value = e.target.value.replace(/[^0-9]/g, '');
    setOTP(value);
  };

  const sendOTP = async () => {
    const isUniqueEmail = await isDuplicatedEmail(email);
    if (isUniqueEmail.statusCode === 400) {
      return alert('이미 사용중인 이메일입니다.');
    }

    const sendOTP = await sendOTPCode(email);

    if (sendOTP.statusCode === 400) {
      return alert('이메일 전송에 실패했습니다.');
    } else if (sendOTP.statusCode === 200) {
      setIsSentOTP(true);
    }
  };

  const verifyOTP = async () => {
    const isVerifiedOTP = await verifyOTPCode(email, otp);

    if (isVerifiedOTP.statusCode === 400) {
      return alert('OTP가 일치하지 않습니다.');
    } else if (isVerifiedOTP.statusCode === 404) {
      return alert('OTP가 만료되었습니다.');
    } else if (isVerifiedOTP.statusCode === 200) {
      setPhase(3, email);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setTimer(300);
      setIsSentOTP(false);
    }

    if (isSentOTP && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isSentOTP, timer]);

  return (
    <>
      <div className="flex flex-col border rounded p-2.5 sm:p-10 gap-10">
        <span className="text-xl sm:text-2xl font-semibold text-center">이메일 인증</span>

        <div className="flex flex-col gap-5">
          <input className="border rounded px-2 h-10" placeholder="이메일" onChange={inputEmail} />

          <button
            type="button"
            disabled={email === ''}
            className="h-10 rounded bg-[#6877FF] text-white disabled:opacity-50"
            onClick={sendOTP}
          >
            OTP 전송하기
          </button>
        </div>

        {isSentOTP && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-2 items-center border rounded px-2">
              <input className="flex-1 rounded h-10 outline-none" placeholder="OTP" onChange={inputOTP} />
              <span className="text-red-400 min-w-10">{timer}초</span>
            </div>

            <button
              type="button"
              disabled={otp.length !== 6}
              className="h-10 rounded bg-[#6877FF] text-white disabled:opacity-50"
              onClick={verifyOTP}
            >
              OTP 인증하기
            </button>
          </div>
        )}
      </div>
    </>
  );
}
