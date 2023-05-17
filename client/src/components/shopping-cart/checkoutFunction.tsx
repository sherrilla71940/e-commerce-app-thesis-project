
export async function checkout() {

  // get the url from the backend
  // use stripe instance to redirect to the url

  console.log('ok')

  try {
    const response = await fetch('http://localhost:3000/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
    // body: JSON.stringify(body)
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