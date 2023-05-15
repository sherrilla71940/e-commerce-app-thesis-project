import styles from './menu.module.css'
import box from './../../assets/box.svg'
import settings from './../../assets/settings.svg'
import logout from './../../assets/logout.svg'
import star from './../../assets/star.svg'
import { useNavigate } from 'react-router-dom'
import { menuStore } from '../../zustand/menuStore'
import { userStore } from "./../../zustand/UserStore";

export default function Menu() {

  const navigate = useNavigate()
  
  const { id } = userStore();

  const {visible, setVisibility} = menuStore();
  // console.log(visible, setVisibility)

  function closeMenu() {
  setVisibility(false)
  console.log(visible)
  }
  
  function goToSell() {
    navigate('/sell');
    console.log(visible)
  }

  function backToLogin() {
    navigate('/login');
  }

  function goToStore() {
    navigate(`/sellers/${id}`);
  }

  return (
    <>
      {(visible) ?
        <div className={styles.container}>
          <div className={styles.menuItem}>
            {/* <div className={styles.options}>close</div> */}
            <h1
              className={styles.closeMenu}
              onClick={closeMenu}
            >+</h1>
          </div>

          <div className={styles.menuItem} onClick={goToSell}>
            <img
              src={box}
              className={styles.options}
              alt="sell"
            />
            <p className={styles.text}>Sell</p>
          </div>

          <div className={styles.menuItem} onClick={goToStore}>
            <img
              src={star}
              className={styles.options}
              alt="seller's store"
            />
            <p className={styles.text}>My Store</p>
          </div>

          <div className={styles.menuItem}>
            <img
              src={settings}
              className={styles.options}
              alt="settings"
              // onClick={}
            />
            <p className={styles.text}>Settings</p>
          </div>
          
          <div className={styles.menuItem} onClick={backToLogin}>
            <img
              src={logout}
              className={styles.options}
              alt="logout"
              // onClick={}
            />
            <p className={styles.text}>Log Out</p>
          </div>  

        </div>
       : null}
    </>
  )
}
