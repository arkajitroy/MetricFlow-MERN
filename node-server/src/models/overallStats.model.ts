import mongoose, { Schema, Model } from "mongoose";
import { IOverallStats } from "../@types/schemas/overallStats.interface";

const OverallStatSchema: Schema<IOverallStats> = new mongoose.Schema(
  {
    totalCustomers: Number,
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
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const OverallStatModel: Model<IOverallStats> = mongoose.model<IOverallStats>(
  "OverallStat",
  OverallStatSchema
);
export default OverallStatModel;
