import { NextRequest, NextResponse } from 'next/server';
import { supabaseClient } from '@/utils/supabase';

type As = 'make' | 'reforge' | 'hone';

async function getOriginList(as: As) {
  const { data, error } = await supabaseClient
    .from('normal-equip')
    .select('*')
    .eq(as, true)
    .order('index', { ascending: true });

  if (error) {
    return NextResponse.json(error.message, { status: 500, statusText: 'Internal Server Error' });
  }

  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://dotols.com',
      'Access-Control-Allow-Methods': 'GET',
      'Acccess-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const as = searchParams.get('as');

  if (!as) {
    return NextResponse.json('Invalid request', { status: 400, statusText: 'Bad Request' });
  }

  return await getOriginList(as as As);
}
