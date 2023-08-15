import { Request, Response } from "express";
import { countryToAlpha3 } from "country-to-iso";
import UserModel from "../../../models/user.model";

export const getGeography = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();

    const mappedLocations: Record<string, number> = users.reduce(
      (acc, { country }) => {
        const countryISO3 = countryToAlpha3(country as string);
        if (!acc[countryISO3]) {
          acc[countryISO3] = 0;
        }
        acc[countryISO3]++;
        return acc;
      },
      {}
    );

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
