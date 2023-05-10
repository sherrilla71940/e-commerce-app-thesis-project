import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import { User } from '../../models/models'
import { userStore } from './../../zustand/UserStore'
import { saveUser, authUser } from './../../service'
// //Firebase auth
import { loginFunction } from '../../firebaseAuth/auth'

const log = console.log.bind(console)
log('ok')

export default function Login() {
  
  const navigate = useNavigate()

  const { loggedIn, id, username, email, password, setLoggedIn, setID, setUsername, setEmail, setPassword } = userStore();

 //Note: All the state hooks below have been replaced by the global state above (Zustand) 
  // const [loggedIn, setLogIn] = useState(false);
  // const [id, setID] = useState('');
  // const [username, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPass] = useState('');
  
log(loggedIn, id, username, email, password)

  useEffect(() => { 
    // setLogIn(false);
    // setUser('');
    // setEmail('');
    // setPass('');
  }, []);
  
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

function register(e: React.FormEvent<HTMLButtonElement>) {
  e.preventDefault()
  log(e)
  saveUser({username, email, password})
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
      <fieldset className="">
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