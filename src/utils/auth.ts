import { login, logout } from '@/actions/auth.action';

export const signin = async (userId: string, password: string) => {
  const res = await login(userId, password);

  if (res.statusCode === 404) {
    return alert('등록되지 않은 계정입니다.');
  } else if (res.statusCode === 400) {
    return alert('비밀번호가 일치하지 않습니다.');
  } else if (res.statusCode === 200) {
    return window.location.reload();
  }
};

export const signout = async () => {
  const res = await logout();

  if (res) {
    window.location.reload();
  }
};
