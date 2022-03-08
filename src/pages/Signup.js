import { SignupForm } from '../components/SignupForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SignupFormChild } from '../components/SignupFormChild';

export const Signup = () => {
	return (
		<Container component='main' maxWidth='md'>
			<Typography
				variant='h3'
				gutterBottom
				component='div'
				sx={{ textAlign: 'center' }}>
				SignUp
			</Typography>
			<SignupForm />
			{/* <SignupFormChild /> */}
		</Container>
	);
};
