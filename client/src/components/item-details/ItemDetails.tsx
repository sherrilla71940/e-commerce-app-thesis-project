// import mock from '../../mock-data/mock.json'
// import { Product } from '../../models/models'
import styles from './ItemDetails.module.css'
import { useCartSlice } from '../../zustand/ShoppingCartSlice'
import { useParams } from 'react-router-dom'
import { ProductSize } from '../../models/models'
import { useEffect, useState } from 'react'
import { addToShoppingCart } from '../../services/shopping-cart-service'
import { useProductsSlice } from '../../zustand/ProductSlice'
import { userStore } from '../../zustand/UserStore'
import { menuStore } from '../../zustand/menuStore'
import { ShoppingCartProductType } from '../../../../global-types/shopping-cart-product'

export default function ItemDetails() {

  const { id } = userStore()
  const { visible, setVisibility } = menuStore();
  const storeItems = useProductsSlice((state) => state.storeItems)
  const addItem = useCartSlice((state) => state.addItem)
  const openCart = useCartSlice((state) => state.openCart)

  useEffect(() => {
  // setVisibility(false)
    }, [visible]);
  
  // URL query and fetch the DB
  // const data = JSON.parse(JSON.stringify(mock))
  // const product: Product[] = data.products[0];
  
  const param = useParams()
  let product = storeItems.find(item => String(item.id) === param.id)
  console.log(product, "product")

  // handle size selection
  const handleSizeSelection = (e: React.SyntheticEvent) => {
    const size = e.currentTarget.textContent as ProductSize // refactor to make more strict type
    // return {...product, size: size}
    if (size && product) {
      // setItem({...product, size: size})

      // change this later to useRef
      // const sizes = document.querySelectorAll('.size')
      // sizes.forEach(s => {
      //   if (s.textContent === size) s.classList.add('selected')
      //   else s.classList.remove('selected')
      // })
    }
  }
 
  return (
    <div className={styles.container}>

      {/* LEFT */}
      <div className={styles.left}>
        {/* <img className={styles.mainImage} src={product?.image} alt='item_picture'></img> */}
        <img className={styles.mainImage} src={product?.pictureUrl} alt='item_picture'></img>
        {/* <div className={styles.sideImages}> */}
          {/* <div className={styles.sideImage}></div>
          <div className={styles.sideImage}></div>
          <div className={styles.sideImage}></div> */}
        {/* </div> */}
      </div>


      {/* RIGHT */}
      <div className={styles.right}>
        <h1 className={styles.name} onClick={handleSizeSelection}>{product?.name}</h1>
        <h4 className={styles.price} onClick={handleSizeSelection}>{product?.category}</h4>
        <h4 className={styles.price}>$ {product?.price} USD</h4>
        
        {/* <div className={styles.sizes}>
          <div className={styles.size} onClick={handleSizeSelection}>S</div>
          <div className={styles.size} onClick={handleSizeSelection}>M</div>
          <div className={styles.size} onClick={handleSizeSelection}>L</div>
          <div className={styles.size} onClick={handleSizeSelection}>XL</div>
        </div> */}

        <div
          className={styles.addToCart}
          onClick={async () => {
            if(product) {
              const newCartItem: ShoppingCartProductType = await addToShoppingCart({
                userId: id,
                productId: product.id,
              });

              // check if response === typeof ShoppingCartItem
              console.log('-->', newCartItem)
              if (newCartItem.productQuantity) {
                addItem(newCartItem)
                openCart();
              }
            }
          }}
        >ADD TO CART
        </div>
      </div>

    </div>
  )
}
