import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useAuth } from '../../context/AppProvider';
import { PARENT_LOGIN } from '../../graphql/mutations';
import { forms } from '../../styles';

const roles = ['Parent', 'Teacher'];

export const LoginForm = () => {
	const [executeLogin, { loading, error, data }] = useMutation(PARENT_LOGIN);

	const navigate = useNavigate();

	const { setIsLoggedIn, setUser } = useAuth();

	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
	} = useForm();

	const onSubmit = async (formData) => {
		const { data } = await executeLogin({
			variables: {
				input: formData,
			},
		});

		if (data?.parentLogin) {
			const { token, parent } = data.parentLogin;

			localStorage.setItem('token', token);
			localStorage.setItem('user', JSON.stringify(parent));

			setIsLoggedIn(true);
			setUser(parent);

			navigate('/dashboard', { replace: true });
		}
	};

	if (error) {
		return <div>ERROR</div>;
	}

	return (
		<Box
			component='form'
			sx={forms.container}
			onSubmit={handleSubmit(onSubmit)}>
			<Typography
				variant='h3'
				gutterBottom
				component='div'
				sx={{ textAlign: 'center' }}>
				Login
			</Typography>

			<FormControl sx={{ mt: 2 }} fullWidth>
				<InputLabel id='role'>Select Role</InputLabel>
				<Controller
					control={control}
					name='role'
					render={({ field: { onChange, value } }) => (
						<Select
							labelId='role'
							id='role'
							value={value || ''}
							onChange={onChange}
							label='Year Group'
							// disabled={''}
							error={!!errors.role}
							{...register('role', { required: true })}>
							{data?.roles?.map((roleObj, index) => {
								return (
									<MenuItem key={index} value={roleObj.id}>
										{roleObj.title}
									</MenuItem>
								);
							})}
						</Select>
					)}
				/>
			</FormControl>

			<TextField
				margin='normal'
				id='email'
				label='Email'
				variant='outlined'
				name='email'
				autoFocus
				fullWidth
				disabled={loading}
				{...register('email', { required: true })}
				error={!!errors.email}
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
				{...register('password', { required: true })}
				error={!!errors.password}
			/>
			<LoadingButton
				loading={loading}
				disabled={loading}
				fullWidth
				type='submit'
				variant='contained'
				sx={forms.loadingButton}>
				Login
			</LoadingButton>
			<Link
				component={RouterLink}
				variant='body2'
				to='/sign-up'
				underline='none'>
				Don't have an account? Sign up
			</Link>
			{!!error && (
				<Typography
					variant='subtitle2'
					gutterBottom
					component='div'
					sx={forms.errorContainer}>
					Failed to login, please enter a valid email address or password.
				</Typography>
			)}
		</Box>
	);
};
