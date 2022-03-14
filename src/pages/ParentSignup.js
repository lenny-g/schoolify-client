import { ParentSignupForm } from '../components/SignupForms/ParentSignupForm';
import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';

export const ParentSignup = () => {
	return (
		<Container sx={{ ml: '2rem' }}>
			<PublicNavBar />
			<Container component='main' maxWidth='md'>
				<Paper>
					<ParentSignupForm />
				</Paper>
			</Container>
		</Container>
	);
};
