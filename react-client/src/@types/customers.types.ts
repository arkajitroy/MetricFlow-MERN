import { Role } from "./roles.types";

export type Customer = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  occupation: string;
  role: Role;
};
