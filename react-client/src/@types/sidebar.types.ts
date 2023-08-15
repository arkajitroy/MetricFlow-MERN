import { Dispatch, SetStateAction } from "react";

export type SidebarProps = {
  user: string;
  isNonMobile: boolean;
  drawerWidth: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};
