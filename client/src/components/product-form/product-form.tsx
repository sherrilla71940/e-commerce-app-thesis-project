import styles from './product-form.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import { useNavigate } from 'react-router-dom'
import { sellerStore } from '../../zustand/sellerStore'
import { saveUser } from '../../service'

export default function ProductForm() {
  
const navigate = useNavigate()


async function addProduct(e: React.FormEvent<HTMLButtonElement>) {
  e.preventDefault()
  // if (obj) {
  //   saveUser({ id: obj.id, email: obj.email, name: username, isSeller: isSeller })
  // }
}  

function userHandler(e: React.ChangeEvent<HTMLInputElement>) {
  e.preventDefault()
  const target = e.target as HTMLInputElement;
  // setUsername(target.value);
} 
function emailHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  // setEmail(target.value)
}
function passHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  // setPassword(target.value)
}
function sellerHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  // setSeller(true)
}
  
  return (
    <div className={styles.container}>
    <p >Create an account.</p>    
      <form>
      <fieldset>
        <label className="">
          username
        </label> <br/>
            <input size={30} value={username} className={styles.input} id="username" placeholder="onlinestore"
              onChange={userHandler} required />
      </fieldset>
      <fieldset>
        <label className="">
          email
        </label> <br/>
            <input size={30} value={email} className={styles.input} id="email" placeholder="shop@online.net"
              onChange={emailHandler} required />
      </fieldset>    
      <fieldset>
        <label className="" >
          password      
        </label> <br/>
            <input size={30} value={password} className={styles.input} type="password"
              onChange={passHandler} required />
      </fieldset>
      <fieldset className="">
        <legend className="" >
        Would you also like to register as a seller?      
        </legend>
        <div>
            {/* <input type="checkbox" id="seller" value={isSeller}
                  onChange={sellerHandler} required /> */}
          <label>Yes, I have items to sell.</label>
        </div>
{/* 
        <div>
          <input type="radio" id="buyer" value="false"/>
          <label htmlFor="false">No, I'm here to buy.</label>
        </div> */}
      </fieldset>        
      <div>
        <button className={styles.button} onClick={register}>register</button>
      </div>
      </form>
   
    </div>
  )
}