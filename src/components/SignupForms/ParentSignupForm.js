import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";

const SIGNUP = gql`
  mutation Mutation($input: SignupInput) {
    parentSignUp(input: $input) {
      id
      title
      firstName
      lastName
      email
    }
  }
`;

const titleOptions = ["Mr", "Mrs", "Miss", "Ms", "Dr"];

export const ParentSignupForm = () => {
  const [executeSignUp, { loading, error }] = useMutation(SIGNUP);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      const { data, error } = await executeSignUp({
        variables: {
          input: {
            postCode: formData.postCode,
            city: formData.city,
            street: formData.street,
            houseNumber: formData.houseNumber,
            password: formData.password,
            email: formData.personalEmail,
            phoneNumber: formData.phoneNumber,
            lastName: formData.lastName,
            firstName: formData.firstName,
            title: formData.title,
          },
        },
      });

      if (data) {
        navigate("/login", { replace: true });
      }
    }
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
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      spacing={2}
    >
      <Grid container spacing={2}>
        <FormControl sx={{ width: 420 }}>
          <InputLabel id="title">Title</InputLabel>
          <Select
            labelId="title"
            id="title"
            label="Title"
            {...register("title")}
            defaultValue="Mr"
            autoFocus
            disabled={loading}
          >
            {titleOptions.map((title, index) => {
              return (
                <MenuItem key={index} value={title}>
                  {title}
                </MenuItem>
              );
            })}
          </Select>
          {errors.title && "Please select your title"}
        </FormControl>
        <TextField
          margin="normal"
          id="firstName"
          label="First Name"
          variant="outlined"
          name="firstName"
          fullWidth
          disabled={loading}
          {...register("firstName", { required: true })}
          error={!!errors.firstName}
        />

        <TextField
          margin="normal"
          id="lastName"
          label="Last Name"
          variant="outlined"
          name="lastName"
          fullWidth
          disabled={loading}
          {...register("lastName", { required: true })}
          error={!!errors.lastName}
        />

        <TextField
          margin="normal"
          id="personalEmail"
          label="Personal Email"
          variant="outlined"
          name="personalEmail"
          fullWidth
          disabled={loading}
          {...register("personalEmail", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          error={!!errors.personalEmail}
        />

        <TextField
          margin="normal"
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          fullWidth
          disabled={loading}
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          })}
          error={!!errors.password}
        />
        {errors.password &&
          "Password must be 8 characters, and include both lower and uppercase characters, with 1 special character required"}

        <TextField
          margin="normal"
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          name="confirmPassword"
          type="password"
          fullWidth
          disabled={loading}
          {...register("confirmPassword", { required: true })}
          error={!!errors.confirmPassword}
        />
        {errors?.confirmPassword?.message}

        <TextField
          margin="normal"
          id="houseNumber"
          label="House Number"
          variant="outlined"
          name="houseNumber"
          fullWidth
          disabled={loading}
          {...register("houseNumber", { required: true })}
          error={!!errors.houseNumber}
        />

        <TextField
          margin="normal"
          id="street"
          label="Street Name"
          variant="outlined"
          name="street"
          fullWidth
          disabled={loading}
          {...register("street", { required: true })}
          error={!!errors.street}
        />
        <TextField
          margin="normal"
          id="city"
          label="City"
          variant="outlined"
          name="city"
          fullWidth
          disabled={loading}
          {...register("city", { required: true })}
          error={!!errors.city}
        />

        <TextField
          margin="normal"
          id="postCode"
          label="Post Code"
          variant="outlined"
          name="postCode"
          fullWidth
          disabled={loading}
          {...register("postCode", { required: true })}
          error={!!errors.postCode}
        />

        <TextField
          margin="normal"
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          fullWidth
          disabled={loading}
          {...register("phoneNumber", { required: true })}
          error={!!errors.phoneNumber}
        />

        <LoadingButton
          loading={loading}
          loadingIndicator="Loading..."
          variant="contained"
          fullWidth
          type="submit"
          sx={styles.loadingButton}
          startIcon={error && <ErrorIcon />}
          color={error ? "error" : "primary"}
        >
          Sign Up
        </LoadingButton>
      </Grid>
    </Box>
  );
};
