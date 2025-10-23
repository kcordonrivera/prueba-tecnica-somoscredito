const API_URL = 'http://localhost:4000/api';

export async function getSucursales() {
  const res = await fetch(`${API_URL}/sucursales`);
  return res.json();
}

export async function createSucursal(data) {
  const res = await fetch(`${API_URL}/sucursales`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function updateSucursal(id, data) {
  const res = await fetch(`${API_URL}/sucursales/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteSucursal(id) {
  const res = await fetch(`${API_URL}/sucursales/${id}`, {
    method: 'DELETE'
  });
  return res.json();
}
