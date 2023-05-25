export type TransactionBasketType = {
  id: number;
  buyerId: string;
  date?: Date;
  // made optional by Aaron since sequelize will auto-create createdAt
};
