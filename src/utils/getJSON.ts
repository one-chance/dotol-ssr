export const getJSON = async (path: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ASSET}/data/${path}.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
