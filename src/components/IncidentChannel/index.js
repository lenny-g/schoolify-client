import { item, colors } from '../../styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const roleOptions = [
	{ value: 'parent', title: 'Parent' },
	{ value: 'teacher', title: 'Teacher' },
];

export const IncidentChannel = () => {
	return (
		<Grid container component='form' sx={item.outerContainer}>
			<Box sx={colors.green}>
				<Grid item xs={12}>
					<Typography
						variant='h6'
						gutterBottom
						component='div'
						sx={{ textAlign: 'center' }}>
						Incident title goes here
					</Typography>
				</Grid>
				<Grid container>
					<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
						<Box sx={item.teacherComment}>
							<Typography variant='body1'>
								Billy hurt his knee today after getting into a fight with a
								nother student. however this has been dealth with, and we can
								assure you taht this wont happen agaoin.
							</Typography>
							<Typography variant='caption'>Miss Jones</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							display: 'flex',
							justifyContent: 'start',
						}}>
						<Box sx={item.parentComment}>
							{' '}
							<Typography variant='body1'>
								thanks for letting me know
							</Typography>
							<Typography variant='caption'>10.30am</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							display: 'flex',
							justifyContent: 'start',
						}}>
						<Box sx={item.parentComment}>
							<Typography variant='body1'>i will have a word later</Typography>
							<Typography variant='caption'>10.40am</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
						<Box sx={item.teacherComment}>
							{' '}
							<Typography variant='body1'>great!</Typography>
							<Typography variant='caption'>10.40am</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Grid>
	);
};
