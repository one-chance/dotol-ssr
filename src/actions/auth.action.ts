'use server';

import { cookies } from 'next/headers';

export const checkIsAuthed = async () => {
  const token = cookies().get('token');

  return Boolean(token);
};

export const getAccessToken = async () => {
  const token = cookies().get('token');

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

    cookies().set('token', data.data, {
      maxAge: 60 * 60 * 3,
    });

    return data;
  } catch {
    throw new Error('Failed to login.');
  }
};

export const logout = async () => {
  const token = cookies().get('token');

  if (token) {
    cookies().delete('token');
    return true;
  }

  return false;
};
