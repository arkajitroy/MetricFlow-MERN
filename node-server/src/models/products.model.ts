import mongoose, { Schema, Model } from "mongoose";
import { IProduct } from "../@types/schemas/product.interface";

const ProductSchema: Schema<IProduct> = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const ProductModel: Model<IProduct> = mongoose.model<IProduct>(
  "Product",
  ProductSchema
);
export default ProductModel;
