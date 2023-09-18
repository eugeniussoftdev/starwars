import React from "react";

import { Typography } from "@mui/material";

export const Header = ({ title }) => {
  return (
    <Typography variant="h4" align="center" gutterBottom>
      {title}
    </Typography>
  );
};
