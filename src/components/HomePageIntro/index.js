import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { item } from '../../styles';

export const HomePageIntro = () => {
	return (
		<Grid sx={item.outerContainer}>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant='h6'>
					An app that brings parents closer to their children’s school day.
				</Typography>
				<Typography
					variant='body1'
					gutterBottom
					component='div'
					sx={{ textAlign: 'center', m: '20px' }}>
					The 'one-stop- shop', to all child, teacher and school needs!.
					Providing benefits of an open channel for communication between
					teacher and parents; tracking progression of your child, and live
					updates on what class your child has checked into.
				</Typography>
			</Box>
		</Grid>
	);
};
