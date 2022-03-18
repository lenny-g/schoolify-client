import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { colors, forms, item } from "../../styles";
import { GET_PARENTS_CHILDREN } from "../../graphql/query";
import { MAKE_AN_ABSENCE_REQUEST } from "../../graphql/mutations";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const appointmentOptions = ["Medical", "Dental", "Other"];

export const AbsenceForm = () => {
  const { loading, error, data } = useQuery(GET_PARENTS_CHILDREN);
  const studentOptions = data?.parentsChildren?.children;

  const [
    executeAbsenceRequest,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(MAKE_AN_ABSENCE_REQUEST);

  const [absenceDate, setAbsenceDate] = useState(null);

  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
    control,
  } = useForm();

  const value = getValues("absenceDate");
  const navigate = useNavigate();

  useEffect(() => {
    register("dateOfAbsence");
  }, [register]);

  useEffect(() => {
    setAbsenceDate(value || null);
  }, [setAbsenceDate, value]);

  const [absenceType, setAbsenceType] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  const onSubmit = async (formData) => {
    await executeAbsenceRequest({
      variables: {
        input: {
          type: formData.absenceType,
          description: formData.description,
          dateTime: formData.dateOfAbsence,
          studentId: formData.student,
        },
      },
    });

    navigate("/absenceRequest/view", { replace: true });
  };

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <LinearProgress style={{ backgroundColor: "purple" }} />;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        component="form"
        container
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
            Absence . Request . Form
          </Typography>
        </Grid>
        <Box sx={colors.yellow}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="student" color="warning">
              Select Child
            </InputLabel>
            <Controller
              control={control}
              name="student"
              render={({ field: { onChange, value } }) => (
                <Select
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
                  {studentOptions?.map(({ firstName, lastName, id }, index) => (
                    <MenuItem key={index} value={id}>
                      {firstName} {lastName}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="absenceType" color="warning">
              Absence type
            </InputLabel>
            <Select
              color="warning"
              labelId="absenceType"
              id="absenceType"
              label="Absence Type"
              defaultValue="Medical"
              disabled={mutationLoading}
              onChange={(event) => {
                setAbsenceType(event.target.value);
              }}
              {...register("absenceType")}
              error={!!errors.absenceType}
            >
              {appointmentOptions.map((title, index) => {
                return (
                  <MenuItem key={index} value={title}>
                    {title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField
            color="warning"
            id="description"
            label="Description"
            multiline
            fullWidth
            rows={4}
            {...register("description", { required: true })}
            error={!!errors.description}
            disabled={mutationLoading}
          />

          <DateTimePicker
            label="Please select date and time"
            inputFormat="MM/dd/yyyy hh:mm"
            value={absenceDate}
            disabled={mutationLoading}
            onChange={(value) => {
              setAbsenceDate(value);
              setValue("dateOfAbsence", value, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                {...register("dateOfAbsence", { required: true })}
                error={!!errors.dateOfAbsence}
                color="warning"
                margin="normal"
                id="dateOfAbsence"
                variant="outlined"
                name="dateOfAbsence"
                fullWidth
              />
            )}
          />

          <LoadingButton
            loading={mutationLoading}
            disabled={mutationLoading}
            type="submit"
            variant="contained"
            sx={forms.loadingButton}
            startIcon={error && <ErrorIcon />}
            color={error ? "error" : "secondary"}
          >
            Send Request
          </LoadingButton>
          {!!mutationError && (
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={forms.errorContainer}
            >
              Failed to request absence, please try again.
            </Typography>
          )}
        </Box>
      </Grid>
    </LocalizationProvider>
  );
};
