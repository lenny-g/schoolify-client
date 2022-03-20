import { ChildrenCards } from '../components/ChildrenCards';
import { item, headers, forms, largeButtons, colors } from '../styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

const firstName = JSON.parse(localStorage.getItem('user'))?.firstName;
const lastName = JSON.parse(localStorage.getItem('user'))?.lastName;

export const ViewChildren = () => {
	return (
		<Container component='main' maxWidth='lg'>
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
							Hi {firstName} {lastName}!
						</Typography>
					</Grid>
					<Box sx={item.outerContainer}>
						<Typography
							variant='subtitle1'
							gutterBottom
							sx={{ color: 'black', textAlign: 'center' }}>
							Please select your child's card to go to their dashboard.
						</Typography>
						<Typography
							variant='subtitle2'
							gutterBottom
							sx={{
								color: 'black',
								textAlign: 'center',
								fontStyle: 'italic',
							}}>
							Please note: if you have more then one child attending the school,
							you are able to add multiple children by clicking on the{' '}
							<PersonAddIcon fontSize='inherit' /> icon in your navbar.
						</Typography>
						<Grid container sx={item.outerContainer}>
							<Grid item xs={12}>
								<Typography
									variant='h6'
									gutterBottom
									sx={{ color: 'black', textAlign: 'center' }}>
									Quick actions
								</Typography>
							</Grid>
							<Grid container sx={colors.container}>
								<Grid item xs={12} md={4} sx={item.btnContainer}>
									<Button variant='contained' sx={item.btn}>
										Add child
									</Button>
								</Grid>
								<Grid item xs={12} md={4} sx={item.btnContainer}>
									<Button variant='contained' sx={item.btn}>
										View Incidents
									</Button>
								</Grid>
								<Grid item xs={12} md={4} sx={item.btnContainer}>
									<Button variant='contained' sx={item.btn}>
										Request Absence
									</Button>
								</Grid>
							</Grid>
						</Grid>
						<ChildrenCards />
					</Box>
				</Grid>
			</Paper>
		</Container>
	);
};
