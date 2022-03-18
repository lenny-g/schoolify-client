import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../context/AppProvider";
import { LOGIN_USER } from "../../graphql/mutations";
import { forms, item, colors } from "../../styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import ErrorIcon from "@mui/icons-material/Error";

const roleOptions = [
  { value: "parent", title: "Parent" },
  { value: "teacher", title: "Teacher" },
];

export const LoginForm = () => {
  const [executeLogin, { loading, error, data }] = useMutation(LOGIN_USER);

  const navigate = useNavigate();

  const { setIsLoggedIn, setUser } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const onSubmit = async (formData) => {
    const { data } = await executeLogin({
      variables: {
        input: formData,
      },
    });

    if (data?.login) {
      const { token, parent, teacher } = data.login;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(parent || teacher));

      setIsLoggedIn(true);
      setUser(parent || teacher);

      parent
        ? navigate("/dashboard/parent", { replace: true })
        : navigate("/dashboard/teacher", { replace: true });
    }
  };

  return (
    <Grid
      container
      component="form"
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
          Login Form
        </Typography>
      </Grid>
      <Box sx={colors.green}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel color="secondary" id="role">
            Role
          </InputLabel>
          <Select
            color="secondary"
            defaultValue={"parent"}
            labelId="role"
            id="role"
            label="role"
            {...register("role")}
            autoFocus
            disabled={loading}
          >
            {roleOptions.map((role, index) => (
              <MenuItem key={index} value={role.value}>
                {role.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          color="secondary"
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
          color="secondary"
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

        <LoadingButton
          loading={loading}
          disabled={loading}
          type="submit"
          variant="contained"
          sx={item.actionButtons}
          startIcon={error && <ErrorIcon />}
          color={error ? "error" : "secondary"}
        >
          Login
        </LoadingButton>
        <Link
          component={RouterLink}
          variant="body2"
          to="/sign-up"
          underline="none"
        >
          Don't have an account? Sign up
        </Link>
        {!!error && (
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            sx={forms.errorContainer}
          >
            Failed to login, please enter a valid email address or password.
          </Typography>
        )}
      </Box>
    </Grid>
  );
};
