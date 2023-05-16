// import mock from '../../mock-data/mock.json'
// import { Product } from '../../models/models'
import styles from './StoreItems.module.css'
import StoreItem from '../../components/store-item/StoreItem'
import { useEffect } from 'react'
import { useProductsSlice } from '../../zustand/ProductSlice'
import { getStoreProducts } from '../../services/store-products-service'
import { ProductType } from '../../../../global-types/product'

export default function StoreItems() {
  const storeItems = useProductsSlice((state) => state.storeItems)
  const addProduct = useProductsSlice((state) => state.addProduct)

  useEffect(() => {

    const fetcAllStoreProducts = async () => {

      try {
        const storeProducts = await getStoreProducts()
        // console.log('storeProducts: ', storeProducts)

        storeProducts.forEach((product: ProductType) => {
          addProduct(product)
        })
      } catch(error) {
        console.log(error)
      }
    }

    fetcAllStoreProducts()

  }, [])

  // console.log(mock)
    // const data = JSON.parse(JSON.stringify(mock))
    // const products: Product[] = data.products;

  return (
    <div className={styles.storeItems} >
        {
          storeItems.map((product: ProductType) => (
            <StoreItem
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
  )
}
