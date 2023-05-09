import styles from './ItemDetails.module.css'
import { useCartSlice } from '../../zustand/ShoppingCartStore'
import mock from '../../mock-data/mock.json'
import { useParams } from 'react-router-dom'
import { Product } from '../../models/models'

export default function ItemDetails() {

  const increaseQuantity = useCartSlice((state) => state.increaseQuantity)
  const openCart = useCartSlice((state) => state.openCart)

  // URL param
  const param = useParams()
  console.log(param.id)

  // URL query and fetch the DB
  const data = JSON.parse(JSON.stringify(mock))
  const products: Product[] = data.products;
  const product =products.find(product => String(product.id) === param.id)

  return (
    <div className={styles.container}>

      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.mainImage}>IMG</div>
        <div className={styles.sideImages}>
          <div className={styles.sideImage}></div>
          <div className={styles.sideImage}></div>
          <div className={styles.sideImage}></div>
        </div>
      </div>


      {/* RIGHT */}
      <div className={styles.right}>
        <h1 className={styles.name}>{product?.name}</h1>
        <h4 className={styles.description}>{product?.description}</h4>
        <h4 className={styles.price}>{product?.price}</h4>

        <div className={styles.sizes}>
          <div className={styles.size}>S</div>
          <div className={styles.size}>M</div>
          <div className={styles.size}>L</div>
          <div className={styles.size}>XL</div>
        </div>

        <div
          className={styles.addToCart}
          onClick={() => {
            if(product) {
              increaseQuantity(product);
              openCart();
            }
          }}
        >ADD TO CART
        </div>
      </div>

    </div>
  )
}
