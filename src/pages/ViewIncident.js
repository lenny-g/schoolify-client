import { LoginForm } from '../components/LoginForm/LoginForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import logo from '../assets/img/logo.png';
import Grid from '@mui/material/Grid';
import { IncidentChannel } from '../components/IncidentChannel';
import { IncidentList } from '../IncidentList';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const ViewIncident = () => {
	return (
		<Container>
			<Container component='main'>
				<Paper elevation={6} style={styles.paperContainer}>
					<div className='logoContainer'>
						<img src={logo} className='logo' alt='logo' />
					</div>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							list of incidents
							<IncidentList />
						</Grid>
						<Grid item xs={8}>
							<IncidentChannel />
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Container>
	);
};
