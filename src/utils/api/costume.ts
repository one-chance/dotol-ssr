import { SKIN_LIST } from '@/contants';
import { getAccessToken } from '../jwtUtils';
import { Skin } from '@/types';

export const getClothesList = async (keyword: string, part: string, page: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/costumes/list?keyword=${keyword}&part=${part}&page=${page}`,
    {
      method: `GET`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  );

  const data = await res.json();
  return data;
};

export const getAvatar = async (character: string, dir: string, skin: string, naked: string, items: string) => {
  const skinParam = SKIN_LIST[skin as Skin] ?? `-1`;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/costumes/avatar/${character}?dir=${dir}&skin=${skinParam}&naked=${naked}&items=${items}`,
    {
      method: `GET`,
      headers: {
        'Content-Type': `image/png`,
        Authorization: `Bearer ${getAccessToken()}`,
        referer: `https://dotols.com`,
      },
    },
  );

  const blob = await res.blob();

  return URL.createObjectURL(blob);
};
