import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { PARENT_SIGN_UP } from '../../graphql/mutations';
import { item, colors, headers } from '../../styles';
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

const titleOptions = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'];

export const ParentSignupForm = () => {
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
			sx={item.outerContainer}
			component='form'
			onSubmit={handleSubmit(onSubmit)}>
			<Grid item xs={12}>
				<Typography
					className='headingFont'
					variant='h3'
					gutterBottom
					component='div'
					sx={headers.font}>
					Parent . Signup . Page
				</Typography>
			</Grid>
			<Grid container>
				<Grid item xs={12} md={6}>
					<Box sx={colors.pink}>
						<Typography
							color='primary'
							variant='subtitle1'
							component='div'
							sx={{ padding: '0px 8px' }}>
							Enter personal details
						</Typography>
						<FormControl sx={{ mt: 2 }} fullWidth>
							<InputLabel color='primary' id='title'>
								Title
							</InputLabel>
							<Select
								color='primary'
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
							color='primary'
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
							color='primary'
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
					<Box sx={{ mt: '2rem' }}>
						<Box sx={colors.green}>
							<Typography
								color='success.dark'
								variant='subtitle1'
								component='div'
								sx={{ padding: '0px 8px' }}>
								Enter login details
							</Typography>
							<TextField
								color='success'
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
								sx={{ position: 'relative' }}
								color='success'
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
								color='text.disabled'
								variant='caption'
								component='div'
								sx={{ padding: '0px 8px' }}>
								Password must be 8 characters, and include both lowercase and
								uppercase characters, with 1 special character required
							</Typography>
							<TextField
								color='success'
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
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box sx={colors.yellow}>
						<Typography
							color='warning.dark'
							variant='subtitle1'
							component='div'
							sx={{ padding: '0px 8px' }}>
							Enter contact details
						</Typography>
						<TextField
							color='warning'
							margin='normal'
							id='houseNumber'
							label='House Number'
							variant='outlined'
							name='houseNumber'
							fullWidth
							disabled={loading}
							{...register('houseNumber', { required: true })}
							error={!!errors.houseNumber}
						/>
						<TextField
							color='warning'
							margin='normal'
							id='street'
							label='Street Name'
							variant='outlined'
							name='street'
							fullWidth
							disabled={loading}
							{...register('street', { required: true })}
							error={!!errors.street}
						/>
						<TextField
							color='warning'
							margin='normal'
							id='city'
							label='City'
							variant='outlined'
							name='city'
							fullWidth
							disabled={loading}
							{...register('city', { required: true })}
							error={!!errors.city}
						/>
						<TextField
							color='warning'
							margin='normal'
							id='postCode'
							label='Post Code'
							variant='outlined'
							name='postCode'
							fullWidth
							disabled={loading}
							{...register('postCode', { required: true })}
							error={!!errors.postCode}
						/>
						<TextField
							color='warning'
							margin='normal'
							id='phoneNumber'
							label='Phone Number'
							variant='outlined'
							name='phoneNumber'
							fullWidth
							disabled={loading}
							{...register('phoneNumber', { required: true })}
							error={!!errors.phoneNumber}
						/>
					</Box>
					<Box sx={item.inputBox}>
						<LoadingButton
							loading={loading}
							disabled={loading}
							type='submit'
							variant='contained'
							sx={item.actionButtons}
							startIcon={error && <ErrorIcon />}
							color={error ? 'error' : 'secondary'}>
							Sign Up
						</LoadingButton>
						<Link
							component={RouterLink}
							variant='body2'
							to='/login'
							underline='none'
							sx={{ textAlign: 'center' }}
							color='secondary.dark'>
							Already have an account? Login
						</Link>
						{!!error && (
							<Typography
								variant='subtitle2'
								gutterBottom
								component='div'
								sx={item.errorContainer}>
								Failed to sign up, please try again.
							</Typography>
						)}
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};
