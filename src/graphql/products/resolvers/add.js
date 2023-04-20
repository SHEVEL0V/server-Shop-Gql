/** @format */

import productSchema from "../../../db/schema/product.js";

export default async (root, args, context) => {
  //-----create new product-----//
  const newProduct = new productSchema(args.add);

  await newProduct.save();

  return newProduct;
};
