import styles from './login.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStore } from './../../zustand/UserStore'
import { saveUser } from '../../services/seller-service'
////Firebase auth
import { loginFunction, registerFunction } from '../../firebaseAuth/auth'

export default function Login() {
  
  const navigate = useNavigate()

  const { loggedIn, id, username, email, password, isSeller, setLoggedIn, setID, setUsername, setEmail, setPassword, setSeller } = userStore();

 //Note: All the state hooks below have been replaced by the global state above (Zustand) 
  // const [loggedIn, setLogIn] = useState(false);
  // const [id, setID] = useState('');
  // const [username, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPass] = useState('');
  
async function login(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    const user = await loginFunction(email, password)
    setID(user.id)
    setLoggedIn(user.loggedIn)
    if (user.loggedIn === true) {
      navigate('/')
    } else {
      alert('Invalid user or password')
    }
}

async function register(e: React.FormEvent<HTMLButtonElement>) {
  e.preventDefault()
  // log(e)
  const user = await registerFunction(email, password)
  if (user) {
    saveUser({ id: user.id, email: user.email, name: username, isSeller: isSeller })
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
  
  return (
    <div className={styles.container}>
    <Tabs.Root defaultValue="tab1">
    <Tabs.List  aria-label="Manage your account">
      <Tabs.Trigger className={styles.tabs} value="tab2">
        Login
      </Tabs.Trigger>
      <Tabs.Trigger className={styles.tabs} value="tab1">
        Register
      </Tabs.Trigger>
    </Tabs.List>
        
    <Tabs.Content value="tab1">
    <p >Create an account.</p>    
      <form>
      <fieldset>
        <label className="">
          username
        </label> <br/>
            <input size={30} value={username} className={styles.input} type="text" placeholder="onlinestore"
              onChange={userHandler} required />
      </fieldset>
      <fieldset>
        <label className="">
          email
        </label> <br/>
            <input size={30} value={email} className={styles.input} type="email" placeholder="shop@online.net"
              onChange={emailHandler} required />
      </fieldset>    
      <fieldset>
        <label className="" >
          password      
        </label> <br/>
            <input size={30} value={password} className={styles.input} type="password"
              onChange={passHandler} required />
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