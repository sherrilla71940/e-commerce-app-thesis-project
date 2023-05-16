// import { Product } from '../models/models'
import { create } from 'zustand'
import { ProductType } from '../../../global-types/product'

type ProductsState = {
  storeItems: ProductType[]
}

type ProductsAction = {
  addProduct: (newProduct: ProductType) => void
}

export const useProductsSlice = create<ProductsState & ProductsAction>()((set) => ({

  storeItems: [],

  addProduct: (newProduct: ProductType) => set((state) => {
    // if there is no such item in the cart yet
    if (state.storeItems.find(item => item.id === newProduct.id) == null) {
      return { storeItems: [...state.storeItems, { ...newProduct, quantity: 1 }] }
    } else {
      return { storeItems: [...state.storeItems] }
    }
  }),

}))