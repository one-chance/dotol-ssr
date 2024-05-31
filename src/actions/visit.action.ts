'use server';

export const checkNewVisitor = async (ip: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/visit/new`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify({ ip }),
  });

  return await res.json();
};

export const getTodayVisitor = async (): Promise<number> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/visit/today`);

  return await res.json();
};

export const getTotalVisitor = async (): Promise<number> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/visit/total`);

  return await res.json();
};
