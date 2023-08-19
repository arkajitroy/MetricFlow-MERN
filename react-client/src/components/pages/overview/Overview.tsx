import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import { Header, OverviewChart } from "../..";

const Overview: React.FC = () => {
  const [view, setView] = useState<string>("units");

  const handleViewChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    if (typeof e.target.value === "string") {
      setView(e.target.value);
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select value={view} label="View" onChange={handleViewChange}>
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
