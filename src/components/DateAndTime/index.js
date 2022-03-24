import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";

export const DateAndTime = () => {
  const [date, setDate] = useState(new Date().toUTCString());

  useEffect(() => {
    document.title = date;
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date().toUTCString().split(" ").splice(0, 5).join(" "));
  };

  return (
    <Box>
      <Typography variant="h6" textAlign={"center"}>
        {date}
      </Typography>
    </Box>
  );
};
