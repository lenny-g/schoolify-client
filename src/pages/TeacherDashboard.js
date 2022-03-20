import { item, headers } from '../styles';
import logo from '../assets/img/logo.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

const firstName = JSON.parse(localStorage.getItem('user'))?.firstName;
const lastName = JSON.parse(localStorage.getItem('user'))?.lastName;

export const TeacherDashboard = () => {
	return (
		<Container component='main' maxWidth='md'>
			<Paper elevation={6} style={styles.paperContainer}>
				<Logo />
				<Grid container sx={item.outerContainer}>
					<Grid item xs={12}>
						<Typography
							className='headingFont'
							variant='h5'
							gutterBottom
							component='div'
							sx={headers.font}>
							Welcome {firstName} {lastName}!
						</Typography>
					</Grid>
					<Box sx={item.outerContainer}>
						<Typography
							variant='subtitle1'
							gutterBottom
							sx={{ color: 'black', textAlign: 'center' }}>
							DASHBOARD
						</Typography>
					</Box>
				</Grid>
			</Paper>
		</Container>
	);
};
