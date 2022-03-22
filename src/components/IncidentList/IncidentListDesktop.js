import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { item, colors } from "../../styles";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useForm, Controller } from "react-hook-form";

const childOptions = [
  { value: "billy", title: "Billy" },
  { value: "bob", title: "Bob" },
];

export const IncidentListDesktop = () => {
  const {
    register,

    control,
    formState: { errors },
  } = useForm();

  return (
    <Box>
      <Grid
        item
        xs={12}
        sx={{
          padding: "10px",
          display: "flex",
        }}
      >
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="child">Child</InputLabel>
          <Select
            defaultValue={"parent"}
            labelId="child"
            id="child"
            label="child"
            {...register("child")}
            autoFocus
          >
            {childOptions.map((child, index) => (
              <MenuItem key={index} value={child.value}>
                {child.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "10px",
        }}
      >
        <Box
          sx={{
            padding: "10px",
            backgroundColor: "lightblue",
            borderRadius: "10px",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ textAlign: "left" }}>
                Miss Jones
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ textAlign: "right" }}>
                18.03.2022
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="subtitle1">Billy had a fall</Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "10px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "10px",
            backgroundColor: "lightblue",
            borderRadius: "10px",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ textAlign: "left" }}>
                Miss Jones
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ textAlign: "right" }}>
                18.03.2022
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="subtitle1">Billy's PE Kit</Typography>
        </Box>
      </Grid>
    </Box>
  );
};
