import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import LoadingButton from "@mui/lab/LoadingButton";

import { item, colors } from "../../styles";

const childNameOptions = [
  { value: "child1", title: "Child1" },
  { value: "child2", title: "Child2" },
];

export const IncidentReportForm = () => {
  // const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,

    control,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const styles = {
    loadingButton: { marginTop: 3, marginBottom: 2 },
    errorContainer: {
      marginTop: 2,
      color: "#d32f2f",
      textAlign: "center",
    },
  };

  return (
    <Grid
      container
      component="form"
      sx={item.outerContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ textAlign: "center" }}
        >
          Incident . Report . Form
        </Typography>
      </Grid>
      <Box sx={colors.green}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel color="success" id="childName">
            Select child name
          </InputLabel>
          <Select
            color="success"
            defaultValue={"child1"}
            labelId="childName"
            id="childName"
            label="childName"
            {...register("childName")}
            autoFocus
            // disabled={loading}
          >
            {childNameOptions.map((childName, index) => (
              <MenuItem key={index} value={childName.value}>
                {childName.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          color="success"
          autoFocus
          margin="normal"
          id="incidentTitle"
          label="Incident Title"
          variant="outlined"
          name="incidentTitle"
          fullWidth
          {...register("incidentTitle", { required: true })}
          error={!!errors.incidentTitle}
        />
        <TextField
          color="success"
          margin="normal"
          id="incidentDetail"
          label="Incident details"
          variant="outlined"
          name="incidentDetail"
          multiline
          rows={4}
          fullWidth
          {...register("incidentDetail", { required: true })}
          error={!!errors.incidentDetail}
        />

        <LoadingButton
          // loading={mutationLoading}
          // loadingIndicator='Loading...'
          variant="contained"
          type="submit"
          sx={styles.loadingButton}
          // startIcon={mutationError && <ErrorIcon />}
          // color={mutationError ? 'error' : 'warning'}
        >
          Send Report
        </LoadingButton>

        {/* {!!mutationError && ( */}
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          sx={{ mt: 2, textAlign: "center", color: "secondary" }}
        >
          Failed to send report.
        </Typography>
        {/* )} */}
      </Box>
    </Grid>
  );
};
