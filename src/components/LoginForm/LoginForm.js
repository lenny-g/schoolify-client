import React, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const LOGIN = gql`
  mutation Mutation($input: ParentLoginInput) {
    parentLogin(input: $input) {
      token
      parent {
        title
        firstName
        lastName
        email
      }
    }
  }
`;

export const LoginForm = () => {
  const [executeLogin, { data, loading, error }] = useMutation(LOGIN);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (data) {
      const { token, parent } = data.parentLogin;
      console.log(token, parent);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(parent));
    }
  }, [data]);

  const onSubmit = async (data) => {
    await executeLogin({
      variables: {
        input: {
          email: data.email,
          password: data.password,
        },
      },
    });
  };

  const ValidateForm = (formErrors) => {
    return !!formErrors.email || !!formErrors.password;
  };

  return (
    <Box
      component="form"
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        margin="normal"
        id="email"
        label="Email"
        variant="outlined"
        name="email"
        autoFocus
        fullWidth
        {...register("email", { required: true })}
        error={!!errors.email}
      />
      <TextField
        margin="normal"
        id="password"
        label="Password"
        variant="outlined"
        name="password"
        type="password"
        autoFocus
        fullWidth
        {...register("password", { required: true })}
        error={!!errors.password}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Login
      </Button>
      <Link
        component={RouterLink}
        variant="body2"
        to="/sign-up"
        underline="none"
      >
        Dont have an account? Signup
      </Link>
      {ValidateForm(errors) && (
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          sx={{ mt: 2, textAlign: "center", color: "#d32f2f" }}
        >
          Failed to login, please enter valid email or password.
        </Typography>
      )}
    </Box>
  );
};
