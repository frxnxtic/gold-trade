
import fs from 'fs';
import path from 'path';

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });
  }

  const baseDir = path.join(process.cwd(), 'public', 'images', 'flats');
  const result: string[] = [];

  try {
    for (let i = 1; i <= 10; i++) {
      const fileName = `${id}-${i}.jpg`;
      const filePath = path.join(baseDir, fileName);

      if (fs.existsSync(filePath)) {
        result.push(`/images/flats/${fileName}`);
      }
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
