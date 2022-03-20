import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { TeacherSignupForm } from '../components/SignupForms/TeacherSignupForm';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

export const TeacherSignup = () => {
	return (
		<Container component='main'>
			<Paper elevation={6} style={styles.paperContainer}>
				<Logo />
				<TeacherSignupForm />
			</Paper>
		</Container>
	);
};
