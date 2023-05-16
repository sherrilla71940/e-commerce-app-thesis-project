export type ProductSize = 'S' | 'M' | 'L' | 'XL';


export interface Product {
  id: number
  name: string
  category: string
  size: ProductSize
  price: number
  sellerId: string
  quantity: number
  pictureUrl: string
  }

export type User = {
  isLoggedIn: boolean
  username?: string
  email: string
  password: string
}

// export interface CartItemType extends Product {
//   quantity: number
// }