import { useState } from "react";
import styles from "./product-form.module.css";
import * as Tabs from "@radix-ui/react-tabs";
import { useNavigate } from "react-router-dom";
import { userStore } from "./../../zustand/UserStore";
import { sellerStore } from "../../zustand/sellerStore";
import { saveUser, postProduct } from "../../service";
import { postImage } from "./../../cloudinary/apiService"


const log = console.log.bind(console);

export default function ProductForm() {
  
  const { id } = userStore();

  const [name, setName] = useState<string>("");
  const [cat, setCat] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [sellerID, setSellerID] = useState<string>(id);
  const [quantity, setQuantity] = useState<number>(0);
  const [picture_url, setPic] = useState<File>();
    // "https://picsum.photos/id/237/200/300"
  // );
console.log(picture_url)
  // setPic("https://picsum.photos/id/237/200/300");
  // setSellerID(id);

  async function addProduct(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      
      if (picture_url) {
        const image = await postImage(picture_url)
        console.log(image)
        postProduct({
          name: name,
          category: cat,
          price: price,
          sellerId: sellerID,
          quantity: quantity,
          pictureUrl: image,
        });
      } else {
        console.log('Image not found')
      }

    } catch (err) {
      console.log(err);
      alert(
        "Posting the product on your store was unsuccesful, please try again!"
      );
    }
  }

  function nameHandler(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setName(target.value);
  }
  function categoryHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setCat(target.value);
  }
  function priceHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    console.log(target);
    setPrice(Number(target.value));
  }
  function qtyHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setQuantity(Number(target.value));
  }

  function uploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      setPic(target.files[0])  
    }
    
  }

  return (
    <div className={styles.container}>
      <p>Product information:</p>
      <form>
        <fieldset>
          <label className="">name</label> <br />
          <input
            size={30}
            value={name}
            className={styles.input}
            type="text"
            onChange={nameHandler}
            required
          />
        </fieldset>
        <fieldset>
          <label className="">category</label> <br />
          <input
            size={30}
            value={cat}
            className={styles.input}
            type="text"
            onChange={categoryHandler}
            required
          />
        </fieldset>
        <fieldset>
          <label className="">price</label> <br />
          <input
            min="0"
            value={price}
            className={styles.input}
            type="number"
            onChange={priceHandler}
            required
          />
        </fieldset>
        <fieldset>
          <label className="">quantity</label> <br />
          <input
            min="1"
            value={quantity}
            className={styles.input}
            type="number"
            onChange={qtyHandler}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="product picture">Upload product picture:</label>
          <input type="file" name="product-pic" onChange={uploadImage}></input>
        </fieldset>
        <div>
          <button className={styles.button} onClick={addProduct}>
            Add product
          </button>
        </div>
      </form>
    </div>
  );
}
