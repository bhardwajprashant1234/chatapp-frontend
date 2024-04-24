import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { lodadark } from "../constants/color";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: `linear-gradient(145deg, #e0ffff, #fafad2, 	#90ee90)`, // Gradient background
      }}
    >
      <Typography variant="h4" color="black" textAlign="center" sx={{ opacity: 200, marginLeft: "2rem" }}>
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
