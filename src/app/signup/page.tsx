'use client';

import { useState } from 'react';
import { SignUp1, SignUp2, SignUp3, SignUp4 } from '@/components/signup';

type Phase = 1 | 2 | 3 | 4;

export default function SignUpPage() {
  const [phase, setPhase] = useState<Phase>(1);
  const [email, setEmail] = useState<string>('');

  const movePhase = (_phase: Phase, _email?: string) => {
    if (_email) setEmail(_email);
    setPhase(_phase);
  };

  const phaseContent = {
    1: <SignUp1 setPhase={movePhase} />,
    2: <SignUp2 setPhase={movePhase} />,
    3: <SignUp3 email={email} setPhase={movePhase} />,
    4: <SignUp4 />,
  };

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      {phaseContent[phase]}
    </div>
  );
}
