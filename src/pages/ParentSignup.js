import { ParentSignupForm } from '../components/SignupForms/ParentSignupForm';
import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import Container from '@mui/material/Container';

export const ParentSignup = () => {
	return (
		<Container>
			<PublicNavBar />
			<Container component='main' maxWidth='md'>
				<ParentSignupForm />
			</Container>
		</Container>
	);
};
