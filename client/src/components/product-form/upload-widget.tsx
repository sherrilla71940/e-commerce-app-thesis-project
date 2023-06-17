// import { useEffect, useRef } from "react";

// export default function UploadWidget() {
//   const cloudinaryRef = useRef();
//   // const cloudinaryRef = useRef<Window['cloudinary'] | undefined>(undefined);
//   useEffect(() => {
//     if ("cloudinary" in window) {
//       cloudinaryRef.current = window.cloudinary as typeof window['cloudinary'];
//     }
//   }, []);

//   console.log(cloudinaryRef.current);
//   return <div>upload widget</div>;
// }

import { ReactNode, useEffect, useRef, SetStateAction, Dispatch } from "react";
import styles from "./product-form.module.css";

// declare global {
//   interface Window {
//     cloudinary?: any; // Replace 'any' with the appropriate type for window.cloudinary
//   }
// }
type props = {
  children: ReactNode;
  setPic: Dispatch<SetStateAction<File | undefined>>;
};

export default function UploadWidget(props: props) {
  // const cloudinaryRef = useRef<Window["cloudinary"] | undefined>();
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();
  useEffect(() => {
    if ("cloudinary" in window) {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: "dsdwcynvc",
          uploadPreset: "muh2jqr7",
        },
        (error: any, result: any) => {
          console.log(result);
        }
      );
    }
  }, []);

  console.log(cloudinaryRef.current);
  const handleUploadClick = () => {
    // if (widgetRef.current) {
    //   widgetRef.current.open();
    // }
    widgetRef.current.open((error: any, result: any) => {
      if (!error && result && result.event === "success") {
        const imageUrl = result.info.secure_url;
        props.setPic(imageUrl);
      }
    });
  };

  console.log(cloudinaryRef.current);
  return (
    <button className={styles.inputField} onClick={handleUploadClick}>
      {props.children}
    </button>
  );
}
