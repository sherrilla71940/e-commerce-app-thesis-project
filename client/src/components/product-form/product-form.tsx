import { useState } from "react";
import styles from "./product-form.module.css";
import { useNavigate } from "react-router-dom";
import { userStore } from "./../../zustand/UserStore";
import { sellerStore } from "../../zustand/sellerStore";
import { saveUser, postProduct } from "../../services/seller-service";
// import { postImage } from "./../../cloudinary/apiService";
import UploadWidget from "./upload-widget";

const log = console.log.bind(console);

export default function ProductForm() {
  const navigate = useNavigate();

  const { id } = userStore();

  const [name, setName] = useState<string>("");
  const [cat, setCat] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [sellerID, setSellerID] = useState<string>(id);
  const [quantity, setQuantity] = useState<number>(0);
  const [picture_url, setPic] = useState<any>();
  // "https://picsum.photos/id/237/200/300"
  // );
  console.log(picture_url);
  // setPic("https://picsum.photos/id/237/200/300");
  // setSellerID(id);

  async function addProduct(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      if (picture_url) {
        // const image = await postImage(picture_url);
        // console.log(image);
        console.log("picture url: ", picture_url);
        postProduct({
          name: name,
          category: cat,
          price: price,
          sellerId: sellerID,
          quantity: quantity,
          pictureUrl: picture_url,
        });
        navigate(`/sellers/${id}`);
        // alert('Product successfuly saved, go to your store to see your products!')
      } else {
        console.log("Image not posted");
        alert("Error ocurred when submitting your product");
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
      setPic(target.files[0]);
    }
  }

  return (
    <div className={styles.container}>
      <h2>PRODUCT INFORMATION:</h2>
      <form>
        <fieldset>
          <label className={styles.label}>name</label> <br />
          <input
            className={styles.inputField}
            size={30}
            value={name}
            type="text"
            onChange={nameHandler}
            required
          />
        </fieldset>
        <fieldset>
          <label className={styles.label}>category</label> <br />
          <input
            className={styles.inputField}
            size={30}
            value={cat}
            type="text"
            onChange={categoryHandler}
            required
          />
        </fieldset>
        <fieldset>
          <label className={styles.label}>price</label> <br />
          <input
            className={styles.inputField}
            min="0"
            value={price}
            type="number"
            onChange={priceHandler}
            required
          />
        </fieldset>
        <fieldset>
          <label className={styles.label}>quantity</label> <br />
          <input
            className={styles.inputField}
            min="1"
            value={quantity}
            type="number"
            onChange={qtyHandler}
            required
          />
        </fieldset>
        <fieldset>
          <label className={styles.label} htmlFor="product picture">
            Upload product picture:
          </label>
          <br />
          {/* <input
            className={styles.inputField}
            type="file"
            name="product-pic"
            onChange={uploadImage}
          ></input> */}
          <UploadWidget setPic={setPic}>upload here</UploadWidget>
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
