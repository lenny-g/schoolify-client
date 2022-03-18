import { LoginForm } from '../components/LoginForm/LoginForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import logo from '../assets/img/logo.png';
import { IncidentReportForm } from '../components/IncidentReportForm';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const TeacherIncidentReport = () => {
	return (
		<Container>
			<Container component='main' maxWidth='md'>
				<Paper elevation={6} style={styles.paperContainer}>
					<div className='logoContainer'>
						<img src={logo} className='logo' alt='logo' />
					</div>
					<IncidentReportForm />
				</Paper>
			</Container>
		</Container>
	);
};
