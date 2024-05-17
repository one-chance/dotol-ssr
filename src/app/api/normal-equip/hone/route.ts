import { NextRequest, NextResponse } from 'next/server';
import { supabaseClient } from '@/utils/supabase';

async function getHoneData(origin: string): Promise<NextResponse> {
  const { data, error } = await supabaseClient
    .from('normal-equip-hone')
    .select('equip')
    .eq('origin', origin)
    .order('index', { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500, statusText: 'Internal Server Error' });
  }

  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://dotols.com',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

async function getHoneDataByEquip(origin: string, equip: string): Promise<NextResponse> {
  const { data, error } = await supabaseClient
    .from('normal-equip-hone')
    .select('*')
    .eq('origin', origin)
    .eq('equip', equip)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500, statusText: 'Internal Server Error' });
  }

  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://dotols.com',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const origin = searchParams.get('origin');
  const equip = searchParams.get('equip');

  if (!origin) {
    return NextResponse.json('Invalid request', { status: 400, statusText: 'Bad Request' });
  }

  if (equip) {
    return await getHoneDataByEquip(origin, equip);
  }

  return await getHoneData(origin);
}
