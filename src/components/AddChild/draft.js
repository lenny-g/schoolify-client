import { gql, useMutation } from "@apollo/client";
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

const ADD_STUDENT = gql`
  mutation AddStudent($input: StudentInputDetails) {
    addStudent(input: $input) {
      id
      firstName
      lastName
      dob
    }
  }
`;

const relationshipOptions = ["Mother", "Father", "Guardian"];

const yearGroupOptions = ["3", "4", "5", "6"];

export const AddChildForm = () => {
  const [executeSignUp] = useMutation(ADD_STUDENT);

  const navigate = useNavigate();

  // const [yearGroup, setYearGroup] = React.useState("");
  // const [relationship, setRelationship] = React.useState("");
  // const [checked, setChecked] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (studentData) => {
    console.log(studentData);
    const { data, error } = await executeSignUp({
      variables: {
        input: {
          firstName: studentData.childFirstName,
          lastName: studentData.childLastName,
          dob: studentData.dob,
          // yearGroup: studentData.yearGroup,
          // relationship: studentData.relationship,
        },
      },
    });

    console.log(data);

    if (data) {
      navigate("/dashboard", { replace: true });
    }
  };

  // const handleChange = (event) => {
  //   setYearGroup(event.target.value);
  //   setRelationship(event.target.value);
  //   setChecked(event.target.checked);

  //   console.log(yearGroup);
  // };

  const ValidateForm = (formErrors) => {
    return (
      !!formErrors.dob ||
      !!formErrors.yearGroup ||
      !!formErrors.childFirstName ||
      !!formErrors.childLastName ||
      !!formErrors.relationship
    );
  };

  return (
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
          margin="normal"
          id="childFirstName"
          label="Child's First Name"
          variant="outlined"
          name="childFirstNAme"
          autoFocus
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
          autoFocus
          fullWidth
          {...register("childLastName", { required: true })}
          error={!!errors.childLastName}
        />
        <TextField
          margin="normal"
          id="dob"
          label="Date of Birth"
          variant="outlined"
          name="dob"
          type="dob"
          autoFocus
          fullWidth
          {...register("dob", { required: true })}
          error={!!errors.dob}
        />
        <FormControl sx={{ width: 420, mt: 2 }} error={!!errors.yearGroup}>
          <InputLabel id="yearGroup">Year Group</InputLabel>
          <Select
            labelId="yearGroup"
            id="yearGroup"
            // value={yearGroup}
            // onChange={handleChange}
            fullWidth
            defaultValue="3"
            label="Year Group"
            {...register("yearGroup")}
          >
            {yearGroupOptions.map((yearGroup, index) => {
              return (
                <MenuItem key={index} value={yearGroup}>
                  {yearGroup}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 420, mt: 2 }} error={!!errors.relationship}>
          <InputLabel id="relationship">Relationship</InputLabel>
          <Select
            labelId="relationship"
            id="relationship"
            // value={relationship}
            // onChange={handleChange}
            fullWidth
            defaultValue="Mother"
            label="Relationship"
            {...register("relationship")}
          >
            {relationshipOptions.map((relationship, index) => {
              return (
                <MenuItem key={index} value={relationship}>
                  {relationship}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Complete
        </Button>
        {ValidateForm(errors) && (
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            sx={{ mt: 2, color: "#d32f2f" }}
          >
            Form incomplete. All fields are required*
          </Typography>
        )}
      </Grid>
    </Box>
  );
};
