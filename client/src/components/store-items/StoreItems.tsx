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

  // when adding multiple products to cart, checkout does not update quantity on each product on products page

  useEffect(() => {
    const fetcAllStoreProducts = async () => {
      try {
        const storeProducts = await getStoreProducts();

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

  return (
    <div className={styles.storeItems}>
      {storeItems.map((product: ProductType) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
