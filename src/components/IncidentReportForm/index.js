import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";

import { forms, GREEN } from "../../styles";
import { ADD_INCIDENT_REPORT } from "../../graphql/mutations";
import { GET_TEACHER_STUDENTS } from "../../graphql/query";
import { useAuth } from "../../context/AppProvider";
import { useQuery, useMutation } from "@apollo/client";
import { PageTitle } from "../PageTitle";

export const IncidentReportForm = () => {
  const { user } = useAuth();

  const { loading, error, data } = useQuery(GET_TEACHER_STUDENTS, {
    variables: {
      yearGroupId: user.yearGroup.id,
    },
    pollInterval: 1000,
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
    return <CircularProgress color="warning" />;
  }

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Incident Report Form</PageTitle>

      <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="childName">Select child name</InputLabel>
          <Controller
            control={control}
            name="student"
            render={({ field: { onChange, value } }) => (
              <Select
                autoFocus
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
          color={mutationError ? "error" : "warning"}
        >
          Send Report
        </LoadingButton>

        {!!mutationError && (
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            sx={{ mt: 2, textAlign: "center", color: "warning" }}
          >
            Failed to send report.
          </Typography>
        )}
      </Box>
    </Stack>
  );
};
