import styles from './ShoppingCart.module.css'
import {checkout} from './checkoutFunction'
import { useCartSlice } from '../../zustand/ShoppingCartSlice'
import { CartItemType } from '../../models/models'
import CartItem from '../cart-item/CartItem'
import { getShoppingCartProducts } from '../../services/shopping-cart-service'
import { useEffect } from 'react'


export default function ShoppingCart() {
  const cartItems = useCartSlice((state) => state.cartItems)
  const isOpen = useCartSlice((state) => state.isOpen)
  const addItem = useCartSlice((state) => state.addItem)
  const closeCart = useCartSlice((state) => state.closeCart)

  useEffect(() => {

    const fetcAllShoppingCartProducts = async () => {

      try {
        const shoppingCartProducts = await getShoppingCartProducts({userId: "1"})
        // console.log('shoppingCartProducts: ', shoppingCartProducts)

        shoppingCartProducts.forEach((product: CartItemType) => {
          addItem(product)
        })
      } catch(error) {
        console.log(error)
      }
    }

    fetcAllShoppingCartProducts()

  }, [])

  return (
    <>
      {isOpen &&
        <div className={styles.container}>

          <div className={styles.cartHeader}>
            <h1>Cart</h1>
            <h1
              className={styles.closeCart}
              onClick={() => closeCart()}
            >+</h1>
          </div>

          <ul>
            {cartItems.map((cartItem: CartItemType) => (
              <li key={cartItem.id}>
                <CartItem cartItem={cartItem} />
              </li>
            ))}
          </ul>

          <div className={styles.cartFooter}>
            <div className={styles.total}>
              <h3>Total</h3>
              {/* <h3
                className={styles.totalValue}
              >
                {cartItems.reduce((total, cartItem) => {
                  console.log(cartItem)
                  return total + (cartItem.price * cartItem.quantity)
                }, 0)}
              </h3> */}
            </div>

            <button className={styles.checkout} onClick={checkout}>
              Checkout
            </button>
          </div>

        </div>
      }
    </>
  )
}
