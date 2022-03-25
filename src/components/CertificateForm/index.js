import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import ErrorIcon from "@mui/icons-material/Error";

import { useQuery, useMutation } from "@apollo/client";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AppProvider";

import { GET_TEACHER_STUDENTS } from "../../graphql/query";
import { CREATE_STUDENT_CERTIFICATE } from "../../graphql/mutations";

import { forms, GREEN } from "../../styles";
import { certificateOptions } from "../../data/certificateTypes";
import { CertificateCard } from "../CertificateCard";

import { Loading } from "../Loading";
import { PageError } from "../PageError";

import { PageTitle } from "../../components/PageTitle";

export const CertificateForm = () => {
  const { user } = useAuth();

  const { loading, error, data } = useQuery(GET_TEACHER_STUDENTS, {
    variables: {
      yearGroupId: user?.yearGroup?.id,
    },
  });

  const [
    executeCreateCertificate,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_STUDENT_CERTIFICATE);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const certificate = watch("certificate", "wellDone");
  const message = watch("message", "");
  const studentId = watch("student", "");

  const certificateCardData = () => {
    return certificateOptions.find((each) => each.value === certificate);
  };

  const studentFullName = () => {
    const student = data?.teacherStudents?.find(
      (each) => each.id === studentId
    );

    return student
      ? `${student?.firstName} ${student?.lastName}`
      : "Student Name";
  };

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    await executeCreateCertificate({
      variables: {
        input: {
          name: studentFullName(),
          message: formData.message,
          studentId: formData.student,
          certificateType: formData.certificate,
        },
      },
    });

    navigate(`/children/view/${formData.student}`, { replace: true });
  };

  if (loading) {
    return <Loading />;
  }

  if (!loading && error) {
    return <PageError />;
  }

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Certificate Form</PageTitle>
      <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel color="warning" id="certificate">
            Certificate
          </InputLabel>
          <Select
            color="warning"
            defaultValue={"wellDone"}
            labelId="certificate"
            id="certificate"
            label="certificate"
            {...register("certificate")}
            disabled={mutationLoading}
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
                color="warning"
                labelId="student"
                id="student"
                label="Select Student"
                value={value || ""}
                autoFocus
                disabled={mutationLoading}
                onChange={onChange}
                {...register("student", { required: true })}
                error={!!errors.student}
              >
                {data?.teacherStudents?.map(
                  ({ firstName, lastName, id }, index) => (
                    <MenuItem key={index} value={id}>
                      {firstName} {lastName}
                    </MenuItem>
                  )
                )}
              </Select>
            )}
          />
        </FormControl>

        <TextField
          color="warning"
          margin="normal"
          id="message"
          label="Message"
          variant="outlined"
          name="message"
          type="message"
          fullWidth
          disabled={loading}
          {...register("message", { required: true })}
          error={!!errors.message}
        />
        <CertificateCard
          backgroundImage={certificateCardData().backgroundImage}
          message={message}
          studentName={studentFullName()}
        />

        <LoadingButton
          loading={mutationLoading}
          disabled={mutationLoading}
          type="submit"
          variant="contained"
          startIcon={error && <ErrorIcon />}
          color={error ? "error" : "warning"}
        >
          Send certificate
        </LoadingButton>
      </Box>
    </Stack>
  );
};
