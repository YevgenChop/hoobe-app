import { NextResponse } from 'next/server';
import data from '@/app/mocks/pageData.json';

export async function GET(request: Request) {
  return NextResponse.json({ data })
}