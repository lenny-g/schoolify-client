import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';

export const IncidentList = () => {
	return (
		<Box>
			<Typography variant='h4'>Date and Time </Typography>
			<Divider sx={{ mb: '2rem' }} />
			<Typography variant='body'>
				Billy fell over and bruised himself...
			</Typography>
		</Box>
	);
};
