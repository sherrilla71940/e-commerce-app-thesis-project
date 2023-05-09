import styles from './CartItem.module.css'
import { CartItemType } from '../../models/models'
import { useCartSlice } from '../../zustand/ShoppingCartStore'

export default function CartItem ({cartItem}: {cartItem: CartItemType}) {
  const increaseQuantity = useCartSlice((state) => state.increaseQuantity)

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
          <p className={styles.decrease}>-</p>
          <p className={styles.size}>{cartItem.quantity}</p>
          <p
            className={styles.increase}
            onClick={() => increaseQuantity(cartItem)
            }
          >
            +
          </p>
        </div>

        <p className={styles.delete}>+</p>

      </div>
    </div>
  )
}
