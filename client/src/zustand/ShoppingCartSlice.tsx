import { create } from 'zustand'
import { CartItemType } from '../models/models'

type ShoppingCartState = {
  isOpen: boolean,
  cartItems: CartItemType[]
}

type ShoppingCartAction = {
  increaseQuantity: (newItem: CartItemType) => void
  decreaseQuantity: (existingItem: CartItemType) => void
  removeFromCart: (existingItemID: number) => void
  openCart: () => void
  closeCart: () => void
}

export const useCartSlice = create<ShoppingCartState & ShoppingCartAction>()((set) => ({
  isOpen: false,
  cartItems: [],

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

  decreaseQuantity: (existingItem) => set((state) => {
    // if there is no such item in the cart yet
    if (state.cartItems.find(item => item === existingItem)?.quantity === 1) {
      return {cartItems: state.cartItems.filter(item => item.id != existingItem.id)}
    }
    else {
      const newState = state.cartItems.map(item => {
        // if the item does exist in the cart
        if (existingItem.quantity && item.id === existingItem?.id) {
          return {...existingItem, quantity: existingItem.quantity - 1 }
        } else {
          return item
        }
      })
      return {cartItems: newState}
    }
  }),

  removeFromCart: (existingItemID) => set((state) => {
    return {cartItems: state.cartItems.filter(item => item.id != existingItemID)}
  }),

  // removeFromCart: () => set({ bears: 0 }),
  openCart: () => set({ isOpen: true}),
  closeCart: () => set({ isOpen: false}),

}))