import styles from "./CartItem.module.css";
import { useCartSlice } from "../../zustand/ShoppingCartSlice";
import { userStore } from "../../zustand/UserStore";
import {
  deleteProductFromShoppingCart,
  getShoppingCartProduct,
} from "../../services/shopping-cart-service";
import { useEffect, useState } from "react";
import { ProductType } from "../../../../global-types/product";
import { ShoppingCartProductType } from "../../../../global-types/shopping-cart-product";

export default function CartItem({
  cartItem,
}: {
  cartItem: ShoppingCartProductType;
}) {
  const id = userStore((state) => state.id);

  const increaseQuantity = useCartSlice((state) => state.increaseQuantity);
  const decreaseQuantity = useCartSlice((state) => state.decreaseQuantity);
  const removeFromCart = useCartSlice((state) => state.removeFromCart);

  console.log("->", cartItem.productId);
  const [fetchedItem, setFetchedItem] = useState<ProductType>();

  useEffect(() => {
    const fetchShoppingCartProduct = async () => {
      try {
        const shoppingCartProducts = await getShoppingCartProduct(
          cartItem.productId
        );
        // console.log('shoppingCartProducts: ', shoppingCartProducts)

        if (shoppingCartProducts.name) {
          setFetchedItem(shoppingCartProducts);
          // console.log('PRODUCT SC: ', shoppingCartProducts)
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchShoppingCartProduct();
  }, []);

  // console.log('CART ITEM: ', cartItem)

  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.itemInfo}>
        <div className={styles.left}>
          <p className={styles.name}>{fetchedItem?.name}</p>
          {/* <p className={styles.size}>{fetchedItem?.size}</p> */}
          <p className={styles.price}>{fetchedItem?.price}</p>
        </div>

        <div className={styles.right}>
          <p
            className={styles.decrease}
            // onClick={() => decreaseQuantity(cartItem)}
          >
            -
          </p>
          <p className={styles.size}>{cartItem?.productQuantity}</p>
          <p
            className={styles.increase}
            // onClick={() => increaseQuantity(cartItem)}
          >
            +
          </p>
        </div>

        <p
          className={styles.delete}
          onClick={() => {
            deleteProductFromShoppingCart({
              userId: id,
              productId: cartItem.productId,
            });
            removeFromCart(cartItem.id);
          }}
        >
          +
        </p>
      </div>
    </div>
  );
}
