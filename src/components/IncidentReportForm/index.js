import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";

import { item, colors } from "../../styles";
import { ADD_INCIDENT_REPORT } from "../../graphql/mutations";
import { GET_TEACHER_STUDENTS } from "../../graphql/query";
// import { useAuth } from "../../context/AppProvider";
import { useQuery, useMutation } from "@apollo/client";

export const IncidentReportForm = () => {
  //   const { user } = useAuth();
  const yearGroupId = JSON.parse(localStorage.getItem("user")).yearGroup.id;
  const { loading, error, data } = useQuery(GET_TEACHER_STUDENTS, {
    variables: {
      yearGroupId: yearGroupId,
    },
  });

  const [
    executeCreateIncidentReport,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_INCIDENT_REPORT);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    await executeCreateIncidentReport({
      variables: {
        input: {
          title: formData.incidentTitle,
          description: formData.incidentDetail,
          studentId: formData.student,
        },
      },
    });

    navigate("/incident-report/view/teacher", { replace: true });
  };

  const styles = {
    loadingButton: { marginTop: 3, marginBottom: 2 },
    errorContainer: {
      marginTop: 2,
      color: "#d32f2f",
      textAlign: "center",
    },
  };

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <LinearProgress style={{ backgroundColor: "purple" }} />;
  }

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
          <Controller
            control={control}
            name="student"
            render={({ field: { onChange, value } }) => (
              <Select
                autoFocus
                color="warning"
                labelId="student"
                id="student"
                label="Select Student"
                value={value || ""}
                disabled={mutationLoading}
                onChange={onChange}
                {...register("student", { required: true })}
                error={!!errors.student}
              >
                {data?.teacherStudents?.map((each, index) => (
                  <MenuItem key={index} value={each.id}>
                    {each.firstName} {each.lastName}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <TextField
          color="success"
          margin="normal"
          id="incidentTitle"
          label="Incident Title"
          variant="outlined"
          name="incidentTitle"
          disabled={mutationLoading}
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
          disabled={mutationLoading}
          rows={4}
          fullWidth
          {...register("incidentDetail", { required: true })}
          error={!!errors.incidentDetail}
        />

        <LoadingButton
          loading={mutationLoading}
          loadingIndicator="Loading..."
          variant="contained"
          type="submit"
          sx={styles.loadingButton}
          startIcon={mutationError && <ErrorIcon />}
          color={mutationError ? "error" : "secondary"}
        >
          Send Report
        </LoadingButton>

        {!!mutationError && (
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            sx={{ mt: 2, textAlign: "center", color: "secondary" }}
          >
            Failed to send report.
          </Typography>
        )}
      </Box>
    </Grid>
  );
};
