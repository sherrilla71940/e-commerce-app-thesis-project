// import mock from '../../mock-data/mock.json'
// import { Product } from '../../models/models'
import styles from "./StoreItems.module.css";
import Item from "../../components/Item/Item";
import { useEffect } from "react";
import { useProductsSlice } from "../../zustand/ProductSlice";
import { getStoreProducts } from "../../services/store-products-service";
import { ProductType } from "../../../../global-types/product";
import { renderProductsStore } from "../../zustand/should-refetch-slice";

export default function StoreItems() {
  const { shouldReRender, setRerender } = renderProductsStore();
  const storeItems = useProductsSlice((state) => state.storeItems);
  const addProduct = useProductsSlice((state) => state.addProduct);

  useEffect(() => {
    const fetcAllStoreProducts = async () => {
      try {
        const storeProducts = await getStoreProducts();
        // console.log('storeProducts: ', storeProducts)

        storeProducts.forEach((product: ProductType) => {
          addProduct(product);
        });
        console.log("24: ", storeItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetcAllStoreProducts();
    console.log(shouldReRender);
  }, [shouldReRender]);

  // console.log(mock)
  // const data = JSON.parse(JSON.stringify(mock))
  // const products: Product[] = data.products;

  return (
    <div className={styles.storeItems}>
      {storeItems.map((product: ProductType) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
