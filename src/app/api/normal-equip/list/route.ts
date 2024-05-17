import { NextRequest, NextResponse } from 'next/server';
import { supabaseClient } from '@/utils/supabase';

type As = 'make' | 'reforge' | 'hone';

async function getEquipList(subject: string, part: string, as: As): Promise<NextResponse> {
  let query = supabaseClient.from('normal-equip').select('*').eq('subject', subject).eq(as, true);

  if (part !== '부위') query = query.eq('part', part);

  query = query.order('index', { ascending: true });

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500, statusText: 'Internal Server Error' });
  }

  return NextResponse.json(
    data.map(item => item.name),
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://dotols.com',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    },
  );
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const subject = searchParams.get('subject');
  const part = searchParams.get('part');
  const as = searchParams.get('as');

  if (!subject || !part || !as) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400, statusText: 'Bad Request' });
  }

  return await getEquipList(subject, part, as as As);
}
