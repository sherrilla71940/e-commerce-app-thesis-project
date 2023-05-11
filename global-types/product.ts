export type ProductType = {
  id: number;
  name: string;
  category: string;
  price: number;
  sellerId: string; // uuid
  quantity: number;
  pictureUrl: string;
};
