'use server';

import { cookies } from 'next/headers';

export const checkIsAuthed = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  return Boolean(token);
};

export const getAccessToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  return token?.value ?? '';
};

export const login = async (userId: string, password: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/users/signin`, {
      method: `POST`,
      headers: { 'Content-Type': `application/json` },
      body: JSON.stringify({ userId, password }),
    });

    if (!res.ok) {
      throw new Error('Failed to login.');
    }

    const data = await res.json();

    if (data.statusCode === 200) {
      const cookieStore = await cookies(); // ★ 변경점
      cookieStore.set('token', data.data, {
        maxAge: 60 * 60 * 3,
      });
    }

    return data.statusCode;
  } catch {
    throw new Error('Failed to login.');
  }
};

export const logout = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  if (token) {
    cookieStore.delete('token');
    return true;
  }

  return false;
};
