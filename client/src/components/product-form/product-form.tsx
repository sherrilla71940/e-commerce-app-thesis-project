import styles from './product-form.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import { useNavigate } from 'react-router-dom'
import { sellerStore } from '../../zustand/sellerStore'
import { saveUser } from '../../service'

export default function ProductForm() {
  
const navigate = useNavigate()

const { name, category, price, sellerID, quantity, picture_url } = sellerStore()
const { setName, setCat, setPrice, setSellerID, setQuantity, setPic } = sellerStore()
  
async function addProduct(e: React.FormEvent<HTMLButtonElement>) {
  e.preventDefault()
  // if (obj) {
  //   saveUser({ id: obj.id, category: obj.category, name: username, isSeller: isSeller })
  // }
}  

function nameHandler(e: React.ChangeEvent<HTMLInputElement>) {
  e.preventDefault()
  const target = e.target as HTMLInputElement;
  setName(target.value);
} 
function categoryHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setCat(target.value)
}
function priceHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  console.log(target)
  setPrice(Number(target.value))
}
function qtyHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setQuantity(Number(target.value))
}
  
function sellerHandler(e: React.ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  setSellerID('')
}
  
  return (
    <div className={styles.container}>
    <p >Create an account.</p>    
      <form>
      <fieldset>
        <label className="">
          name
        </label> <br/>
            <input size={30} value={name} className={styles.input} type="text"
              onChange={nameHandler} required />
      </fieldset>
      <fieldset>
        <label className="">
          category
        </label> <br/>
            <input size={30} value={category} className={styles.input} type="text"
              onChange={categoryHandler} required />
      </fieldset>    
      <fieldset>
        <label className="" >
          price      
        </label> <br/>
            <input min="0" value={price} className={styles.input} type="number"
              onChange={priceHandler} required />
      </fieldset>
      <fieldset>
        <label className="" >
          quantity     
        </label> <br/>
            <input min="1" value={quantity} className={styles.input} type="number"
              onChange={qtyHandler} required />
      </fieldset>
      <fieldset>
        <label htmlFor="product picture">Upload product picture:</label>
        <input type="file" name="product-pic"></input>
      </fieldset>  
        <div>
        <button className={styles.button} onClick={addProduct}>Add product</button>
      </div>
      </form>
   
    </div>
  )
}