import { MedicalForm } from '../components/MedicalForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import logo from '../assets/img/logo.png';
import '../App.css';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const Medical = () => {
	return (
		<Container>
			<Container component='main' maxWidth='md'>
				<Paper
					className='positioning'
					elevation={6}
					style={styles.paperContainer}>
					<Logo />
					<MedicalForm />
				</Paper>
			</Container>
		</Container>
	);
};
