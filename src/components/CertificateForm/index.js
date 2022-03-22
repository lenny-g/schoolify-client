const certificateArray = [
  {
    name: "Brilliant Behaviour",
    value: "brilliantBehaviour",
    backgroundImage: "../../assets/img/certificates/brilliantBehavior.png",
  },
  {
    name: "Class Helper",
    value: "classHelper",
    backgroundImage: "../../assets/img/certificates/classHelper.png",
  },
  {
    name: "Excellent Achievement",
    value: "excellentAchievement",
    backgroundImage: "../../assets/img/certificates/excellentAchievement.png",
  },
  {
    name: "Fantastic Friend",
    value: "fantasticFriend",
    backgroundImage: "../../assets/img/certificates/fantasticFriend.png",
  },
  {
    name: "Star Of The Day",
    value: "starOfTheDay",
    backgroundImage: "../../assets/img/certificates/starOfTheDay.png",
  },
  {
    name: "Student Of The Week",
    value: "studentOfTheWeek",
    backgroundImage: "../../assets/img/certificates/studentOfTheWeek.png",
  },
  {
    name: "Well Done",
    value: "wellDone",
    backgroundImage: "../../assets/img/certificates/wellDone.png",
  },
];

export const CertificateForm = () => {
  return (fgdzfszgsgszsz
    <Stack container component="form" onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Create . Certificate</PageTitle>
      <Box sx={{ ...forms.container, backgroundColor: GREEN }}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="type">Please Choose Certificate</InputLabel>
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
            {certificateArray.map((certificate, index) => (
              <MenuItem key={index} value={certificate.value}>
                {certificate.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          id="childName"
          label="Child's Name"
          variant="outlined"
          name="name"
          autoFocus
          fullWidth
          disabled={loading}
          error={!!errors.childName}
        />
        <TextField
          margin="normal"
          id="certificateDetail"
          label="Description"
          variant="outlined"
          name="description"
          multiline
          rows={4}
          fullWidth
          {...register("certificateDetail", { required: true })}
          error={!!errors.certificateDetail}
        />
        <LoadingButton
          loading={loading}
          disabled={loading}
          type="submit"
          variant="contained"
          sx={item.actionButtons}
          startIcon={error && <ErrorIcon />}
          color={error ? "error" : "warning"}
        >
          Create Certificate
        </LoadingButton>
      </Box>
    </Stack>
  );
};
