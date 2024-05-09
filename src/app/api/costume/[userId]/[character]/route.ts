import type { NextApiRequest, NextApiResponse } from 'next';
import { SKIN_LIST } from '@/contants';
import { isDuplicatedUserId } from '@/utils';

type Params = {
  userId: string;
  character: string;
};

export async function GET(req: NextApiRequest, { params }: { params: Params }) {
  const { searchParams } = new URL(req.url!);

  const authed = await isDuplicatedUserId(params.userId);
  if (!authed) return;

  const character = params.character?.split('@')[1] + '/' + params.character?.split('@')[0];

  const skin = `&sc=${searchParams.get('skin')!}`;

  const dir = searchParams.get('dir') ? `&changeDir=${searchParams.get('dir')}` : '';
  const naked = searchParams.get('naked') ? `&ed=${searchParams.get('naked')}` : '';
  const items = searchParams.get('items') ? `&previewEquip=${searchParams.get('items')?.replace(',', '|')}` : '';

  const url = `https://avatar.baram.nexon.com/Profile/RenderAvatar/${character}?is=1${skin}${dir}${naked}${items}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: { accept: 'image/png' },
  });

  if (!response.ok) {
    const res = await fetch('https://lwi.nexon.com/baram/home/cody/avatar_noimg.png', {
      method: 'GET',
      headers: { accept: 'image/png' },
    });

    const avatar = await res.blob();
    return new Response(avatar, {
      status: 200,
      headers: { 'Content-Type': 'image/png' },
    });
  }

  const avatar = await response.blob();

  return new Response(avatar, {
    status: 200,
    headers: { 'Content-Type': 'image/png' },
  });
}
