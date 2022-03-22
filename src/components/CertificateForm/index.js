import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import ErrorIcon from "@mui/icons-material/Error";

import { useMutation } from "@apollo/client";
import { Link as RouterLink } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AppProvider";
import { useQuery } from "@apollo/client";
import { GET_PARENTS_CHILDREN } from "../../graphql/query";
import { forms, item, GREEN } from "../../styles";
import { certificateOptions } from "../../data/certificateTypes";
import { CertificateCard } from "../CertificateCard";

export const CertificateForm = () => {
  const { loading, error, data } = useQuery(GET_PARENTS_CHILDREN);
  const studentOptions = data?.parentsChildren?.children;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const certificate = watch("certificate", "wellDone");
  const message = watch("message", "");

  const certificateCardData = () => {
    return certificateOptions.find((each) => each.value === certificate);
  };
  const onSubmit = async (formData) => {};

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel color="secondary" id="certificate">
            Certificate
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

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="student" color="warning">
            Select Child
          </InputLabel>
          <Controller
            control={control}
            name="student"
            render={({ field: { onChange, value } }) => (
              <Select
                labelId="student"
                id="student"
                label="Select Student"
                value={value || ""}
                // disabled={mutationLoading}
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
          message={message}
          studentName={"Student Name"}
        />

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
