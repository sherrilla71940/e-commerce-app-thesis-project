import styles from "./ShoppingCart.module.css";
// import { checkout } from "./checkoutFunction";
import { useCartSlice } from "../../zustand/ShoppingCartSlice";
import CartItem from "../cart-item/CartItem";
import { getShoppingCartProducts } from "../../services/shopping-cart-service";
import { useEffect } from "react";
import { ShoppingCartProductType } from "../../../../global-types/shopping-cart-product";
import { userStore } from "../../zustand/UserStore";

import { renderProductsStore } from "../../zustand/should-refetch-slice";

export default function ShoppingCart() {
  const { shouldReRender, setRerender } = renderProductsStore();
  // const { shouldReRender, setRerender } = renderCartStore();
  const id = userStore((state) => state.id);
  // let id;

  // (async () => {
  //   id = userStore((state) => state.id
  // })()

  const cartItems = useCartSlice((state) => state.cartItems);
  const isOpen = useCartSlice((state) => state.isOpen);
  const addItem = useCartSlice((state) => state.addItem);
  const closeCart = useCartSlice((state) => state.closeCart);

  console.log("outside of effect and if", shouldReRender);
  if (id) {
    useEffect(() => {
      console.log("in use effect ", shouldReRender);
      const fetchAllShoppingCartProducts = async () => {
        try {
          // id = userStore((state) => state.id);
          console.log(id);
          const shoppingCartProducts = await getShoppingCartProducts(id);
          // console.log('shoppingCartProducts: ', shoppingCartProducts)
          if (Array.isArray(shoppingCartProducts)) {
            shoppingCartProducts.forEach((product: ShoppingCartProductType) => {
              addItem(product);
            });
            // set false might trigger useeffect again
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchAllShoppingCartProducts();
    }, [id]);
  }
  // useEffect(() => {
  //   const fetchAllShoppingCartProducts = async () => {
  //     try {
  //       // id = userStore((state) => state.id);
  //       console.log(id);
  //         const shoppingCartProducts = await getShoppingCartProducts(id);
  //         // console.log('shoppingCartProducts: ', shoppingCartProducts)
  //         if (Array.isArray(shoppingCartProducts)) {
  //           shoppingCartProducts.forEach((product: ShoppingCartProductType) => {
  //             addItem(product);
  //           });
  //         }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchAllShoppingCartProducts();
  // }, []);

  async function getShoppingCartId() {
    const response = await fetch(
      `http://localhost:3000/getoneshoppingcart/${id}`
    );
    const data = await response.json();
    const cartId = data.id;
    return Number(cartId);
  }

  // async function postShoppingCart(userId: string, cartId: string) {
  //   const response =
  // }

  async function checkout() {
    const cartId = await getShoppingCartId();
    console.log(cartId);
    console.log(id);
    if (typeof cartId === "number") {
      let payload = {
        cartId: cartId,
        buyerId: id,
      };
      // console.log(payload);
      const response = await fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log(response);
      const data = await response.json();
      console.log("data", data);
      console.log(payload);

      // set state to rerender
      setRerender(!shouldReRender);
      return data;
    }
  }

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.cartHeader}>
            <h1>Cart</h1>
            <h1 className={styles.closeCart} onClick={() => closeCart()}>
              +
            </h1>
          </div>

          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                <CartItem cartItem={cartItem} />
              </li>
            ))}
          </ul>

          <div className={styles.cartFooter}>
            <div className={styles.total}>
              <h3>Total</h3>
              {/* <h3
                className={styles.totalValue}
              >
                {cartItems.reduce((total, cartItem) => {
                  console.log(cartItem)
                  return total + (cartItem.price * cartItem.quantity)
                }, 0)}
              </h3> */}
            </div>

            <button className={styles.checkout} onClick={checkout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
