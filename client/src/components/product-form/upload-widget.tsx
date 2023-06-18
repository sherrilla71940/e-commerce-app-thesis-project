// // import { useEffect, useRef } from "react";

// // export default function UploadWidget() {
// //   const cloudinaryRef = useRef();
// //   // const cloudinaryRef = useRef<Window['cloudinary'] | undefined>(undefined);
// //   useEffect(() => {
// //     if ("cloudinary" in window) {
// //       cloudinaryRef.current = window.cloudinary as typeof window['cloudinary'];
// //     }
// //   }, []);

// //   console.log(cloudinaryRef.current);
// //   return <div>upload widget</div>;
// // }

// import { ReactNode, useEffect, useRef, SetStateAction, Dispatch } from "react";
// import styles from "./product-form.module.css";

// // declare global {
// //   interface Window {
// //     cloudinary?: any; // Replace 'any' with the appropriate type for window.cloudinary
// //   }
// // }
// type props = {
//   children: ReactNode;
//   // setPic: Dispatch<SetStateAction<File | undefined>>;
//   setPic: Dispatch<SetStateAction<string | undefined>>;
// };

// export default function UploadWidget(props: props) {
//   // const cloudinaryRef = useRef<Window["cloudinary"] | undefined>();
//   const cloudinaryRef = useRef<any>();
//   const widgetRef = useRef<any>();
//   useEffect(() => {
//     if ("cloudinary" in window) {
//       cloudinaryRef.current = window.cloudinary;
//       widgetRef.current = cloudinaryRef.current.createUploadWidget(
//         {
//           cloudName: "dsdwcynvc",
//           uploadPreset: "muh2jqr7",
//           api_key: "971439295537359",
//         },
//         (error: any, result: any) => {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log(result);
//           }
//         }
//       );
//     }
//   }, []);

//   console.log(cloudinaryRef.current);
//   const handleUploadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("in handleuploadclick func");
//     // if (widgetRef.current) {
//     //   widgetRef.current.open();
//     // }
//     e.preventDefault();
//     console.log("after prevent default");
//     widgetRef.current.open((error: any, result: any) => {
//       if (!error && result && result.event === "success") {
//         console.log("reached inside if block");
//         const imageUrl = result.info.secure_url;
//         console.log("above image url");
//         console.log("image url", imageUrl);
//         props.setPic(imageUrl);
//       }
//       console.log("below if block");
//     });
//   };

//   console.log(cloudinaryRef.current);
//   return (
//     <button className={styles.inputField} onClick={handleUploadClick}>
//       {props.children}
//     </button>
//   );
// }

// // import { ReactNode, useEffect, useRef, SetStateAction, Dispatch } from "react";
// // import styles from "./product-form.module.css";

// // type Props = {
// //   children: ReactNode;
// //   setPic: Dispatch<SetStateAction<string | undefined>>;
// // };

// // export default function UploadWidget(props: Props) {
// //   const cloudinaryRef = useRef<any>();
// //   const widgetRef = useRef<any>();

// //   useEffect(() => {
// //     if ("cloudinary" in window) {
// //       cloudinaryRef.current = window.cloudinary;
// //       widgetRef.current = cloudinaryRef.current.createUploadWidget(
// //         {
// //           cloudName: "dsdwcynvc",
// //           uploadPreset: "e-commerce",
// //           // api_key: "971439295537359",
// //         },
// //         (error: any, result: any) => {
// //           if (error) {
// //             console.log(error);
// //           } else {
// //             console.log(result);
// //           }
// //         }
// //       );
// //     }
// //   }, []);

// //   const handleUploadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
// //     e.preventDefault();
// //     widgetRef.current.open((error: any, result: any) => {
// //       if (!error && result && result.event === "success") {
// //         const imageUrl = result.info.secure_url;
// //         props.setPic(imageUrl);
// //       }
// //     });
// //   };

// //   return (
// //     <button className={styles.inputField} onClick={handleUploadClick}>
// //       {props.children}
// //     </button>
// //   );
// // }
