/** @format */

import productSchema from "../../../db/schema/product.js";
import { isAuthAdmin } from "../../../helpers/isAuth.js";

export default async (root, { update }, context) => {
  const { _id } = update;

  isAuthAdmin(context);
  //-------update the product in the database-------------------------------//
  const response = await productSchema.findByIdAndUpdate(_id, {
    $set: update,
  });

  return response;
};
