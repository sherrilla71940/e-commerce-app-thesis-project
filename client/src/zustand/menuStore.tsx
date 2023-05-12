import { create } from 'zustand'

export type menuState = {
  
  visible: boolean;
  setVisibility: (value: boolean) => void; //closes Menu
  // setVisibilityOn: (value: boolean) => void; //opens Menu
  // setVisibilityOff: (value: boolean) => void; //closes Menu

}

export const menuStore = create<menuState>((set) => ({
  
  visible: false,
  setVisibility: (value: boolean) => set({ visible: value }),
  
  // setVisibilityOn: () => set({ visible: true }),
  // setVisibilityOff: (value: boolean) => set({ visible: value})

}))
