import styles from './Navbar.module.css'
import BagIcon from '../../assets/bag-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useCartSlice } from './../../zustand/ShoppingCartSlice'
import { userStore } from './../../zustand/UserStore'
import { CartItemType } from '../../models/models'

export default function Navbar() {

  const navigate = useNavigate()

  const openCart = useCartSlice((state) => state.openCart)
  const cartItems = useCartSlice((state) => state.cartItems)

  const { loggedIn, username, email } = userStore()

function redirect(){
  navigate('/login')
}

  return (
    <nav className={styles.navbarContainerSticky}>
      <div className={styles.navbarContainerBlock}>

        <h1
          className={styles.navbarLeft}
          onClick={() => navigate('/')}
        >E-COMMERCE
        </h1>

        <input className={styles.navbarCenter} />
        
        
        <div className={styles.navbarRight}>
          {(!loggedIn) ?
            
            <div className={styles.cartItems}
              onClick={() => openCart()}>1
            </div>
          
            : <>
            <div className={styles.cartItems}
                onClick={() => openCart()}>
                {cartItems.reduce((total:number, cartItem: CartItemType) => {
              return total + cartItem.quantity}, 0)}
            </div>
  
            <img
              src={BagIcon}
              className={styles.cartItemsIcon}
              alt="logo"
              onClick={() => openCart()}
            />
          </>}
          {(loggedIn) ?
              <img 
                src='https://source.boringavatars.com/'
                className={styles.userThumbnail}
                alt='user pic'
            />
            : <button className={styles.button}
              onClick={redirect}>Sign In</button>
          }
          
        </div>
        
        

      </div>
    </nav>
  )
}
