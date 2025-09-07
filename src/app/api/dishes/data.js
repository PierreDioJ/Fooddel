let dishes = [
  { id: 1, name: 'Пицца Маргарита', price: 500 },
  { id: 2, name: 'Суши сет', price: 1200 },
  { id: 3, name: 'Бургер классический', price: 450 },
];

export function getDishes() {
  return dishes;
}

export function getDishById(id) {
  return dishes.find((dish) => dish.id === id);
}

export function addDish(dish) {
  const newDish = { ...dish, id: Date.now() };
  dishes.push(newDish);
  return newDish;
}

export function updateDish(id, data) {
  const idx = dishes.findIndex((dish) => dish.id === id);
  if (idx === -1) return null;
  dishes[idx] = { ...dishes[idx], ...data };
  return dishes[idx];
}

export function deleteDish(id) {
  const idx = dishes.findIndex((dish) => dish.id === id);
  if (idx === -1) return false;
  dishes.splice(idx, 1);
  return true;
}