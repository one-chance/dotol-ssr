import { SKIN_LIST } from '@/contants';
import { Skin } from '@/types';

type Params = {
  character: string;
};

const whiteList = ['http://localhost:5173', 'https://dotols.com'];

export async function GET(req: Request, { params }: { params: Params }) {
  const { character } = params;
  const { searchParams } = new URL(req.url!);
  const referer = req.headers.get('referer') || '';

  try {
    if (!referer) {
      throw new Error('Forbidden');
    }

    const refererDomain = new URL(referer).origin;

    if (!whiteList.includes(refererDomain)) {
      throw new Error('Forbidden');
    }
  } catch {
    return new Response('Forbidden', { status: 403, statusText: 'Forbidden' });
  }

  const [name, server] = character.split('@');
  const skinParam = SKIN_LIST[searchParams.get('skin') as Skin] ?? '-1';
  const equipParam = searchParams.get('items') ?? '';

  const urlParams = new URLSearchParams();
  urlParams.set('is', '1');
  urlParams.set('changeDir', searchParams.get('dir') ?? '2');
  urlParams.set('ed', searchParams.get('naked') ?? 'n');
  urlParams.set('sc', skinParam);

  if (equipParam !== '') {
    urlParams.set('previewEquip', equipParam.replaceAll(',', '|'));
  }

  const url = `https://avatar.baram.nexon.com/Profile/RenderAvatar/${server}/${name}?${urlParams.toString()}`;

  try {
    const res = await fetch(url);
    const imageData = await res.arrayBuffer();

    return new Response(imageData, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
      },
    });

    // const blob = await res.blob();

    // return new Response(blob, {
    //   status: 200,
    //   headers: {
    //     'Content-Type': 'image/png',
    //   },
    // });
  } catch {
    return new Response('Not Found', { status: 404, statusText: 'Not Found' });
  }
}
