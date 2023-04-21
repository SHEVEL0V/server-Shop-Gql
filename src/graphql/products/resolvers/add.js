/** @format */

import productSchema from "../../../db/schema/product.js";
import { isAuthAdmin } from "../../../helpers/isAuth.js";

export default async (root, args, context) => {
  isAuthAdmin(context);
  //-----create new product-----//
  const newProduct = new productSchema(args.add);

  await newProduct.save();

  return newProduct;
};
