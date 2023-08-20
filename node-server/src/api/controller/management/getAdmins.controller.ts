import { Types } from "mongoose";
import { Request, Response } from "express";
import UserModel from "../../../models/user.model";
import TransactionModel from "../../../models/transaction.model";
import { IUser } from "../../../@types/schemas/user.interface.js";

export const getAdmins = async (req: Request, res: Response): Promise<void> => {
  try {
    const admins: IUser[] = await UserModel.find({ role: "admin" }).select(
      "-password"
    );
    res.status(200).json(admins);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPerformance = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const userWithStats: any = await UserModel.aggregate([
      { $match: { _id: new Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },
    ]);

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id: any) => {
        return TransactionModel.findById(id);
      })
    );
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction: any) => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
