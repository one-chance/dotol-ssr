import { getAccessToken } from '../jwtUtils';

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
