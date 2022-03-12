import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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

const roleOptions = ['Parent', 'Teacher'];

export const LoginForm = () => {
	const [executeLogin, { loading, error }] = useMutation(PARENT_LOGIN);

	const navigate = useNavigate();

	const { setIsLoggedIn, setUser } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
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

			<FormControl sx={{ minWidth: 100 }}>
				<InputLabel id='role'>Role</InputLabel>
				<Select
					labelId='role'
					id='role'
					label='role'
					{...register('role')}
					defaultValue='Mr'
					autoFocus
					disabled={loading}>
					{roleOptions.map((role, index) => (
						<MenuItem key={index} value={role}>
							{role}
						</MenuItem>
					))}
				</Select>
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
