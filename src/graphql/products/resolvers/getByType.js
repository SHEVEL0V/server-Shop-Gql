/** @format */
import productSchema from "../../../db/schema/product.js";

export default async (root, args, context) => {
  const { type } = args;

  //----------find similar product by type----------//
  const similar = await productSchema
    .find({ type })
    .sort({ rating: -1 })
    .limit(7);

  return similar;
};
