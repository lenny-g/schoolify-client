import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import LoadingButton from '@mui/lab/LoadingButton';
import ErrorIcon from '@mui/icons-material/Error';

import { PARENT_SIGN_UP } from '../../graphql/mutations';
import { forms } from '../../styles';

const titleOptions = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'];

export const TeacherSignupForm = () => {
	const [executeSignUp, { loading, error }] = useMutation(PARENT_SIGN_UP);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const onSubmit = async (formData) => {
		if (formData.password !== formData.confirmPassword) {
			setError('confirmPassword', {
				type: 'manual',
				message: 'Passwords do not match',
			});
		} else {
			const { data } = await executeSignUp({
				variables: {
					input: {
						postCode: formData.postCode,
						city: formData.city,
						street: formData.street,
						houseNumber: formData.houseNumber,
						password: formData.password,
						email: formData.emailAddress,
						phoneNumber: formData.phoneNumber,
						lastName: formData.lastName,
						firstName: formData.firstName,
						title: formData.title,
					},
				},
			});

			if (data?.parentSignUp) {
				navigate('/login', { replace: true });
			}
		}
	};

	return (
		<Grid
			container
			component='form'
			spacing={3}
			onSubmit={handleSubmit(onSubmit)}>
			<Grid xs={12}>
				<Typography
					variant='h3'
					gutterBottom
					component='div'
					sx={{ textAlign: 'center' }}>
					Teacher Sign Up
				</Typography>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Box sx={forms.inputBox}>
					<FormControl sx={{ mt: 2 }} fullWidth>
						<InputLabel id='title'>Title</InputLabel>
						<Select
							labelId='title'
							id='title'
							label='Title'
							{...register('title')}
							defaultValue='Mr'
							autoFocus
							disabled={loading}>
							{titleOptions.map((title, index) => (
								<MenuItem key={index} value={title}>
									{title}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<TextField
						margin='normal'
						id='firstName'
						label='First Name'
						variant='outlined'
						name='firstName'
						fullWidth
						disabled={loading}
						{...register('firstName', { required: true })}
						error={!!errors.firstName}
					/>
					<TextField
						margin='normal'
						id='lastName'
						label='Last Name'
						variant='outlined'
						name='lastName'
						fullWidth
						disabled={loading}
						{...register('lastName', { required: true })}
						error={!!errors.lastName}
					/>
				</Box>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Box sx={forms.inputBox}>
					<TextField
						margin='normal'
						id='emailAddress'
						label='Email Address'
						variant='outlined'
						name='emailAddress'
						fullWidth
						disabled={loading}
						{...register('emailAddress', {
							required: true,
							pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
						})}
						error={!!errors.emailAddress}
					/>
					<TextField
						margin='normal'
						id='password'
						label='Password'
						variant='outlined'
						name='password'
						type='password'
						fullWidth
						disabled={loading}
						{...register('password', {
							required: true,
							pattern:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
						})}
						error={!!errors.password}
					/>
					<Typography
						variant='caption'
						component='div'
						sx={{ padding: '0px 8px' }}>
						Password must be 8 characters, and include both lowercase and
						uppercase characters, with 1 special character required
					</Typography>
					<TextField
						margin='normal'
						id='confirmPassword'
						label='Confirm Password'
						variant='outlined'
						name='confirmPassword'
						type='password'
						fullWidth
						disabled={loading}
						{...register('confirmPassword', { required: true })}
						error={!!errors.confirmPassword}
					/>
					{errors?.confirmPassword?.message && (
						<Typography
							variant='caption'
							component='div'
							sx={{ padding: '0px 8px', color: '#d32f2f' }}>
							{errors?.confirmPassword?.message}
						</Typography>
					)}
				</Box>
			</Grid>
			<Grid xs={12}>
				<LoadingButton
					loading={loading}
					disabled={loading}
					fullWidth
					type='submit'
					variant='contained'
					sx={forms.loadingButton}
					startIcon={error && <ErrorIcon />}
					color={error ? 'error' : 'primary'}>
					Sign Up
				</LoadingButton>
				<Link
					component={RouterLink}
					variant='body2'
					to='/login'
					underline='none'>
					Already have an account? Login
				</Link>
				{!!error && (
					<Typography
						variant='subtitle2'
						gutterBottom
						component='div'
						sx={forms.errorContainer}>
						Failed to sign up, please try again.
					</Typography>
				)}
			</Grid>
		</Grid>
	);
};
