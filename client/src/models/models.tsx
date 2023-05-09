export type Product = {
  id: number
  name: string
  color: string
  size: string
  price: number
  description: string,
  image: string
}

export type CartItemType = {
  id: number
  name: string
  color: string
  size: string
  price: number,
  description: string,
  image: string,
  quantity?: number
}

export type User = {
  isLoggedIn: boolean
  username?: string
  email: string
  password: string
}