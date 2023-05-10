import { create } from 'zustand'
// import { User } from './../models/models'

export type UserState = {
  
  loggedIn: boolean;
  id: string;
  username?: string;
  email: string;
  password: string;
  isSeller?: boolean;
  
  setLoggedIn: (loggedIn: boolean) => void;
  setID: (id: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setSeller: (isSeller: boolean) => void;
}

export const userStore = create<UserState>((set) => ({
  
  loggedIn: false,
  id:'',
  username: '',
  email: '',
  password: '',
  isSeller: false,

  setLoggedIn: (loggedIn) => set(() => ({ loggedIn })),
  setID: (id) => set(() => ({ id })),
  setUsername: (username) => set(() => ({ username })),
  setEmail: (email) => set(() => ({ email })),
  setPassword: (password) => set(() => ({ password })),
  setSeller: (isSeller) => set(()=> ({isSeller}))

}))
