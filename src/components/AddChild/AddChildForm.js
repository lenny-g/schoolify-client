import { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";

import { forms } from "../../styles";

const ADD_STUDENT = gql`
  mutation Mutation($input: StudentInputDetails!) {
    addStudent(input: $input) {
      id
      firstName
      lastName
      dob
      yearGroup {
        id
        title
        subjects
      }
    }
  }
`;

const GET_YEAR_GROUP_DATA = gql`
  query Query {
    yearGroups {
      id
      title
    }
  }
`;

export const AddChildForm = () => {
  const { loading, error, data } = useQuery(GET_YEAR_GROUP_DATA);

  const [
    executeAddStudent,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_STUDENT);

  const [dateOfBirth, setDateOfBirth] = useState();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm();

  const value = getValues("enrollDate");

  useEffect(() => {
    register("dob");
  }, [register]);

  useEffect(() => {
    setDateOfBirth(value || null);
  }, [setDateOfBirth, value]);

  const onSubmit = async (studentData) => {
    const { data, error } = await executeAddStudent({
      variables: {
        input: {
          firstName: studentData.childFirstName,
          lastName: studentData.childLastName,
          dob: studentData.dob,
          yearGroup: studentData.yearGroup,
        },
      },
    });

    navigate("/dashboard", { replace: true });
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

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        sx={forms.container}
        spacing={2}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <TextField
            autoFocus
            margin="normal"
            id="childFirstName"
            label="Child's First Name"
            variant="outlined"
            name="childFirstName"
            fullWidth
            {...register("childFirstName", { required: true })}
            error={!!errors.childFirstName}
          />
          <TextField
            margin="normal"
            id="childLastName"
            label="Child's Last Name"
            variant="outlined"
            name="childLastName"
            fullWidth
            {...register("childLastName", { required: true })}
            error={!!errors.childLastName}
          />

          <DesktopDatePicker
            label="Date of Birth"
            inputFormat="MM/dd/yyyy"
            value={dateOfBirth}
            onChange={(value) => {
              setDateOfBirth(value);
              setValue("dob", value, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                {...register("dob", { required: true })}
                error={!!errors.dob}
                margin="normal"
                id="dob"
                variant="outlined"
                name="dob"
                fullWidth
              />
            )}
          />

          <FormControl sx={{ width: 420, mt: 2 }} error={!!errors.yearGroup}>
            <InputLabel id="yearGroup">Year Group</InputLabel>
            <Select
              labelId="yearGroup"
              id="yearGroup"
              fullWidth
              defaultValue=""
              label="Year Group"
              {...register("yearGroup")}
            >
              {data?.yearGroups?.map((yearGroupObj, index) => {
                return (
                  <MenuItem key={index} value={yearGroupObj.id}>
                    {yearGroupObj.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <LoadingButton
            loading={mutationLoading}
            loadingIndicator="Loading..."
            variant="contained"
            fullWidth
            type="submit"
            sx={styles.loadingButton}
            startIcon={mutationError && <ErrorIcon />}
            color={mutationError ? "error" : "primary"}
          >
            Add Child
          </LoadingButton>

          {!!mutationError && (
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ mt: 2, textAlign: "center", color: "#d32f2f" }}
            >
              Failed to add child.
            </Typography>
          )}
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};
