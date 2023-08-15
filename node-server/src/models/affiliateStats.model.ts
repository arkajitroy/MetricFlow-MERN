import mongoose, { Schema, Model } from "mongoose";
import { IAffiliateStat } from "../@types/schemas/affiliateStats.interface";

const AffiliateStatSchema: Schema<IAffiliateStat> = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true }
);

const AffiliateStatModel: Model<IAffiliateStat> =
  mongoose.model<IAffiliateStat>("AffiliateStat", AffiliateStatSchema);
export default AffiliateStatModel;
