import { NextRequest, NextResponse } from 'next/server';
import { supabaseClient } from '@/utils/supabase';

async function getReforgeData(origin: string): Promise<NextResponse> {
  const { data, error } = await supabaseClient
    .from('normal-equip-reforge')
    .select('*')
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

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const origin = searchParams.get('origin');

  if (!origin) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400, statusText: 'Bad Request' });
  }

  return await getReforgeData(origin);
}
