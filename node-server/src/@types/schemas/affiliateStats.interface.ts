import mongoose, { Document } from "mongoose";

export interface IAffiliateStat extends Document {
  userId: mongoose.Types.ObjectId;
  affiliateSales: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
