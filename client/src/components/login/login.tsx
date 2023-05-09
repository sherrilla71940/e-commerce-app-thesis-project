import styles from './login.module.css'
import { User } from '../../models/models'
import * as Tabs from '@radix-ui/react-tabs'

const log = console.log.bind(console)
log('ok')

export default function Login() {
  
  return (
    <div className={styles.container}>
    <Tabs.Root defaultValue="tab1">
    <Tabs.List aria-label="Manage your account">
          <Tabs.Trigger value="tab1">
        Register
      </Tabs.Trigger>
      <Tabs.Trigger value="tab2">
        Log in
      </Tabs.Trigger>
    </Tabs.List>
        
    <Tabs.Content value="tab1">
      <p >Create an account.</p>    
      <fieldset>
        <label className="">
          username
        </label> <br/>
            <input size={30}  id="username" placeholder="johnsnow" />
      </fieldset>
      <fieldset>
        <label className="">
          email
        </label> <br/>
            <input size={30}  id="email" placeholder="night@watch.wall" />
      </fieldset>    
      <fieldset className="">
        <label className="" >
          password      
        </label> <br/>
            <input size={30} type="password" />
      </fieldset>    
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button>Register</button>
      </div>
    </Tabs.Content>
    <Tabs.Content  value="tab2">
      <p className="pb-5">Welcome back!</p>
      <fieldset className="">
        <label className="" placeholder="board-up@games.dk" >
          email
        </label> <br/>
            <input size={30}  type="email" />
      </fieldset>
      <fieldset className="">
        <label className="" >
        password      
        </label> <br/>
            <input size={30} type="password" />
      </fieldset>
      <div>
            <button
            // onClick={log}
            >login</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
    </div>
  )
}