import { create } from 'zustand'

export type menuState = {
  
  visible: boolean;
  
  setVisibility: () => void; //openMenu
 
}

export const menuStore = create<menuState>((set) => ({
  
  visible: false,

  setVisibility: () => set({ visible: true}),

}))
