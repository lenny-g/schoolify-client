import { useMutation } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Autocomplete from "@mui/material/Autocomplete";

import { item, forms, colors } from "../../styles";

import { ADD_MEDICAL_INFO_TO_STUDENT } from "../../graphql/mutations";

const allergyOptions = [
  "cow's milk",
  "egg",
  "wheat",
  "peanuts",
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
    console.log(formData);
    await executeMedicalRequest({
      variables: {
        input: {
          allergies: formData.allergy,
          disabilities: formData.disability,
          medications: formData.medication,
          additionalInfo: formData.additionalInfo,
        },
      },
    });

    navigate("/dashboard", { replace: true });
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
          Child . Medical . Form
        </Typography>
      </Grid>
      <Box sx={colors.yellow}>
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
          id="additional-info"
          label="Additional Info"
          variant="outlined"
          name="additionalInfo"
          rows={4}
          multiline
          fullWidth
          // disabled={loading}
          {...register("additionalInfo", { required: true })}
          error={!!errors.additionalInfo}
        />
        <LoadingButton
          // loading={loading}
          // disabled={loading}
          type="submit"
          variant="contained"
          sx={forms.loadingButton}
        >
          Submit
        </LoadingButton>
        {/* {!!error && ( */}
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          sx={forms.errorContainer}
        >
          Failed to add medical history.
        </Typography>
        {/* )} */}
      </Box>
    </Grid>
  );
};
