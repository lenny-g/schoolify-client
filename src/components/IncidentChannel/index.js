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
						<Box sx={item.teacherComment}> hello mum</Box>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							display: 'flex',
							justifyContent: 'start',
						}}>
						<Box sx={item.parentComment}> hi miss</Box>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							display: 'flex',
							justifyContent: 'start',
						}}>
						<Box sx={item.parentComment}> hows my son today?</Box>
					</Grid>
					<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
						<Box sx={item.teacherComment}> slight tummy pain- but hes ok!</Box>
					</Grid>
				</Grid>
			</Box>
		</Grid>
	);
};
