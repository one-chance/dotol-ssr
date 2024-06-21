import { NextRequest } from 'next/server';
import { SKIN_LIST } from '@/contants';
import { Skin } from '@/types';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const character = decodeURI(request.nextUrl.pathname.replace('/api/lookbook/', ''));
  const [name, server] = character.split('@')!;

  const urlParams = new URLSearchParams({ is: '1' });
  if (searchParams.get('dir')) {
    urlParams.set('changeDir', searchParams.get('dir')!);
  }
  if (searchParams.get('naked')) {
    urlParams.set('ed', searchParams.get('naked')!);
  }
  if (searchParams.get('skin')) {
    const skinParam = SKIN_LIST[searchParams.get('skin') as Skin] ?? '-1';
    urlParams.set('sc', skinParam);
  }
  if (searchParams.get('items')) {
    urlParams.set('previewEquip', searchParams.get('items')!.replaceAll(',', '|'));
  }

  const url = `https://avatar.baram.nexon.com/Profile/RenderAvatar/${server}/${name}?${urlParams.toString()}`;

  const res = await fetch(url, {
    headers: {
      referer: 'https://baram.nexon.com',
      origin: 'https://baram.nexon.com',
      'Acccess-Control-Allow-Headers': 'Origin, Content-Type, X-Requested-With',
      'Access-Control-Allow-Origin': 'https://baram.nexon.com',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS, POST, PUT',
      'Content-Type': 'image/png',
      'X-Requested-With': 'XMLHttpRequest',
      'Request-Context': 'appId=cid-v1:602befdf-c942-47ae-8f9e-a1749f6ee32f',
      'Access-Control-Request-Method': 'GET',
      'Access-Control-Request-Headers': 'X-Requested-With, Content-Type, Origin, Accept',
    },
  });

  const imageData = await res.arrayBuffer();

  return new Response(imageData, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://dotols.com',
      'Access-Control-Allow-Methods': 'GET',
      'Content-Type': 'image/png',
    },
  });
}
