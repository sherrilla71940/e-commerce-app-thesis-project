export type ProductSize = 'S' | 'M' | 'L' | 'XL';


// export interface Product {
//   id: number
//   name: string
//   color: string
//   size: ProductSize
//   price: number
//   description: string,
//   image: string
// }

export type User = {
  isLoggedIn: boolean
  username?: string
  email: string
  password: string
}

// export interface CartItemType extends Product {
//   quantity: number
// }