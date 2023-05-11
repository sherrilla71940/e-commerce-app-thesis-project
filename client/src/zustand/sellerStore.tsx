import { create } from 'zustand'

export type sellerProduct = {
  
  name: string,
  category?: string,
  price: number,
  sellerID: string,
  quantity: number,
  picture_url?: string;
  
  setName: (name: string) => void;
  setCat: (id: string) => void;
  setPrice: (price: number) => void;
  setSellerID: (sellerID: string) => void;
  setQuantity: (quantity: number) => void;
  setPic: (isSeller: string) => void;
}

export const sellerStore = create<sellerProduct>((set) => ({
  
  name: '',
  category: '',
  price: 0,
  sellerID: '',
  quantity: 0,
  picture_url: '',

  setName: (name) => set(() => ({ name })),
  setCat: (category) => set(() => ({category })),
  setPrice: (price) => set(() => ({ price })),
  setSellerID: (sellerID) => set(() => ({ sellerID })),
  setQuantity: (quantity) => set(() => ({ quantity })),
  setPic: (picture_url) => set(()=> ({picture_url}))

}))
