import { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import * as React from "react";
import { Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

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
  const [executeAddStudent] = useMutation(ADD_STUDENT);
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

    // navigate("/dashboard", { replace: true });

    console.log(data);
  };

  // const validateForm = (formErrors) => {
  //   return (
  //     !!formErrors.dob ||
  //     !!formErrors.yearGroup ||
  //     !!formErrors.childFirstName ||
  //     !!formErrors.childLastName ||
  //     !!formErrors.relationship
  //   );
  // };

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
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
                margin="normal"
                id="dob"
                variant="outlined"
                name="dob"
                fullWidth
                error={!!errors.dob}
              />
            )}
          />

          <FormControl sx={{ width: 420, mt: 2 }} error={!!errors.yearGroup}>
            <InputLabel id="yearGroup">Year Group</InputLabel>
            <Select
              labelId="yearGroup"
              id="yearGroup"
              // value={yearGroup}
              // onChange={handleChange}
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

          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Complete
          </Button>
          {/* {validateForm(errors) && (
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            sx={{ mt: 2, color: "#d32f2f" }}
          >
            Form incomplete. All fields are required*
          </Typography>
        )} */}
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};
