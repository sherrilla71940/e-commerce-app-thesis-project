export type TransactionBasketProductType = {
  id: number;
  transactionId: number;
  productId: number;
  quantity: number;
  date?: Date;
  // added and made optional by Aaron since sequelize will auto-create createdAt
};
