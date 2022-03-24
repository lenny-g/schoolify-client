import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <Box>
      <Stack alignItems="center">
        <CircularProgress color="warning" />
      </Stack>
    </Box>
  );
};
