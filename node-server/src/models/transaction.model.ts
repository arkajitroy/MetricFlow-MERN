import mongoose, { Schema, Model } from "mongoose";
import { ITransaction } from "../@types/schemas/transaction.interface";

const TransactionSchema: Schema<ITransaction> = new mongoose.Schema(
  {
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const TransactionModel: Model<ITransaction> = mongoose.model<ITransaction>(
  "Transaction",
  TransactionSchema
);
export default TransactionModel;
