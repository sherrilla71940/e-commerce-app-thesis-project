export type ProductSize = 'S' | 'M' | 'L' | 'XL';


export interface Product {
  id: number
  name: string
  color: string
  size: ProductSize
  price: number
  description: string,
  image: string
}

export interface CartItemType extends Product {
  quantity: number
}