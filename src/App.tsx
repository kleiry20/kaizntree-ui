import React from "react";
import "./App.css";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import ResponsiveDrawer from "./components/Drawer/Drawer";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}>
        <div>
        <Button variant="contained" color="primary">
          Hello Material-UI
        </Button>
      </div>
      </ThemeProvider> */}
      <ResponsiveDrawer />
      {/* <div className="app-div">
        <ResponsiveDrawer />
      </div> */}
    </>
  );
};

export default App;
