export async function addToShoppingCart(body: any) {
  try {
    const response = await fetch("http://localhost:3000/shoppingcart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      return data;
    } else {
      throw new Error("Failed to add product to shopping cart");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProductFromShoppingCart(body: any) {
  try {
    const response = await fetch("http://localhost:3000/shoppingcart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      return data;
    } else {
      throw new Error("Failed to delete product from shopping cart");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getShoppingCartProducts(uid: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/shoppingcartproducts/${uid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(body)
      }
    );
    // console.log('RESPONSE: ', response)
    if (response.ok) {
      const data = await response.json();
      // console.log('DATA: ', data)
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getShoppingCartProduct(body: any) {
  try {
    const response = await fetch("http://localhost:3000/shoppingcartproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    // console.log('RESPONSE: ', response)
    if (response.ok) {
      const data = await response.json();
      // console.log('DATA: ', data)
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
