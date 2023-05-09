import styles from './Navbar.module.css'
import BagIcon from '../../assets/bag-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useCartSlice } from '../../zustand/ShoppingCartSlice'

export default function Navbar() {

  const navigate = useNavigate()

  const openCart = useCartSlice((state) => state.openCart)

  return (
    <div className={styles.navbarContainerSticky}>
      <div className={styles.navbarContainerBlock}>

        <h1
          className={styles.navbarLeft}
          onClick={() => navigate('./products')}
        >E-COMMERCE
        </h1>

        <input className={styles.navbarCenter}></input>

        <div className={styles.navbarRight}>
          <div
            className={styles.cartItems}
            onClick={() => openCart()}
          >1</div>
          <img
            src={BagIcon}
            className={styles.cartItemsIcon}
            alt="logo"
            onClick={() => openCart()}
          />
          <div className={styles.userThumbnail}></div>
        </div>

      </div>
    </div>
  )
}
