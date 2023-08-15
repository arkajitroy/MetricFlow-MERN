import { Request, Response } from "express";
import ProductModel from "../../../models/products.model";
import ProductStatModel from "../../../models/productStats.model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();

    const productsWithStats = await Promise.all(
      products.map(async (product: any) => {
        const stat = await ProductStatModel.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
