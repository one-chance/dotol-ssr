import { login, logout } from '@/actions/auth.action';

export const signin = async (userId: string, password: string) => {
  const loginStatus = await login(userId, password);

  if (loginStatus === 200) {
    return window.location.reload();
  }

  return alert('비밀번호가 일치하지 않습니다.');
};

export const signout = async () => {
  const res = await logout();

  if (res) {
    window.location.reload();
  }
};
