import { Box } from "@mui/material";
import "./App.css";
import { EduExp } from "./components/EduExp";
import { PersonalDetails } from "./components/PersonalDetails";
import { PracExp } from "./components/PracExp";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "#777",
        // height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ bgcolor: "#fff", my: 3, width: "75%", p: 7 }}>
        <PersonalDetails />
        <EduExp />
        <PracExp />
      </Box>
    </Box>
  );
}

export default App;
