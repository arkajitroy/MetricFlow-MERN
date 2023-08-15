import mongoose, { Document, Schema, Model } from "mongoose";
import { IProductStat } from "../@types/schemas/productStats.interface";

const ProductStatSchema: Schema<IProductStat> = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
);

const ProductStatModel: Model<IProductStat> = mongoose.model<IProductStat>(
  "ProductStat",
  ProductStatSchema
);
export default ProductStatModel;
