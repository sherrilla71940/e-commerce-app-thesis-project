// import { Product } from '../../models/models'
import styles from './Item.module.css'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../../../global-types/product'
import { Product } from '../../models/models'

type Props = {
  key: number,
  // product: ProductType
  product: Product
}

export default function StoreItem({product}: Props) {
console.log(product.image)
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.storeItem}
        // className={styles.img}
        onClick={() => navigate(`/${product.id}`)}>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <img src={product.image}></img>
        {/* <img src={product.pictureUrl}></img> */}  
      </div>

    </div>
  )
}
