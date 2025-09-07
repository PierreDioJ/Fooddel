import { getDishById, updateDish, deleteDish } from '../data';

export async function GET(request, { params }) {
  const id = Number(params.id);
  const dish = getDishById(id);
  if (!dish) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }
  return Response.json(dish);
}

export async function PUT(request, { params }) {
  const id = Number(params.id);
  const data = await request.json();
  const updated = updateDish(id, data);
  if (!updated) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }
  return Response.json(updated);
}

export async function DELETE(request, { params }) {
  const id = Number(params.id);
  const ok = deleteDish(id);
  if (!ok) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }
  return new Response(null, { status: 204 });
}
