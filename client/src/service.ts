const API_URL = "http://localhost:3000"

export async function saveUser(body) {
  const response = await fetch(`${API_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error('Failed to post');
  }
  await response.json();
  return
}

export async function authUser(body) {
  const response = await fetch(`${API_URL}/user/${username}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error('Failed to post');
  }
  await response.json();
  return
}