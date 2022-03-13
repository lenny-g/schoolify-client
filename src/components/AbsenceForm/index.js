import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
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

import { forms } from "../../styles";
import { GET_PARENTS_CHILDREN } from "../../graphql/query";
import { MAKE_AN_ABSENCE_REQUEST } from "../../graphql/mutations";

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

    navigate("/dashboard", { replace: true });
  };

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        sx={forms.container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ textAlign: "center" }}
        >
          Request Absence
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="student">Select Child</InputLabel>
          <Controller
            control={control}
            name="student"
            render={({ field: { onChange, value } }) => (
              <Select
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
          <InputLabel id="absenceType">Absence type</InputLabel>
          <Select
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
          fullWidth
          type="submit"
          variant="contained"
          sx={forms.loadingButton}
          startIcon={error && <ErrorIcon />}
          color={error ? "error" : "primary"}
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
    </LocalizationProvider>
  );
};
