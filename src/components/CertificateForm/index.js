export const CertificateForm = () => {
  return (
    <Stack container component="form" onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Create . Certificate</PageTitle>
      <Box sx={{ ...forms.container, backgroundColor: PURPLE }}>
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
          color="success"
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
          color={error ? "error" : "secondary"}
        >
          Create Certificate
        </LoadingButton>
      </Box>
    </Stack>
  );
};
