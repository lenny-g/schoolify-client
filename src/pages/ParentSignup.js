import Paper from '@mui/material/Paper';

import { ParentSignupForm } from '../components/SignupForms/ParentSignupForm';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

export const ParentSignup = () => {
	return (
		<Paper elevation={6} style={styles.paperContainer}>
			<Logo />
			<ParentSignupForm />
		</Paper>
	);
};
