import './StoreItem.css'

import { useNavigate } from 'react-router-dom'

type Product = {
  id: number
  name: string
  color: string
  size: string
  price: number
  image: string
}

type Props = {
  key: number,
  product: Product
}

export default function StoreItem({product}: Props) {

  const navigate = useNavigate()

  return (
    <div className='store-item'>
      <div
        className='img'
        onClick={() => navigate(`./${product.id}`)}
      ></div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      {/* <img src={image}></img> */}
    </div>
  )
}
