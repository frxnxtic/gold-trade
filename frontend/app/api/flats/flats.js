// backend/api/flats.js
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'backend', 'flats.json');

  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const flats = JSON.parse(jsonData);
    res.status(200).json(flats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read flats.json' });
  }
}
