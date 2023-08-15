import { Document } from "mongoose";

export interface ITransaction extends Document {
  cost: string;
  products: number[];
  createdAt: Date;
  updatedAt: Date;
}
