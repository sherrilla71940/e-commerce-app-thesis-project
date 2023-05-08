import './Navbar.css'
import BagIcon from '../../assets/bag-icon.svg'

export default function Navbar() {
  return (
    <div className='navbar-container-sticky'>
      <div className='navbar-container-block'>

        <h1 className='navbar-left'>E-COMMERCE</h1>

        <input className='navbar-center'></input>

        <div className='navbar-right'>
          <div className='cart-items'>1</div>
          <img src={BagIcon} className="cart-items-icon" alt="logo" />
          <div className='user-thumbnail'></div>
        </div>

      </div>
    </div>
  )
}
