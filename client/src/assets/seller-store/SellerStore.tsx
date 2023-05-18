import styles from './SellerStore.module.css'
import { useEffect, useState } from 'react'
import StoreItem from '../../components/Item/Item'
// import { Product } from '../../models/models'
import { ProductType } from '../../../../global-types/product'
import { getSellerProducts } from "../../services/seller-service";
import { userStore } from "./../../zustand/UserStore";

export default function SellerStore() {

  const [products, setProducts] = useState<ProductType[]>([]);

  const { id } = userStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getSellerProducts(id);
        setProducts(products);
      } catch (error) {
          console.error('Failed to fetch products:', error);
      }};
    fetchProducts();
  }, [id]);
  
  
  return (
    <div className={styles.storeItems} >
      <h1>My Store:</h1>
        {
          products.map((product: ProductType) => (
            <StoreItem
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
  )
}
