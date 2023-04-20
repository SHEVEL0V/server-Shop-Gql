/** @format */

import productSchema from "../../../db/schema/product.js";

export default async (root, { update }, context) => {
  const { id } = update;

  //-------update the product in the database-------------------------------//
  const response = await productSchema.findByIdAndUpdate(id, {
    $set: update,
  });

  return response;
};
