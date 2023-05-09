import { create } from 'zustand'

type User = {
 isLoggedIn: boolean; 
  username?: string;
  email: string;
  password: string;
}

// export const userSlice = create