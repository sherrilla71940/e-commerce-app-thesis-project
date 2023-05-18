import styles from './SellerStore.module.css'
import { useEffect, useState } from 'react'
import StoreItem from '../Item/Item'
// import { Product } from '../../models/models'
import { ProductType } from '../../../../global-types/product'
import { getSellerProducts } from "../../services/seller-service";
import { userStore } from "../../zustand/UserStore";

export default function SellerStore() {

  const [products, setProducts] = useState<ProductType[]>([]);
  console.log(products)
  const { id } = userStore();

  if (id) {
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const products = await getSellerProducts(id);
          setProducts(products);
        } catch (error) {
          console.error('Failed to fetch products:', error);
        }
      };
      fetchProducts();
    }, []);
  }
  
  return (
    <div>
      <h1 className={styles.title}>MY STORE:</h1>
      <div className={styles.storeItems}>
         {(products.length === 0)? null :
          products.map((product: ProductType) => (
            <StoreItem
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}
