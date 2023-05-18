import styles from './SellerStore.module.css'
import { useEffect, useState } from 'react'
import Item from '../Item/Item'
// import { Product } from '../../models/models'
import { ProductType } from "../../../../global-types/product";
import { getSellerProducts } from "../../services/seller-service";
import { userStore } from "../../zustand/UserStore";

export default function SellerStore() {
  const [products, setProducts] = useState<ProductType[]>([]);
  console.log(products)
  const { id } = userStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: ProductType[] | undefined = await getSellerProducts(id);
        if (Array.isArray(products)) {
          setProducts(products);
        }
      } catch (error) {
        console.log("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, [id]);

  return (
    <div className={styles.storeItems}>
      <h1>MY STORE:</h1>{
      // {products.length &&
        products.map((product: ProductType) => (
          <Item key={product.id} product={product} />
        ))}
    </div>
  );
}
