import { Request, Response } from "express";
import UserModel from "../../../models/user.model";

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await UserModel.find({ role: "user" }).select(
      "-password"
    );
    res.status(200).json(customers);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
