import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";

import { render } from "react-dom";

class App extends Component {
  constructor() {
    this.state = {
      currentDateTime: Date().toLocaleString(),
    };
  }

  render() {
    return (
      <Box>
        <Typography>{this.state.currentDateTime}</Typography>
      </Box>
    );
  }
}

render(<App />, document.getElementById("root"));
