// frontend/app/api/flats/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  const filePath = path.join(process.cwd(), '..', 'backend', 'flats.json');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const flats = JSON.parse(data);
    return NextResponse.json(flats);
  } catch {
    return NextResponse.json({ error: 'Could not read file' }, { status: 500 });
  }
}
