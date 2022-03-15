import { MedicalForm } from '../components/MedicalForm';
import Container from '@mui/material/Container';
import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import { Paper } from '@material-ui/core';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const Medical = () => {
	return (
		<Container>
			<PublicNavBar />
			<Container component='main' maxWidth='md'>
				<Paper elevation={6} style={styles.paperContainer}>
					<MedicalForm />
				</Paper>
			</Container>
		</Container>
	);
};
