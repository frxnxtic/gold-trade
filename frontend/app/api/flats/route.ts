import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  // читаем из public/data
  const filePath = path.join(process.cwd(), 'public', 'data', 'flats.json');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const flats = JSON.parse(data);
    return NextResponse.json(flats);
  } catch (err) {
    console.error('Ошибка чтения flats.json:', err);
    return NextResponse.json({ error: 'Could not read flats.json' }, { status: 500 });
  }
}