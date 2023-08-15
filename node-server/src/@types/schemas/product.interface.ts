import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  supply: number;
  createdAt: Date;
  updatedAt: Date;
}
