import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const response = await fetch('https://asset.dotols.com/data/luxury-costume.json');

  if (!response.ok) {
    return NextResponse.error();
  }

  return NextResponse.json(await response.json());
}
