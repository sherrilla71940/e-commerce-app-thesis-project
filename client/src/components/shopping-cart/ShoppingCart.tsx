import styles from './ShoppingCart.module.css'

import { useCartSlice } from '../../zustand/ShoppingCartSlice'
import { CartItemType } from '../../models/models'
import CartItem from '../cart-item/CartItem'

export default function ShoppingCart() {
  const cartItems = useCartSlice((state) => state.cartItems)
  const isOpen = useCartSlice((state) => state.isOpen)
  const closeCart = useCartSlice((state) => state.closeCart)

  return (
    <>
      {isOpen &&
        <div className={styles.container}>

          <div className={styles.cartHeader}>
            <h1>Cart</h1>
            <h1
              className={styles.closeCart}
              onClick={() => { closeCart() }}
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
              <h3
                className={styles.totalValue}
              >
                {cartItems.reduce((total, cartItem) => {
                  return total + (cartItem.price * cartItem.quantity)
                }, 0)}
              </h3>
            </div>

            <div className={styles.checkout}>
              <h3>Checkout</h3>
            </div>
          </div>

        </div>
      }
    </>
  )
}
