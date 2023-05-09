import {useState, useEffect} from 'react'
import styles from './login.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import { User } from '../../models/models'
import { userStore } from './../../zustand/UserStore'

const log = console.log.bind(console)
log('ok')

// const state = userStore();

// const { username, email, password } = userStore((state: User) =>
// ({ username: state.username, email: state.email, password: state.password }))
// const username = 'a';
// const email = 'a@a.com';
// const password = 'password';

export default function Login() {

  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
log(username, email, password)

  useEffect(() => { 
    setUser('');
    setEmail('');
    setPass('');
  }, []);
  
function login(e: React.FormEvent<HTMLButtonElement>) {
  console.log(e)
}

function register(e: React.FormEvent<HTMLButtonElement>) {
  console.log(e)
}  
//Ref:https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
function userHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setUser(target.value);
} 
function emailHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setEmail(target.value)
}
function passHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setPass(target.value)
}

  return (
    <div className={styles.container}>
    <Tabs.Root defaultValue="tab1">
    <Tabs.List  aria-label="Manage your account">
      <Tabs.Trigger className={styles.tabs} value="tab1">
        Register
      </Tabs.Trigger>
      <Tabs.Trigger className={styles.tabs} value="tab2">
        Log in
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