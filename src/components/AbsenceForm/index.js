import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";
import Typography from "@mui/material/Typography";

import { forms } from "../../styles";

const appointmentOptions = ["Medical", "Dental", "Other"];
const studentOptions = ["Bob", "Dan", "Tobby"];

export const AbsenceForm = () => {
  //   const [{ loading, error }] = useMutation();
  const [absenceDate, setAbsenceDate] = useState();
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
    control,
  } = useForm();

  const value = getValues("enrollDate");

  useEffect(() => {
    register("dateOfAbsence");
  }, [register]);

  useEffect(() => {
    setAbsenceDate(value || null);
  }, [setAbsenceDate, value]);

  const [absenceType, setAbsenceType] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
  };

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
        <FormControl sx={{ minWidth: 100, mb: 2 }}>
          <InputLabel id="student">Select Child</InputLabel>
          <Select
            labelId="student"
            id="student"
            label="Select Student"
            defaultValue="Bob"
            autoFocus
            // disabled={loading}
            onChange={(event) => {
              setSelectedStudent(event.target.value);
              console.log(event.target.defaultValue);
            }}
            {...register("student")}
            error={!!errors.student}
          >
            {studentOptions.map((title, index) => {
              return (
                <MenuItem key={index} value={title}>
                  {title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 100, mb: 2 }}>
          <InputLabel id="absenceType">Absence type</InputLabel>
          <Select
            labelId="absenceType"
            id="absenceType"
            label="Absence Type"
            defaultValue="Medical"
            autoFocus
            // disabled={loading}
            onChange={(event) => {
              setAbsenceType(event.target.value);
              console.log(event.target.defaultValue);
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
          //   disabled={loading}
        />

        <DateTimePicker
          label="Please select date and time"
          inputFormat="MM/dd/yyyy hh:mm"
          value={absenceDate}
          //   disabled={loading}
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
          //   loading={loading}
          //   disabled={loading}
          fullWidth
          type="submit"
          variant="contained"
          sx={forms.loadingButton}
          //   startIcon={error && <ErrorIcon />}
          //   color={error ? "error" : "primary"}
        >
          Sign Up
        </LoadingButton>
        {/* {!!error && ( */}
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          sx={forms.errorContainer}
        >
          Failed to request absence, please try again.
        </Typography>
        {/* )} */}
      </Box>
    </LocalizationProvider>
  );
};
