import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { item, forms, GREEN } from '../../styles';
import { DESKTOP, MOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';

export const IncidentComment = ({
	mutationError,
	executeAddComment,
	incidentReportDataById,
	showCommentSection,

	refetch,
}) => {
	const isDesktop = useMediaQuery(DESKTOP);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async (data) => {
		await executeAddComment({
			variables: {
				input: {
					incidentReportId: incidentReportDataById.id,
					name: JSON.parse(localStorage.getItem('user')).firstName,
					message: data.comment,
				},
			},
		});

		refetch();
	};

	return (
		<Grid container component="form" onSubmit={handleSubmit(onSubmit)}>
			<Grid
				item={true}
				sx={{ ...forms.container, backgroundColor: GREEN }}
				xs={12}>
				<TextField
					sx={{ minWidth: isDesktop ? '450px' : 'unset' }}
					color="warning"
					margin="normal"
					id="comment"
					label="Comment"
					variant="outlined"
					name="comment"
					rows={4}
					multiline
					fullWidth
					{...register('comment', { required: true })}
					error={!!errors.comment}
				/>
			</Grid>
			<Grid item={true} sx={item.comment} xs={12}>
				<LoadingButton
					// loading={mutationLoading}
					color="warning"
					disabled={!showCommentSection}
					type="submit"
					variant="contained"
					sx={forms.loadingButton}>
					Submit
				</LoadingButton>
				{!!mutationError && (
					<Typography
						variant="subtitle2"
						gutterBottom
						component="div"
						sx={forms.errorContainer}>
						Failed to add comment.
					</Typography>
				)}
			</Grid>
		</Grid>
	);
};
