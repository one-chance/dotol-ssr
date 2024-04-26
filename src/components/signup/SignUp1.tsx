'use client';

import { Paragraph } from '@/components';
import TERMS_OF_SERVICE from '@/contants/terms-of-service.json';
import PRIVAICY_POLICY from '@/contants/privacy-policy.json';
import { useState } from 'react';

type SignUpProps = {
  setPhase: (phase: 1 | 2 | 3 | 4) => void;
};

export default function SignUp1({ setPhase }: SignUpProps) {
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [agreePolicy, setAgreePolicy] = useState<boolean>(false);

  const nextPhase = () => {
    setPhase(2);
  };

  return (
    <>
      <div className="flex flex-col border rounded p-2.5 sm:p-10 gap-10">
        <span className="text-xl sm:text-2xl font-semibold text-center">약관 동의</span>

        <div className="flex flex-col gap-2">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => setAgreeTerms(!agreeTerms)}
          >
            <span className="font-semibold select-none">서비스 이용 약관에 동의합니다.</span>

            <input
              type="checkbox"
              checked={agreeTerms}
              className="border rounded w-5 h-5 outline-none"
              onChange={() => setAgreeTerms(!agreeTerms)}
              style={{ accentColor: '#6877FF' }}
            />
          </div>

          <div className="bg-[#E9EBEE] p-2.5 max-h-40 sm:max-h-56 overflow-y-scroll">
            {TERMS_OF_SERVICE.map((paragraph: { title: string; content: string }) => (
              <Paragraph key={paragraph.title} title={paragraph.title} content={paragraph.content} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => setAgreePolicy(!agreePolicy)}
          >
            <span className="font-semibold select-none">개인정보 처리방침에 동의합니다.</span>

            <input
              type="checkbox"
              checked={agreePolicy}
              className="border rounded w-5 h-5 outline-none"
              onChange={() => setAgreePolicy(!agreePolicy)}
              style={{ accentColor: '#6877FF' }}
            />
          </div>

          <div className="bg-[#E9EBEE] p-2.5 max-h-40 sm:max-h-56 overflow-y-scroll">
            {PRIVAICY_POLICY.map((paragraph: { title: string; content: string }) => (
              <Paragraph key={paragraph.title} title={paragraph.title} content={paragraph.content} />
            ))}
          </div>
        </div>

        <button
          type="button"
          disabled={!agreeTerms || !agreePolicy}
          className="h-10 rounded bg-[#6877FF] text-white disabled:opacity-50"
          onClick={nextPhase}
        >
          다음
        </button>
      </div>
    </>
  );
}
