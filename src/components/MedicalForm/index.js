import { useMutation, useQuery } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import { forms, colors, GREEN } from "../../styles";

import { ADD_MEDICAL_INFO_TO_STUDENT } from "../../graphql/mutations";
import { GET_PARENTS_CHILDREN } from "../../graphql/query";
import { PageTitle } from "../PageTitle";

const allergyOptions = [
  "cow's milk",
  "egg",
  "wheat",
  "peanuts",
  "fruit",
  "garlic",
  "oats",
  "buckwheat",
  "shellfish",
  "gluten",
  "tree nuts",
  "soy",
  "fish",
  "corn",
  "sesame seeds",
  "mustard",
  "celery",
  "hayfever",
  "other",
];

const disabilityOptions = [
  "learning",
  "mobilities",
  "psychiatric",
  "hearing",
  "autism",
  "vision",
  "ptsd",
  "adhd",
];

const medicalOption = ["inhaler", "antibiotics", "epi pen", "stimulants"];

export const MedicalForm = () => {
  const { loading, error, data } = useQuery(GET_PARENTS_CHILDREN);
  const studentOptions = data?.parentsChildren?.children;

  const [
    executeMedicalRequest,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_MEDICAL_INFO_TO_STUDENT);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    await executeMedicalRequest({
      variables: {
        input: {
          studentId: formData.student,
          allergies: formData.allergies,
          disabilities: formData.disability,
          medications: formData.medication,
          additionalInfo: formData.additionalInfo,
        },
      },
    });

    navigate("/dashboard", { replace: true });
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
      <PageTitle>Child Medical Form</PageTitle>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        Please note: All inputs will be retained on your child's record
      </Typography>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ ...forms.container, backgroundColor: GREEN }}
      >
        <FormControl fullWidth>
          <InputLabel id="student" color="warning">
            Select Child
          </InputLabel>
          <Controller
            control={control}
            name="student"
            render={({ field: { onChange, value } }) => (
              <Select
                color="warning"
                labelId="student"
                id="student"
                label="Select Student"
                value={value || ""}
                disabled={mutationLoading}
                onChange={onChange}
                {...register("student", { required: true })}
                error={!!errors.student}
              >
                {studentOptions?.map(({ firstName, lastName, id }, index) => (
                  <MenuItem key={index} value={id}>
                    {firstName} {lastName}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <Controller
          control={control}
          name="allergies"
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              {...register("allergies")}
              sx={{ mt: 2 }}
              fullWidth
              multiple
              id="tags-outlined"
              options={allergyOptions}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="warning"
                  label="Allergies"
                  placeholder="Select all allergies that apply"
                />
              )}
              onChange={(event, values, reason) => onChange(values)}
              value={value || []}
            />
          )}
        />

        <Controller
          control={control}
          name="disability"
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              sx={{ mt: 2 }}
              fullWidth
              multiple
              id="tags-outlined"
              options={disabilityOptions}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="warning"
                  label="Disability"
                  placeholder="Select all disabilities that apply"
                />
              )}
              onChange={(event, values, reason) => onChange(values)}
              value={value || []}
            />
          )}
        />

        <Controller
          control={control}
          name="medication"
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              sx={{ mt: 2 }}
              fullWidth
              multiple
              id="tags-outlined"
              options={medicalOption}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="warning"
                  label="Medication"
                  placeholder="Select all that apply"
                />
              )}
              onChange={(event, values, reason) => onChange(values)}
              value={value || []}
            />
          )}
        />
        <TextField
          color="warning"
          margin="normal"
          id="additionalInfo"
          label="Additional Info"
          variant="outlined"
          name="additionalInfo"
          rows={4}
          multiline
          fullWidth
          disabled={loading}
          {...register("additionalInfo", { required: true })}
          error={!!errors.additionalInfo}
        />
        <LoadingButton
          loading={loading}
          disabled={loading}
          color="warning"
          type="submit"
          variant="contained"
          sx={forms.loadingButton}
        >
          Submit
        </LoadingButton>
        {!!mutationError && (
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            sx={forms.errorContainer}
          >
            Failed to add medical history.
          </Typography>
        )}
      </Box>
    </Stack>
  );
};
