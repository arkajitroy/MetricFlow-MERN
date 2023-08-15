import { Document } from "mongoose";
import { DailyData, MonthlyData } from "../dataStats.types";

interface SalesByCategory extends Map<string, number> {}

export interface IOverallStats extends Document {
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  year: number;
  monthlyData: MonthlyData[];
  dailyData: DailyData[];
  salesByCategory: SalesByCategory;
  createdAt: Date;
  updatedAt: Date;
}
