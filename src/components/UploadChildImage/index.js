import { useState } from 'react';
import aws from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { item, colors, headers } from '../../styles';

const Input = styled('input')({
	display: 'none',
});

const username = 'bobsmith';

export const UploadChildImage = ({ setChildImage }) => {
	const [image, setImage] = useState();
	const [uploadedImage, setUploadedImage] = useState();
	const [uploadComplete, setUploadComplete] = useState(false);
	const [loading, setLoading] = useState(false);

	const styles = {
		container: {
			backgroundColor: '#fff',
		},
		header: {
			paddingTop: 2,
			paddingBottom: 2,
		},
		form: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: 2,
		},
	};

	const uploadImage = async () => {
		setLoading(true);

		aws.config.update({
			accessKeyId: process.env.REACT_APP_ACCESS_KEY,
			secretAccessKey: process.env.REACT_APP_ACCESS_ID,
			region: process.env.REACT_APP_REGION,
			signatureVersion: 'v4',
		});

		const s3 = new aws.S3();

		image.uuid = uuidv4();

		const { url, fields } = await s3.createPresignedPost({
			Bucket: process.env.REACT_APP_BUCKET_NAME,
			Fields: { key: `${username}/images/${image.uuid}` },
			Expires: 60,
		});

		const formData = new FormData();

		Object.entries({ ...fields, file: image }).forEach(([key, value]) => {
			formData.append(key, value);
		});

		const upload = await fetch(url, { method: 'POST', body: formData });

		console.log(upload);

		if (upload.ok) {
			setUploadComplete(true);
			setImage();
			setUploadedImage({
				src: `${upload.url}/${username}/images/${image.uuid}`,
				fileName: `${username}/images/${image.uuid}`,
			});
			setChildImage(`${upload.url}/${username}/images/${image.uuid}`);
			setLoading(false);
		} else {
			console.log('Failed to upload');
		}
	};

	return (
		<Box component='form' sx={colors.purple}>
			<Stack spacing={2} alignItems='center'>
				<label htmlFor='image-uploader'>
					<Input
						accept='image/*'
						id='image-uploader'
						type='file'
						onChange={(event) => {
							console.log(event.target.files[0]);
							setImage(event.target.files[0]);
						}}
					/>
					<Button color='secondary' variant='contained' component='span'>
						Add Image
					</Button>
				</label>
				{image && (
					<LoadingButton
						loading={loading}
						loadingPosition='start'
						startIcon={<UploadIcon />}
						variant='contained'
						onClick={uploadImage}>
						Upload Image
					</LoadingButton>
				)}

				{image && (
					<>
						<Typography
							variant='subtitle'
							gutterBottom
							component='h4'
							align='center'
							sx={styles.header}>
							Image to Upload
						</Typography>
						<Stack>
							<img
								style={{
									maxWidth: 180,
									objectFit: 'contain',
								}}
								src={URL.createObjectURL(image)}
								loading='lazy'
							/>
							<Grid container>
								<Grid item xs={6}>
									<Typography variant='body2'>{image.name}</Typography>
									<Typography variant='caption'>{`${
										Math.floor(image.size / 10) / 100
									} KB`}</Typography>
								</Grid>
								<Grid item xs={6} sx={{ textAlign: 'end' }}>
									<iconButton
										variant='contained'
										sx={{ color: '#d32f2f', padding: '10px' }}
										onClick={() => {
											setImage();
										}}>
										<DeleteIcon />
									</iconButton>
								</Grid>
							</Grid>
						</Stack>
					</>
				)}
			</Stack>
		</Box>
	);
};
