import { create } from 'zustand'
import { User } from './../models/models'

// export type User = {
//   isLoggedIn: boolean; 
//   username?: string;
//   email: string;
//   password: string;
// }

export const userStore = create((set) => ({
  isLoggedIn: false,
  username: '',
  email: '',
  password: '',

  logIn: () => set({isLoggedIn: true})

}))