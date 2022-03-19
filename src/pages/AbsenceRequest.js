import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import logo from '../assets/img/logo.png';
import { AbsenceForm } from '../components/AbsenceForm';
import { ParentNavBar } from '../components/NavigationBar/ParentNavBar';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const AbsenceRequest = () => {
	return (
		<Container component='main' maxWidth='md'>
			<Container component='main' maxWidth='md'>
				<Paper elevation={6} style={styles.paperContainer}>
					<div className='logoContainer'>
						<img src={logo} className='logo' alt={logo} />
					</div>
					<Container xs={12}>
						<AbsenceForm />
					</Container>
				</Paper>
			</Container>
		</Container>
	);
};
