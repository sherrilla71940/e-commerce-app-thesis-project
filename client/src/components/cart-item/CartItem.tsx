import styles from './CartItem.module.css'
import { CartItemType } from '../../models/models'
import { useCartSlice } from '../../zustand/ShoppingCartSlice'

export default function CartItem ({cartItem}: {cartItem: CartItemType}) {
  const increaseQuantity = useCartSlice((state) => state.increaseQuantity)
  const decreaseQuantity = useCartSlice((state) => state.decreaseQuantity)
  const removeFromCart = useCartSlice((state) => state.removeFromCart)

  return (
    <div className={styles.container}>
      <div className={styles.itemInfo}>
        <div className={styles.img}></div>

        <div className={styles.left}>
          <p className={styles.name}>{cartItem.name}</p>
          <p className={styles.size}>{cartItem.size}</p>
          <p className={styles.price}>{cartItem.price}</p>
        </div>

        <div className={styles.right}>
          <p
            className={styles.decrease}
            onClick={() => decreaseQuantity(cartItem)}
          >-</p>
          <p className={styles.size}>{cartItem.quantity}</p>
          <p
            className={styles.increase}
            onClick={() => increaseQuantity(cartItem)
            }
          >+</p>
        </div>

        <p
          className={styles.delete}
          onClick={() => removeFromCart(cartItem.id)}
        >+</p>

      </div>
    </div>
  )
}
