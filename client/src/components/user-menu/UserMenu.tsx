import styles from './UserMenu.module.css'
import { menuStore } from '../../zustand/menuStore'
import box from './../../assets/box.svg'

export default function Menu() {
  
  const {visible, setVisibility} = menuStore();
  console.log(visible, setVisibility)

  return (
    <>
      {(visible) ?
        <div className={styles.container}>

          <div className={styles.menuHeader}>
            <img
              src={box}
              className={styles.options}
              alt="logo"
              // onClick={}
            />
            <p className={styles.text}>Sell</p>
            {/* <h1
              className={styles.closeMenu}
              // onClick={}
            >+</h1> */}
          </div>



        </div>
       : null}
    </>
  )
}
