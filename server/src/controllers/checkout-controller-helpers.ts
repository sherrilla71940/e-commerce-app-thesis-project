import {
  Product as ProductModel,
  TransactionBasket as TransactionBasketModel,
  TransactionBasketProduct as TransactionBasketProductModel,
  ShoppingCart as ShoppingCartModel,
  ShoppingCartProduct as ShoppingCartProductModel,
} from "../models/models";
import { ShoppingCartProductType } from "../../../global-types/index";

export type requestCheckoutCart = {
  cartId: number;
  buyerId: string;
  // cart: ShoppingCartProductType[];
};

// note in frontend when checkout, request body must match type above

// step 1
export async function createTransaction({
  buyerId,
  cartId,
}: // cart,
requestCheckoutCart): Promise<number | void> {
  const cart = await ShoppingCartProductModel.findAll({
    where: {
      shoppingCartId: cartId,
    },
  });
  cart.forEach(async (productObj) => {
    const product = await ProductModel.findOne({
      where: {
        id: productObj.productId,
      },
    });
    const productQuantity = product.quantity;
    if (productQuantity < productObj.productQuantity) {
      throw new Error("can't buy more of same product than what is in stock");
    }
  });

  const transaction = await TransactionBasketModel.create({
    buyerId: buyerId,
  });
  return transaction.id;
}

// step 2, run this function for each product together with step 3
export async function createTransactionProduct(
  transactionId: number,
  productId: number,
  purchaseQuantity: number
): Promise<TransactionBasketProductModel | void> {
  const transactionProduct = await TransactionBasketProductModel.create({
    transactionId: transactionId,
    productId: productId,
    quantity: purchaseQuantity,
  });
  return transactionProduct;
}

// step 3, run this function for each product
export async function updateProductQuantityAfterTransaction(
  productId: number,
  purchaseQuantity: number
): Promise<ProductModel | Error> {
  // once quantity is 0, make 'inStock' to false <--- should add inStock properties to all products and when viewing seller products only view products that are inStock: true
  // try {
  const product = await ProductModel.findOne({
    where: {
      id: productId,
    },
  });
  const preTransactionQuantity = product.quantity;
  product.set({
    quantity: preTransactionQuantity - purchaseQuantity,
  });
  const savedProduct = await product.save();
  return savedProduct;
}

// step 4 delete cart for user
export async function deleteShoppingCart(
  shoppingCartId: number
): Promise<number | void> {
  const deletedShoppingCart = await ShoppingCartModel.destroy({
    where: {
      id: shoppingCartId,
    },
  });
  if (deletedShoppingCart) {
    return deletedShoppingCart;
  }
}
