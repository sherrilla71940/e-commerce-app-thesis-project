import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';


const name = 'dppebzxdz'
  /// Cloudinary
  const cloud = new Cloudinary({
    cloud: {
      cloudName: name,
      apiKey: '247952542254367',
      uploadPreset: 'e-commerce',
    }
  }); 

const test = new Cloudinary()
  console.log(test)
  const API_URL_CLOUDINARY = `https://api.cloudinary.com/v1_1/${name}/upload`

console.log(API_URL_CLOUDINARY, cloud)

const image = cloud.image('docs/models');

export async function postImage(body: any) {
  const response = await fetch(API_URL_CLOUDINARY, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  if (!response.ok) {
    throw new Error("Failed to post");
  }
  // await response.json();
  return;
}
