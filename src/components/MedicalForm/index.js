import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LoadingButton from "@mui/lab/LoadingButton";
import Autocomplete from "@mui/material/Autocomplete";

import { forms } from "../../styles";

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
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  return (
    <Box component="form" sx={forms.inputBox}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        Medical Form
      </Typography>

      <Autocomplete
        sx={{ mb: 2 }}
        multiple
        id="tags-outlined"
        options={allergyOptions}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Allergies"
            placeholder="Select all allergies that apply"
          />
        )}
      />

      <Autocomplete
        sx={{ mb: 2 }}
        multiple
        id="tags-outlined"
        options={disabilityOptions}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Disability"
            placeholder="Select all disabilities that apply"
          />
        )}
      />

      <Autocomplete
        sx={{ mb: 2 }}
        multiple
        id="tags-outlined"
        options={medicalOption}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Medication"
            placeholder="Select all that apply"
          />
        )}
      />

      <TextField
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
        fullWidth
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
  );
};
