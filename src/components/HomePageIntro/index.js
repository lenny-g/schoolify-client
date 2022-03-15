import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { largeButtons, item, colors, headers } from '../../styles';

export const HomePageIntro = () => {
	return (
		<Box sx={item.outerContainer}>
			<Typography
				color='secondary'
				variant='h6'
				gutterBottom
				component='div'
				sx={{ textAlign: 'center' }}>
				Schoolify - the only app parents need!
			</Typography>
			<Typography
				color='primary'
				variant='h6'
				gutterBottom
				component='div'
				sx={{
					textAlign: 'center',
					mb: '20px',
					fontWeight: 'bolder',
				}}>
				An app that brings parents closer to their children’s school day.
			</Typography>
			<Typography
				variant='body1'
				gutterBottom
				component='div'
				sx={{ textAlign: 'center', mb: '20px' }}>
				The 'one-stop- shop', to all child, teacher and school needs!. Providing
				benefits of an open channel for communication between teacher and
				parents; tracking progression of your child, and live updates on what
				class your child has checked into.
			</Typography>
		</Box>
	);
};
