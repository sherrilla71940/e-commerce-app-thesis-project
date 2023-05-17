const API_URL = "http://localhost:3000";
///// USERS:
export async function saveUser(body: any) {
  const response = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error("Failed to post");
  }
  await response.json();
  return;
}

////// PRODUCTS:
export async function postProduct(body: any) {
  const response = await fetch(`${API_URL}/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error("Failed to post");
  }
  const json = await response.json();
  console.log(json);
  return;
}

///// Sellers Products
export async function getSellerProducts(id: string) {
  // console.log(id);
  const response = await fetch(`${API_URL}/sellers/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  // console.log("response.status:", response.status, " response.ok", response.ok);
  if (response.ok && response.status === 200) {
    const json = await response.json();
    return json;
  }
}
