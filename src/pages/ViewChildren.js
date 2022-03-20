import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { ChildrenCards } from '../components/ChildrenCards';
import { item, colors, headers } from '../styles';
import { Logo } from '../components/Logo';
import { QuickActionBtns } from '../components/QuickActionBtns';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

const firstName = JSON.parse(localStorage.getItem('user'))?.firstName;
const lastName = JSON.parse(localStorage.getItem('user'))?.lastName;

export const ViewChildren = () => {
	return (
		<Container component='main'>
			<Paper elevation={6} style={styles.paperContainer}>
				<Logo />
				<Grid container sx={item.outerContainer}>
					<Grid item xs={12}>
						<Typography
							className='headingFont'
							variant='h3'
							gutterBottom
							component='div'
							sx={headers.font}>
							Hi {firstName} {lastName}!
						</Typography>
					</Grid>
					<Grid xs={12} sx={item.comment}>
						<Typography
							variant='subtitle1'
							gutterBottom
							sx={{ color: 'black', textAlign: 'center' }}>
							Select your child's card to go to their dashboard
						</Typography>
						<Typography
							variant='subtitle2'
							gutterBottom
							sx={{
								color: 'black',
								textAlign: 'center',
								fontStyle: 'italic',
							}}>
							Please note: If you have more then one child attending the same
							school, you are able to add multiple children to your app
						</Typography>
						<Grid container>
							<Grid item xs={12} md={4}>
								<QuickActionBtns />
							</Grid>
							<Grid item xs={12} md={8} sx={{ margin: 'auto' }}>
								<ChildrenCards />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};
