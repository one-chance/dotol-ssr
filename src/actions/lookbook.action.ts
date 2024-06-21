'use server';

export const getAvatar = async (character: string) => {
  const [name, server] = character.split('@')!;
  const url = `https://avatar.baram.nexon.com/Profile/RenderAvatar/${server}/${name}?is=1`;

  const response = await fetch(url, {
    headers: {
      origin: 'https://baram.nexon.com',
      referer: 'https://baram.nexon.com/',
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': 'https://baram.nexon.com',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Content-Type': 'image/png',
      Date: new Date().toUTCString(),
      'Request-Context': 'appId=cid-v1:602befdf-c942-47ae-8f9e-a1749f6ee32f',
    },
  });
  const buffer = await response.arrayBuffer();

  const base64Image = Buffer.from(buffer).toString('base64');
  const mimeType = response.headers.get('content-type');

  return `data:${mimeType};base64,${base64Image}`;
};
