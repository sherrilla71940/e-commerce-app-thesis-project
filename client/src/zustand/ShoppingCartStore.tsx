import { create } from 'zustand'
import { CartItemType } from '../models/models'

type ShoppingCartState = {
  isOpen: boolean,
  cartItems: CartItemType[]
}

type ShoppingCartAction = {
  increaseQuantity: (newItem: CartItemType) => void
  decreaseQuantity: (existingItem: CartItemType) => void
  // removeFromCart: () => void
  openCart: () => void
  closeCart: () => void
}

export const useCartSlice = create<ShoppingCartState & ShoppingCartAction>()((set) => ({
  isOpen: false,
  cartItems: [],

  // increaseQuantity: (newItem) => set((state) => ({ cartItems: [...state.cartItems, newItem]})),
  // decreaseQuantity: (existingItem) => set((state) => ({ cartItems: [...state.cartItems, existingItem]})),
  increaseQuantity: (newItem) => set((state) => {
    // if there is no such item in the cart yet
    if (state.cartItems.find(item => item === newItem) == null) {
      return {cartItems: [...state.cartItems, {...newItem, quantity: 1 }]}
    }
    else {
      const newState = state.cartItems.map(item => {
        // if the item does exist in the cart
        if (newItem.quantity && item.id === newItem?.id) {
          return {...newItem, quantity: newItem.quantity + 1 }
        } else {
          return item
        }
      })
      return {cartItems: newState}
    }
  }),

  decreaseQuantity: (newItem) => set((state) => {
    // if there is no such item in the cart yet
    if (state.cartItems.find(item => item === newItem) == null) {
      return {cartItems: [...state.cartItems, {...newItem, quantity: 1 }]}
    }
    else {
      const newState = state.cartItems.map(item => {
        // if the item does exist in the cart
        if (newItem.quantity && item.id === newItem?.id) {
          return {...newItem, quantity: newItem.quantity - 1 }
        } else {
          return item
        }
      })
      return {cartItems: newState}
    }
  }),

  // removeFromCart: () => set({ bears: 0 }),
  openCart: () => set({ isOpen: true}),
  closeCart: () => set({ isOpen: false}),

}))