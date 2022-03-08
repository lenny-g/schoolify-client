import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

export const ParentSignupForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      console.log("OOPS");
    }
  };

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
            defaultValue="mr"
          >
            <MenuItem value="mr">Mr</MenuItem>
            <MenuItem value="mrs">Mrs</MenuItem>
            <MenuItem value="miss">Miss</MenuItem>
            <MenuItem value="ms">Ms</MenuItem>
            <MenuItem value="dr">Dr</MenuItem>
          </Select>
          {errors.title && "Please select your title"}
        </FormControl>
        <TextField
          margin="normal"
          id="firstName"
          label="First Name"
          variant="outlined"
          name="firstName"
          autoFocus
          fullWidth
          {...register("firstName", { required: true })}
        />
        {errors.firstName && "First name is required"}

        <TextField
          margin="normal"
          id="lastName"
          label="Last Name"
          variant="outlined"
          name="lastName"
          autoFocus
          fullWidth
          {...register("lastName", { required: true })}
        />
        {errors.lastName && "Last name is required"}

        <TextField
          margin="normal"
          id="personalEmail"
          label="Personal Email"
          variant="outlined"
          name="personalEmail"
          autoFocus
          fullWidth
          {...register("personalEmail", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.personalEmail && "Please enter a valid email"}

        <TextField
          margin="normal"
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          autoFocus
          fullWidth
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          })}
        />
        {errors.password &&
          "Password must be 8 characters, and include both lower and uppercase characters, with 1 special character required"}

        <TextField
          margin="normal"
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          name="confirmPassword"
          type="confirmPassword"
          autoFocus
          fullWidth
          {...register("confirmPassword", { required: true })}
        />
        {errors?.confirmPassword?.message}

        <TextField
          margin="normal"
          id="houseNumber"
          label="House Number"
          variant="outlined"
          name="houseNumber"
          autoFocus
          fullWidth
          {...register("houseNumber", { required: true })}
        />
        {errors.houseNumber && "Please enter your house number"}
        <TextField
          margin="normal"
          id="street"
          label="Street Name"
          variant="outlined"
          name="street"
          autoFocus
          fullWidth
          {...register("street", { required: true })}
        />
        {errors.street && "Please enter your street name"}
        <TextField
          margin="normal"
          id="city"
          label="City"
          variant="outlined"
          name="city"
          autoFocus
          fullWidth
          {...register("city", { required: true })}
        />
        {errors.city && "Please enter your city"}
        <TextField
          margin="normal"
          id="postCode"
          label="Post Code"
          variant="outlined"
          name="postCode"
          autoFocus
          fullWidth
          {...register("postCode", { required: true })}
        />
        {errors.postCode && "Please enter a valid post code"}
        <TextField
          margin="normal"
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          autoFocus
          fullWidth
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && "Telephone number is required"}

        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Next
        </Button>
      </Grid>
    </Box>
  );
};
