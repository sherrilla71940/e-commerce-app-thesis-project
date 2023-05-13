import styles from './menu.module.css'
import box from './../../assets/box.svg'
import settings from './../../assets/settings.svg'
import logout from './../../assets/logout.svg'
//// 
import { useNavigate } from 'react-router-dom'
import { menuStore } from '../../zustand/menuStore'

export default function Menu() {

  const navigate = useNavigate()
  
  const {visible, setVisibility} = menuStore();
  // console.log(visible, setVisibility)

  function goToSell() {
    navigate('/sell');
    console.log(visible)
  }

  function closeMenu() {
    // navigate('/sell');
    setVisibility(false)
    console.log(visible)
  }
  
  function backToLogin() {
    navigate('/login');
    // setVisibility(false)
    // console.log(visible)
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
              alt="logo"
            />
            <p className={styles.text}>Sell</p>

          </div>
          <div className={styles.menuItem}>
            <img
              src={settings}
              className={styles.options}
              alt="logo"
              // onClick={}
            />
            <p className={styles.text}>Settings</p>
          </div>
          <div className={styles.menuItem} onClick={backToLogin}>
            <img
              src={logout}
              className={styles.options}
              alt="logo"
              // onClick={}
            />
            <p className={styles.text}>Log Out</p>
          </div>  

        </div>
       : null}
    </>
  )
}
