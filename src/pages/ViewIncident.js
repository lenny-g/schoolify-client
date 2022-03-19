import { LoginForm } from '../components/LoginForm/LoginForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import logo from '../assets/img/logo.png';
import Grid from '@mui/material/Grid';
import { IncidentChannel } from '../components/IncidentChannel';
import { IncidentListDesktop } from '../components/IncidentList/IncidentListDesktop';
import { IncidentListMobile } from '../components/IncidentList/IncidentListMobile';
import { MOBILE, DESKTOP } from '../media';
import { useMediaQuery } from 'react-responsive';
import { IncidentComment } from '../components/IncidentComment';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const ViewIncident = () => {
	const isMobile = useMediaQuery(MOBILE);
	const isDesktop = useMediaQuery(DESKTOP);
	return (
		<Container component='main'>
			<Paper elevation={6} style={styles.paperContainer}>
				<div className='logoContainer'>
					<img src={logo} className='logo' alt='logo' />
				</div>
				<Grid container>
					{isMobile && (
						<Grid item xs={12}>
							<IncidentListMobile />
						</Grid>
					)}
					{isDesktop && (
						<Grid item xs={4}>
							<IncidentListDesktop />
						</Grid>
					)}

					{isMobile && (
						<Grid item xs={12}>
							<IncidentChannel />
						</Grid>
					)}
					{isDesktop && (
						<Grid item xs={8}>
							<IncidentChannel />
						</Grid>
					)}
				</Grid>
				<Grid container>
					<IncidentComment />
				</Grid>
			</Paper>
		</Container>
	);
};
