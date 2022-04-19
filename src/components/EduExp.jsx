import { Box, Typography } from "@mui/material";
import React from "react";

export const EduExp = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ mr: 3 }}>
          Education
        </Typography>
        <Box sx={{ width: "100%", bgcolor: "#888", height: "2px" }} />
      </Box>
      <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{ ml: 4, lineHeight: 2, color: "#444", flexGrow: 1 }}
        >
          Michael Okpara University | Abia State <b>Bachelor of Science </b>
          in Industrial Technology
        </Typography>
        <Typography>08/2018</Typography>
      </Box>{" "}
      <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{ ml: 4, lineHeight: 2, color: "#444", flexGrow: 1 }}
        >
          Saint Bridget's College | Abia State
        </Typography>
        <Typography>08/2012</Typography>
      </Box>
      <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{ ml: 4, lineHeight: 2, color: "#444", flexGrow: 1 }}
        >
          Saint Bridget's Primary School | Abia State
        </Typography>
        <Typography>08/2006</Typography>
      </Box>
    </Box>
  );
};
