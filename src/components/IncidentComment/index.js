import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { item, forms, colors } from '../../styles';

export const IncidentComment = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
	} = useForm();

	const onSubmit = async (comment) => {
		console.log(comment);
	};
	return (
		<Grid container>
			<Grid sx={colors.yellow} xs={12}>
				<TextField
					color='warning'
					margin='normal'
					id='comment'
					label='Comment'
					variant='outlined'
					name='comment'
					rows={4}
					multiline
					fullWidth
					{...register('comment', { required: true })}
					error={!!errors.comment}
				/>
			</Grid>
			<Grid sx={item.comment} xs={12}>
				<LoadingButton
					// loading={loading}
					// disabled={loading}
					type='submit'
					variant='contained'
					sx={forms.loadingButton}>
					Submit
				</LoadingButton>
				{/* {!!error && ( */}
				<Typography
					variant='subtitle2'
					gutterBottom
					component='div'
					sx={forms.errorContainer}>
					Failed to add medical history.
				</Typography>
			</Grid>
		</Grid>
	);
};
