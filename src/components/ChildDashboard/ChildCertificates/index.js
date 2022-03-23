import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const ChildCertificates = ({ childData }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Typography
        className="headingFont"
        variant="subtitle1"
        gutterBottom
        align="center"
      >
        Certificates:
      </Typography>
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-around">
        <Avatar variant="square" sx={{ m: "10px" }}></Avatar>
        <Avatar variant="square" sx={{ m: "10px" }}></Avatar>
        <Avatar variant="square" sx={{ m: "10px" }}></Avatar>
      </Stack>
    </Stack>
  );
};
