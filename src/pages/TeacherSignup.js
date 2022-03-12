import { TeacherSignupForm } from '../components/SignupForms/TeacherSignupForm';
import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import Container from '@mui/material/Container';

export const TeacherSignup = () => {
	return (
		<Container>
			<PublicNavBar />
			<Container component='main' maxWidth='md'>
				<TeacherSignupForm />
			</Container>
		</Container>
	);
};
