import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/app/api/swagger.json');
  const file = await fs.readFile(filePath, 'utf-8');
  return new Response(file, {
    headers: { 'Content-Type': 'application/json' },
  });
}
