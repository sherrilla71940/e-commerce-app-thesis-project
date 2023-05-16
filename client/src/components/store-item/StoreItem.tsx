// import { Product } from '../../models/models'
import styles from './StoreItem.module.css'

import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../../../global-types/product'

type Props = {
  key: number,
  product: ProductType
}

export default function StoreItem({product}: Props) {

  const navigate = useNavigate()

  return (
    <div className={styles.storeItem}>
      <div
        className={styles.img}
        onClick={() => navigate(`/${product.id}`)}
      ></div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      {/* <img src={image}></img> */}
    </div>
  )
}
