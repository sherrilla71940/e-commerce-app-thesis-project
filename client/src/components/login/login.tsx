import styles from './login.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStore } from './../../zustand/UserStore'
import { saveUser } from './../../service'
////Firebase auth
import { loginFunction, registerFunction } from '../../firebaseAuth/auth'

// const log = console.log.bind(console)
// log('ok')

export default function Login() {
  
  const navigate = useNavigate()

  const { loggedIn, id, username, email, password, isSeller, setLoggedIn, setID, setUsername, setEmail, setPassword, setSeller } = userStore();

 //Note: All the state hooks below have been replaced by the global state above (Zustand) 
  // const [loggedIn, setLogIn] = useState(false);
  // const [id, setID] = useState('');
  // const [username, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPass] = useState('');
  
// log(loggedIn, id, username, email, password)
  
async function login(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    const obj = await loginFunction(email, password)
    setID(obj.id)
    setLoggedIn(obj.loggedIn)
    if (obj.loggedIn === true) {
      navigate('/')
    } else {
      alert('Invalid user or password')
    }
}

async function register(e: React.FormEvent<HTMLButtonElement>) {
  e.preventDefault()
  // log(e)
  const obj = await registerFunction(email, password)
  if (obj) {
    saveUser({ id: obj.id, email: obj.email, name: username, isSeller: isSeller })
    alert('Registration successful!')
  } else {
    alert('Registration failure')
  }
  
}  
//Ref:https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
function userHandler(e: React.ChangeEvent<HTMLInputElement>) {
  e.preventDefault()
  const target = e.target as HTMLInputElement;
  setUsername(target.value);
} 
function emailHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setEmail(target.value)
}
function passHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setPassword(target.value)
}
function sellerHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setSeller(true)
}
  
  return (
    <div className={styles.container}>
    <Tabs.Root defaultValue="tab1">
    <Tabs.List  aria-label="Manage your account">
      <Tabs.Trigger className={styles.tabs} value="tab1">
        Register
      </Tabs.Trigger>
      <Tabs.Trigger className={styles.tabs} value="tab2">
        Login
      </Tabs.Trigger>
    </Tabs.List>
        
    <Tabs.Content value="tab1">
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
      
    </Tabs.Content>
    <Tabs.Content  value="tab2">
    <p className="pb-5">Welcome back!</p>
    <form>
      <fieldset className="">
        <label className="" placeholder="ecommerce@shop.com" >
          email
        </label> <br/>
            <input size={30} value={email} className={styles.input} type="email" placeholder="shop@online.net"
             onChange={emailHandler} required/>
      </fieldset>
      <fieldset className="">
        <label className="" >
        password      
        </label> <br/>
            <input size={30} value={password} className={styles.input} type="password"
            onChange={passHandler} required/>
        </fieldset>  
      <div>
            <button className={styles.button} onClick={login}>login</button>
      </div>
    </form>  
    </Tabs.Content>
  </Tabs.Root>
    </div>
  )
}