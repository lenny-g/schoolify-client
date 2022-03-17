import { MedicalForm } from '../components/MedicalForm';
import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';
import '../App.css';

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
					<div className='logoContainer'>
						<img src={logo} className='logo' />
					</div>
					<MedicalForm />
				</Paper>
			</Container>
		</Container>
	);
};
