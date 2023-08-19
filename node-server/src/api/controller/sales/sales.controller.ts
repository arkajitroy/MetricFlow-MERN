import { Response, Request } from "express";
import OverallStatModel from "../../../models/overallStats.model";
import { IOverallStats } from "../../../@types/schemas/overallStats.interface";

export const getSales = async (req: Request, res: Response) => {
  try {
    const overallStats: IOverallStats[] = await OverallStatModel.find();

    res.status(200).json(overallStats[0]);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
