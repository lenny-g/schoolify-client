import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { AbsenceForm } from '../components/AbsenceForm';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

export const AbsenceRequest = () => {
	return (
		<Container component='main' maxWidth='md'>
			<Paper elevation={6} style={styles.paperContainer}>
				<Logo />
				<Container xs={12}>
					<AbsenceForm />
				</Container>
			</Paper>
		</Container>
	);
};
