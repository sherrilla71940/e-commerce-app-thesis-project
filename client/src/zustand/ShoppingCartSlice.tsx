// import { CartItemType, Product } from '../models/models'
import { create } from 'zustand'
import { ShoppingCartProductType } from '../../../global-types/shopping-cart-product'

type ShoppingCartState = {
  isOpen: boolean,
  cartItems: ShoppingCartProductType[]
}

type ShoppingCartAction = {
  addItem: (newItem: ShoppingCartProductType) => void
  increaseQuantity: (newItem: ShoppingCartProductType) => void
  decreaseQuantity: (existingItem: ShoppingCartProductType) => void
  removeFromCart: (existingItemID: number) => void
  openCart: () => void
  closeCart: () => void
}

export const useCartSlice = create<ShoppingCartState & ShoppingCartAction>()((set) => ({
  isOpen: false,
  cartItems: [],

  addItem: (newItem) => set((state) => {
    // if there is no such item in the cart yet
    if (state.cartItems.find(item => item.id === newItem.id) == null) {
      return { cartItems: [...state.cartItems, { ...newItem, quantity: 1 }] }
    } else {
      return { cartItems: [...state.cartItems] }
    }
  }),

  increaseQuantity: (existingItem) => set((state) => {

    const newState = state.cartItems.map(item => {
      // if the item does exist in the cart
      if (existingItem.productQuantity && item.id === existingItem?.id) {
        return { ...existingItem, quantity: existingItem.productQuantity + 1 }
      } else {
        return item
      }
    })
    return { cartItems: newState }
    }
  ),

  decreaseQuantity: (existingItem) => set((state) => {
    // if there is no such item in the cart yet
    if (state.cartItems.find(item => item === existingItem)?.productQuantity === 1) {
      return { cartItems: state.cartItems.filter(item => item.id != existingItem.id) }
    }
    else {
      const newState = state.cartItems.map(item => {
        // if the item does exist in the cart
        if (existingItem.productQuantity && item.id === existingItem?.id) {
          return { ...existingItem, quantity: existingItem.productQuantity - 1 }
        } else {
          return item
        }
      })
      return { cartItems: newState }
    }
  }),

  removeFromCart: (existingItemID) => set((state) => {
    return { cartItems: state.cartItems.filter(item => item.id != existingItemID) }
  }),

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

}))