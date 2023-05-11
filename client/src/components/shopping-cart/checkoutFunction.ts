import useCartSlice from './ShoppingCart'

export async function checkout() {

  const cartItems = useCartSlice((state) => state.cartItems);
  
  console.log('ok')
  return
}