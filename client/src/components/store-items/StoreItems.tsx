import styles from './StoreItems.module.css'

import StoreItem from '../../components/store-item/StoreItem'
import mock from '../../mock-data/mock.json'
import { Product } from '../../models/models'

export default function StoreItems() {

  // console.log(mock)
    const data = JSON.parse(JSON.stringify(mock))
    const products: Product[] = data.products;

  return (
    <div className={styles.storeItems} >
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
