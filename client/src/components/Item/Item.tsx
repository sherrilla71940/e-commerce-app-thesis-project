// import { Product } from '../../models/models'
import styles from './Item.module.css'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../../../global-types/product'
// import { Product } from '../../models/models'

type Props = {
  key: number,
  product: ProductType
  // product: Product
}

export default function Item({product}: Props) {

console.log(product.pictureUrl)
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.storeItem} onClick={() => navigate(`/${product.id}`)}>
        <p>{product.name}</p>
        
        <p>$ {product.price} USD</p>
        <p>{product.quantity}
          {(product.quantity === 1) ? ' product in stock' : ' products in stock'}
        </p>
        <p>Category: {product.category}</p>
        <img className={styles.img} src={product.pictureUrl}></img>
      </div>

    </div>
  )
}
