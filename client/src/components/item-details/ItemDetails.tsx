import styles from './ItemDetails.module.css'
import { useCartSlice } from '../../zustand/ShoppingCartSlice'
import mock from '../../mock-data/mock.json'
import { useParams } from 'react-router-dom'
import { Product, ProductSize } from '../../models/models'
import { useState } from 'react'

export default function ItemDetails() {

  const addItem = useCartSlice((state) => state.addItem)
  const openCart = useCartSlice((state) => state.openCart)

  // URL param
  const param = useParams()
  console.log(param.id)

  // URL query and fetch the DB
  const data = JSON.parse(JSON.stringify(mock))
  const products: Product[] = data.products;
  let product = products.find(product => String(product.id) === param.id)

  const [item, setItem] = useState(product)

  // handle size selection
  const handleSizeSelection = (e: React.SyntheticEvent) => {
    const size = e.currentTarget.textContent as ProductSize // refactor to make more strict type
    // console.log('PRODUCT:', {...product, size: size})
    // return {...product, size: size}
    if (size && product) {
      setItem({...product, size: size})

      // change this later to useRef
      const sizes = document.querySelectorAll('.size')
      sizes.forEach(s => {
        if (s.textContent === size) s.classList.add('selected')
        else s.classList.remove('selected')
      })
    }
  }

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
          <div className={styles.size} onClick={handleSizeSelection}>S</div>
          <div className={styles.size} onClick={handleSizeSelection}>M</div>
          <div className={styles.size} onClick={handleSizeSelection}>L</div>
          <div className={styles.size} onClick={handleSizeSelection}>XL</div>
        </div>

        <div
          className={styles.addToCart}
          onClick={() => {
            if(item) {
              addItem(item);
              openCart();
            }
          }}
        >ADD TO CART
        </div>
      </div>

    </div>
  )
}
