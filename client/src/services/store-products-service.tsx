export async function getStoreProducts() {
  try {
    const response = await fetch('http://localhost:3000/allproducts', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    // console.log('RESPONSE: ', response)
    if (response.ok) {
      const data = await response.json()
      // console.log('DATA: ', data)
      return data;
    }

  } catch (error) {
    console.error(error)
  }
}