/** @format */
import productSchema from "../../../db/schema/product.js";
import { isAuthAdmin } from "../../../helpers/isAuth.js";

export default async (root, { ids }, context) => {
  isAuthAdmin(context);
  //-------remove the product in the database-------------------------------//
  const res = await Promise.all(
    ids.map(async (id) => await productSchema.findByIdAndDelete(id))
  );

  return res;
};
