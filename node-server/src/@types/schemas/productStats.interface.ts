import { Document } from "mongoose";
import { DailyData, MonthlyData } from "../dataStats.types";

export interface IProductStat extends Document {
  productId: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  year: number;
  monthlyData: MonthlyData[];
  dailyData: DailyData[];
  createdAt: Date;
  updatedAt: Date;
}
