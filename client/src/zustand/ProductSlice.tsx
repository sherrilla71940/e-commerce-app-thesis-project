import { create } from 'zustand'
import { Product } from '../models/models'

type ProductsState = {
  storeItems: Product[]
}

type ProductsAction = {
  addProduct: (newProduct: Product) => void
}

export const useProductsSlice = create<ProductsState & ProductsAction>()((set) => ({

  storeItems: [],

  addProduct: (newProduct: Product) => set((state) => {
    // if there is no such item in the cart yet
    if (state.storeItems.find(item => item.id === newProduct.id) == null) {
      return { storeItems: [...state.storeItems, { ...newProduct, quantity: 1 }] }
    } else {
      return { storeItems: [...state.storeItems] }
    }
  }),

}))