import { useState } from "react";
import aws from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoadingButton from "@mui/lab/LoadingButton";

const Input = styled("input")({
  display: "none",
});

export const UploadChildImage = ({ uploadedImage, setUploadedImage }) => {
  const [image, setImage] = useState();
  const [awsError, setAwsError] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const styles = {
    header: {
      paddingTop: 2,
      paddingBottom: 2,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 4,
    },
  };

  const imageStyle = {
    maxWidth: 250,
    objectFit: "contain",
  };

  const uploadImage = async () => {
    try {
      setLoading(true);

      aws.config.update({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_ACCESS_ID,
        region: process.env.REACT_APP_REGION,
        signatureVersion: "v4",
      });

      const s3 = new aws.S3();

      image.uuid = uuidv4();

      const { url, fields } = await s3.createPresignedPost({
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Fields: { key: `images/${image.uuid}` },
        Expires: 60,
      });

      console.log(`[INFO]: url | ${url}`);

      const formData = new FormData();

      Object.entries({ ...fields, file: image }).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const upload = await fetch(url, { method: "POST", body: formData });

      console.log(`[INFO]: upload | ${upload}`);

      if (upload.ok) {
        setUploadComplete(true);
        setImage();
        setUploadedImage({
          src: `${upload.url}/images/${image.uuid}`,
          fileName: `images/${image.uuid}`,
        });
        setLoading(false);
        setAwsError(false);
      } else {
        setAwsError(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(`[ERROR]: error | ${err.message}`);
      setAwsError(true);
      setLoading(false);
    }
  };

  return (
    <Box component="form" sx={styles.form}>
      <Stack spacing={2} alignItems="center">
        <label htmlFor="image-uploader">
          <Input
            accept="image/*"
            id="image-uploader"
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
          <Button color="warning" variant="contained" component="span">
            Add Image
          </Button>
        </label>

        {image && (
          <>
            <ImageList>
              <ImageListItem cols={2} rows={1}>
                <img
                  style={imageStyle}
                  src={URL.createObjectURL(image)}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={image.name}
                  subtitle={`${Math.floor(image.size / 10) / 100} KB`}
                  actionIcon={
                    loading ? (
                      <CircularProgress
                        sx={{ color: "#fff", mr: 2 }}
                        size={20}
                      />
                    ) : (
                      <IconButton
                        sx={{ color: "#d32f2f" }}
                        onClick={() => {
                          setImage();
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )
                  }
                />
              </ImageListItem>
            </ImageList>
          </>
        )}

        {image && (
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            startIcon={<UploadIcon />}
            variant="contained"
            onClick={uploadImage}
          >
            Upload Image
          </LoadingButton>
        )}

        {uploadedImage && (
          <ImageList>
            <ImageListItem cols={2} rows={1}>
              <img style={imageStyle} src={uploadedImage.src} loading="lazy" />
              <ImageListItemBar
                actionIcon={<CheckCircleIcon sx={{ mr: 2, color: "#fff" }} />}
              />
            </ImageListItem>
          </ImageList>
        )}

        {awsError && !loading && (
          <Alert severity="error">Failed to upload image</Alert>
        )}

        {uploadComplete && !loading && (
          <Alert severity="success">Successfully uploaded image</Alert>
        )}
      </Stack>
    </Box>
  );
};
