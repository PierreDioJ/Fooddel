import { getDishes, addDish } from './data';

export async function GET() {
  return Response.json(getDishes());
}

export async function POST(request) {
  const data = await request.json();
  if (!data.name || !data.price) {
    return new Response(JSON.stringify({ error: 'Name and price required' }), { status: 400 });
  }
  const newDish = addDish({ name: data.name, price: data.price });
  return Response.json(newDish, { status: 201 });
}
