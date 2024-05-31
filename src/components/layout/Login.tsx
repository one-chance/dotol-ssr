'use client';

import { useAtom } from 'jotai';
import { LoginModal } from '@/components/modal';
import { loginModalAtom } from '@/states';

export default function Login() {
  const [showLoginModal, setShowLoginModal] = useAtom(loginModalAtom);

  return showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />;
}
