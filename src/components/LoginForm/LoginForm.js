import React, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AppProvider";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

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
  const [executeLogin, { loading, error }] = useMutation(LOGIN);

  const navigate = useNavigate();

  const { setIsLoggedIn, setUser } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (user) => {
    const { data } = await executeLogin({
      variables: {
        input: {
          email: user.email,
          password: user.password,
        },
      },
    });
    if (data) {
      const { token, parent } = data.parentLogin;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(parent));
      setIsLoggedIn(true);
      setUser(parent);

      navigate("/dashboard", { replace: true });
    }
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
        disabled={loading}
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
        fullWidth
        disabled={loading}
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

      {!!error && (
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
