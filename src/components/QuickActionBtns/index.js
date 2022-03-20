import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { item, colors } from '../../styles';

export const QuickActionBtns = () => {
	return (
		<Grid container sx={item.btnContainer}>
			<Box sx={colors.green} maxWidth='250px'>
				<Grid item xs={12}>
					<Typography
						variant='h6'
						gutterBottom
						sx={{ color: 'black', textAlign: 'center' }}>
						Quick actions
					</Typography>
				</Grid>
				<Grid item xs={12} sx={{ textAlign: 'center' }}>
					<Button variant='contained' sx={item.btn} color='secondary'>
						Add child
					</Button>
					<Button variant='contained' sx={item.btn} color='secondary'>
						View Incidents
					</Button>
					<Button variant='contained' sx={item.btn} color='secondary'>
						Absence Requests
					</Button>
					<Button variant='contained' sx={item.btn} color='secondary'>
						Book Appointment
					</Button>
				</Grid>
			</Box>
		</Grid>
	);
};
