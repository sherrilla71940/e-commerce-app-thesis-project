import './StoreItems.css'

import StoreItem from '../../components/store-item/StoreItem'
import mock from '../../mock-data/mock.json'

type Product = {
  id: number
  name: string
  color: string
  size: string
  price: number
  image: string
}

export default function StoreItems() {

  // console.log(mock)
    const data = JSON.parse(JSON.stringify(mock))
    const products: Product[] = data.products;

  return (
    <div className='store-items' >
        {
          products.map((product: Product) => (
            <StoreItem
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
  )
}
