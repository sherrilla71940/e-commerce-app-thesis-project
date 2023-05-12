import { useState } from 'react'
import styles from './product-form.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import { useNavigate } from 'react-router-dom'
import { userStore } from './../../zustand/UserStore'
import { sellerStore } from '../../zustand/sellerStore'
import { saveUser, postProduct } from '../../service'


const log = console.log.bind(console)
log('ok')

export default function ProductForm() {
  
const navigate = useNavigate()

const { id } = userStore();
  
  const [name, setName] = useState('');
  const [cat, setCat] = useState('');
  const [price, setPrice] = useState(0);
  const [sellerID, setSellerID] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [picture_url, setPic] = useState('');
  
setPic('https://picsum.photos/id/237/200/300')
setSellerID(id);
  
async function addProduct(e: React.FormEvent<HTMLButtonElement>) {
  e.preventDefault()
  try {
    postProduct({ name: name, category: cat, price: price, sellerID: sellerID, quantity: quantity, picture_url: picture_url })
    navigate('/')
  } catch (err) {
    console.log(err)
    alert('Posting the product on your store was unsuccesful, please try again!')
  }
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
  
// function sellerHandler(e: React.ChangeEvent<HTMLInputElement>) {
//   const target = e.target as HTMLInputElement;  
// }
  
  return (
    <div className={styles.container}>
    <p >Product information:</p>    
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
            <input size={30} value={cat} className={styles.input} type="text"
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