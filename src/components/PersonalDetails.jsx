import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

export const PersonalDetails = () => {
  return (
    <Box>
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            border: "solid grey 1px",
            borderRadius: "50%",
            p: 3,
            color: "#444",
          }}
        >
          IJ
        </Typography>
        <Typography variant="h2" sx={{ my: 3, color: "#444" }}>
          ISAAC JAMES
        </Typography>
        <Typography variant="body1">
          chizuruokej@gmail.com | 2349029619360 | Frontend Software Developer
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", color: "#333" }}>
          <Typography sx={{ my: 2, mr: 3 }}>
            <b>LINKEDIN: </b>
            <a href="https://www.linkedin.com/in/james-isaac-337b2815a/">
              https://www.linkedin.com/in/ james-isaac-337b2815a
            </a>
          </Typography>
          <Typography>
            <b>GITHUB: </b>
            <a href="https://github.com/Zeek-James">
              https://github.com/Zeek-James
            </a>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ mr: 3 }}>
            Summary
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "blue", height: "2px" }} />
        </Box>

        <Typography variant="h6" sx={{ ml: 4, lineHeight: 2 }}>
          Experience includes collaborating in team-driven environments to
          create high-performance and scallable websites that <br />
          customers and business both love. Familiar with applicable design and
          user practices.
        </Typography>
      </Box>
      <Box sx={{ mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ mr: 3 }}>
            Skills
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "#888", height: "2.5px" }} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <List sx={{ mr: 60 }}>
            <ListItem>
              <Typography variant="body1">Version Control (GIT)</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">UI Test (Automation)</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Next.JS</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">React.JS</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Vanilla Javascript</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Material UI</Typography>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography variant="body1">Redux</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">HTML</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">CSS</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Debugging</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Time management</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Communication</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
