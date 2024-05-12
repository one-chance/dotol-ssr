import { NextResponse } from 'next/server';
import { SKIN_LIST } from '@/contants';
import { Skin } from '@/types';

type Params = {
  character: string;
};

const whiteList = ['http://localhost:5173', 'https://dotols.com'];

export async function GET(req: Request, { params }: { params: Params }) {
  const { character } = params;
  const { searchParams } = new URL(req.url!);
  // const referer = req.headers.get('referer') || '';

  // try {
  //   if (!referer) {
  //     throw new Error('Forbidden');
  //   }

  //   const refererDomain = new URL(referer).origin;

  //   if (!whiteList.includes(refererDomain)) {
  //     throw new Error('Forbidden');
  //   }
  // } catch {
  //   return new Response('403: Forbidden', { status: 403, statusText: 'Forbidden' });
  // }

  const [name, server] = character.split('@');
  const skinParam = SKIN_LIST[searchParams.get('skin')! as Skin];

  const urlParams = new URLSearchParams();
  urlParams.set('is', '1');
  urlParams.set('changeDir', searchParams.get('dir') ?? '2');
  urlParams.set('ed', searchParams.get('naked') ?? 'n');
  urlParams.set('sc', skinParam);

  if (searchParams.get('items')) {
    urlParams.set('previewEquip', searchParams.get('items')!.replaceAll(',', '|'));
  }

  const url = `https://avatar.baram.nexon.com/Profile/RenderAvatar/${server}/${name}?${urlParams.toString()}`;

  const res = await fetch(url, {
    headers: {
      method: 'GET',
      'Content-Type': 'image/png',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      // referer: 'https://baram.nexon.com',
    },
  });

  const blob = await res.blob();

  return new Response(blob, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
    },
  });

  // return NextResponse.redirect(url, {
  //   status: 302,
  // });
}
