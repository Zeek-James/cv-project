import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

export const PracExp = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ mr: 3 }}>
            Experience
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "#888", height: "2.5px" }} />
        </Box>
        <Box sx={{ display: "flex", my: 4 }}>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            Toonifique | Ikeja, Lagos
            <br /> <b>Front End Developer</b>
            <br />
            06/2021 - 01/2022
          </Typography>
          <List sx={{ maxWidth: 900, borderLeft: "solid 1px #222" }}>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Worked extensively with engineering staff to better understand
                  Web based solutions and benefits to projects.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Delivered end-user training on content management systems
                  allowing staff to make easy updates and maintenance to website
                  without developer assistance.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Built In house Java Script Libraries to make products Unique
                  and state of the art.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Established hosting for each website and completed go-live
                  process by uploading sites to host account.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ display: "flex", mb: 4 }}>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            Rejuvenate | Yaba, Lagos
            <br />
            <b>Front End Developer</b>
            <br /> 03/2019 - 06/2021
          </Typography>
          <List sx={{ maxWidth: 900, borderLeft: "solid 1px #222" }}>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Collaborated with customers to determine needs and work
                  through design options.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Leveraged on my Skills on Javascript,Material UI and Next.JS
                  to Work with product designers and product managers to design
                  user interactions in applications.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Identified UX pain points and provide knowledgeable
                  recommendations for implementing unified user experience.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Redesigned sites to enhance navigation and improve visual
                  appeal.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Applied my Skills on Time management to meet deadlines and
                  strict bottlenecks.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Translated concepts into user flows, wireframes, mockups and
                  prototypes to promote positive intuitive designs, site
                  interactions and user experiences.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ display: "flex", mb: 4 }}>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            Gogata | Lekki, Lagos
            <br /> <b>Front End Developer</b>
            <br />
            10/2017 - 03/2019
          </Typography>
          <List sx={{ maxWidth: 900, borderLeft: "solid 1px #222" }}>
            {" "}
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Created successful websites that met requirements for
                  objectives such as load speed and design.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Improved and designed new layouts for Gogata Website using
                  React.JS FrameWork to achieve usability and performance
                  objectives.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Brought mock-ups to life with HTML, CSS and JavaScript.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box sx={{ mb: 10 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ mr: 3 }}>
            Accomplishment
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "blue", height: "2px" }} />
        </Box>
        <Typography variant="body1">
          Drove 40% improvement in 6 months profits through aggressive
          refactoring and Modification. Recognized as Employee of the year for
          outstanding performance and team contributions
        </Typography>
      </Box>
    </Box>
  );
};
