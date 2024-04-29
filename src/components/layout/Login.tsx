'use client';

import { useAtom } from 'jotai';
import { LoginModal } from '@/components/modal';
import { showLoginAtom } from '@/states';

export default function Login() {
  const [showLoginModal, setShowLoginModal] = useAtom(showLoginAtom);

  return showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />;
}
