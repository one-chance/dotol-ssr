export const getJSON = async (path: string) => {
  const response = await fetch(
    `https://jpdkgscyrlhfabjpohmv.supabase.co/storage/v1/object/public/asset/data/${path}.json`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
