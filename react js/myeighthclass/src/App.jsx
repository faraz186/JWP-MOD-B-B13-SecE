import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ComboBox from "./components/AutoCompleteMUI";   

const App = () => {
  return (
    <Box sx={{ height: "200px", width: "200px", border: "2px solid red" }}>
      <Button variant="contained"> Click me</Button>   
    </Box>
   
    <Stack   
      sx={{
        width: {
          sm: "100%",
          md: "300px",
          lg: "500px",
        },
        height: "200px",
        border: {   
          sm: "2px solid red",
          md: "2px solid blue",
          lg: "2px solid green",
        },
        flexDirection: "row",
      }}
    >
    //   <Box sx={{ backgroundColor: "aqua" }}>
    //     <Typography>Box1</Typography>
    //   </Box>
    //   <Box sx={{ backgroundColor: "aqua" }}>
    //     <Typography>Box2</Typography>
    //   </Box>
    //   <Box>
    //     <WhatsAppIcon />
    //   </Box>

    //   <Box>
    //     <ComboBox />
    //   </Box>
    // </Stack>

    <Grid container sx={{ height: 500 }} spacing={2}>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "cyan" }}>
          Lorem, ipsum dolor.{" "}
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "cyan" }}>
          Lorem, ipsum dolor.{" "}
        </Box>
      </Grid>
    </Grid>
  );
};

export default App;
