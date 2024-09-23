'use server';

import { parse } from 'node-html-parser';
import { getAccessToken } from './auth.action';

export const getCharacterList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/characters`, {
    method: `GET`,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${await getAccessToken()}`,
    },
  });

  return await res.json();
};

export const getGreetingMessage = async (character: string) => {
  const url = `https://baram.nexon.com/Profile/Info?character=${character}`;
  try {
    const response = await fetch(url);
    const html = await response.text();
    const root = parse(html);

    const textareaContent = root.querySelector('textarea')?.textContent;

    return textareaContent;
  } catch (err) {
    return '';
  }
};

export const registerCharacter = async (character: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/characters`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${await getAccessToken()}`,
    },
    body: JSON.stringify({
      character,
    }),
  });

  const data = await res.json();
  return data;
};

export const deleteCharacter = async (character: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/characters/${character}`, {
    method: `DELETE`,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${await getAccessToken()}`,
    },
  });

  const data = await res.json();
  return data;
};

export const updateMainCharacter = async (character: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/characters/main`, {
    method: `PATCH`,
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${await getAccessToken()}`,
    },
    body: JSON.stringify({
      character,
    }),
  });

  const data = await res.json();
  return data;
};
