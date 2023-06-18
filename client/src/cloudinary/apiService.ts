import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const name = "dsdwcynvc";
/// Cloudinary
// const cloud = new Cloudinary({
//   cloud: {
//     cloudName: name,
//     apiKey: '247952542254367',
//     uploadPreset: 'e-commerce',
//   }
// });

// const test = new Cloudinary()
// console.log(test)

const API_URL_CLOUDINARY = `https://api.cloudinary.com/v1_1/${name}/image/upload`;

// const image = cloud.image('docs/models');

export async function postImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "e-commerce");

  const response = await fetch(API_URL_CLOUDINARY, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to post");
  }
  const log = await response.json();
  // console.log(log.secure_url)
  return log.secure_url;
}
