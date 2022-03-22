import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { certificateOptions } from "../../data/certificateTypes";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import ErrorIcon from "@mui/icons-material/Error";
import { CertificateCard } from "../CertificateCard";
import { PageTitle } from "../PageTitle";
import { useAuth } from "../../context/AppProvider";
import { LOGIN_USER } from "../../graphql/mutations";
import { forms, item, PURPLE } from "../../styles";

export const CertificateForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const certificate = watch("certificate", "wellDone");
  console.log(certificate);

  const certificateCardData = () => {
    return certificateOptions.find((each) => each.value === certificate);
  };
  const onSubmit = async (formData) => {};

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ ...forms.container, backgroundColor: PURPLE }}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel color="secondary" id="certificate">
            Please choose your certificate
          </InputLabel>
          <Select
            defaultValue={"wellDone"}
            labelId="certificate"
            id="certificate"
            label="certificate"
            {...register("certificate")}
            autoFocus
            // disabled={loading}
          >
            {certificateOptions.map((certificateType, index) => (
              <MenuItem key={index} value={certificateType.value}>
                {certificateType.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          id="name"
          label="Name"
          variant="outlined"
          name="name"
          autoFocus
          fullWidth
          // disabled={loading}
          {...register("email", { required: true })}
          error={!!errors.email}
        />
        <TextField
          margin="normal"
          id="message"
          label="Message"
          variant="outlined"
          name="message"
          type="message"
          fullWidth
          // disabled={loading}
          {...register("message", { required: true })}
          error={!!errors.password}
        />
        <CertificateCard
          backgroundImage={certificateCardData().backgroundImage}
          message={certificateCardData().message}
          studentName={certificateCardData().name}
        />
        {console.log(certificateCardData())}
        <LoadingButton
          // loading={loading}
          // disabled={loading}
          type="submit"
          variant="contained"
          sx={item.actionButtons}
          // startIcon={error && <ErrorIcon />}
          // color={error ? "error" : "secondary"}
        >
          Create
        </LoadingButton>
      </Box>
    </Stack>
  );
};
