'use server';

export const getAvatar = async (character: string) => {
  const [name, server] = character.split('@')!;
  const url = `https://avatar.baram.nexon.com/Profile/RenderAvatar/${server}/${name}?is=1`;

  const response = await fetch(url, {
    headers: {
      referer: 'https://baram.nexon.com',
      origin: 'https://baram.nexon.com',
      'Acccess-Control-Allow-Headers': 'Origin, Content-Type, X-Requested-With',
      'Access-Control-Allow-Origin': 'https://baram.nexon.com',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS, POST, PUT',
      'Content-Type': 'image/png',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
  const buffer = await response.arrayBuffer();

  const base64Image = Buffer.from(buffer).toString('base64');
  const mimeType = response.headers.get('content-type');

  return `data:${mimeType};base64,${base64Image}`;
};
