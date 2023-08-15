import { Document } from "mongoose";
import { Role } from "../role.types";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  city?: string;
  state?: string;
  country?: string;
  occupation?: string;
  phoneNumber?: string;
  transactions?: any[]; // You can replace "any" with a specific type if needed
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
