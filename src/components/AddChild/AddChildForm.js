import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import ErrorIcon from "@mui/icons-material/Error";

import { ADD_STUDENT } from "../../graphql/mutations";
import { GET_YEAR_GROUP_DATA } from "../../graphql/query";
import { GREEN, forms } from "../../styles";
import { UploadChildImage } from "../UploadChildImage";
import { PageTitle } from "../PageTitle";

export const AddChildForm = () => {
  const { loading, error, data } = useQuery(GET_YEAR_GROUP_DATA);

  const [
    executeAddStudent,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_STUDENT);

  const [childImage, setChildImage] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    control,
  } = useForm();

  const value = getValues("dob");

  useEffect(() => {
    register("dob");
  }, [register]);

  useEffect(() => {
    setDateOfBirth(value || null);
  }, [setDateOfBirth, value]);

  const onSubmit = async (studentData) => {
    const { data } = await executeAddStudent({
      variables: {
        input: {
          firstName: studentData.childFirstName,
          lastName: studentData.childLastName,
          dob: studentData.dob,
          yearGroup: studentData.yearGroup,
          profileImageUrl: childImage.src,
        },
      },
    });

    if (data?.addStudent) {
      navigate("/dashboard", { replace: true });
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

  if (loading) {
    return <CircularProgress color="warning" />;
  }

  if (error) {
    return (
      <Alert severity="error">
        Something went wrong, please try again later.
      </Alert>
    );
  }

  return (
    <Stack spacing={2}>
      <PageTitle>Child Registration Form</PageTitle>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        Please note: Don't forget to include an image!
      </Typography>
      <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
        <UploadChildImage
          uploadedImage={childImage}
          setUploadedImage={setChildImage}
        />
        <Box onSubmit={handleSubmit(onSubmit)} component="form">
          <TextField
            autoFocus
            margin="normal"
            id="childFirstName"
            label="First Name"
            variant="outlined"
            name="childFirstName"
            fullWidth
            {...register("childFirstName", { required: true })}
            error={!!errors.childFirstName}
            disabled={mutationLoading}
          />
          <TextField
            margin="normal"
            id="childLastName"
            label="Last Name"
            variant="outlined"
            name="childLastName"
            fullWidth
            {...register("childLastName", { required: true })}
            error={!!errors.childLastName}
            disabled={mutationLoading}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              disabled={mutationLoading}
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
          </LocalizationProvider>
          <FormControl sx={{ mt: 2 }} fullWidth>
            <InputLabel id="yearGroup">Year Group</InputLabel>
            <Controller
              control={control}
              name="yearGroup"
              render={({ field: { onChange, value } }) => (
                <Select
                  labelId="yearGroup"
                  id="yearGroup"
                  value={value || ""}
                  onChange={onChange}
                  label="Year Group"
                  disabled={mutationLoading}
                  error={!!errors.yearGroup}
                  {...register("yearGroup", { required: true })}
                >
                  {data?.yearGroups?.map((yearGroupObj, index) => {
                    return (
                      <MenuItem key={index} value={yearGroupObj.id}>
                        {yearGroupObj.title}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
            />
          </FormControl>
          <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
            <LoadingButton
              loading={mutationLoading}
              loadingIndicator="Loading..."
              variant="contained"
              type="submit"
              sx={styles.loadingButton}
              startIcon={mutationError && <ErrorIcon />}
              color={mutationError ? "error" : "warning"}
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
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
