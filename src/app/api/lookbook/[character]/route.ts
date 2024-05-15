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

  const res = await fetch(url, {
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

  const imageData = await res.arrayBuffer();

  return new Response(imageData, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
    },
  });
}
