
export async function checkout(price: number) {

  // this function should be in the service

  console.log('ok')

  try {
    const response = await fetch('http://localhost:3000/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({price})
  })
  console.log(response)
  if (response.ok) {
    const data = await response.json()
    // console.log(data)
    return data;
  } else {
    throw new Error('Failed to checkout');
  }

  } catch (error) {
    console.log(error)
  }
}