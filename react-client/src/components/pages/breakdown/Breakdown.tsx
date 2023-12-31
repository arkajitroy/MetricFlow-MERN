import React from "react";
import { Box } from "@mui/material";
import { BreakdownPieChart, Header } from "../..";

const Breakdown: React.FC<{}> = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownPieChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
