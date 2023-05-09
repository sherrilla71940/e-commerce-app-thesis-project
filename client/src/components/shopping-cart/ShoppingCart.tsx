import styles from './ShoppingCart.module.css'

import { useCartSlice } from '../../zustand/ShoppingCartStore'
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

        </div>
      }
    </>
  )
}
