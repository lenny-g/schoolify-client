import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { item, colors } from '../../styles';
import Grid from '@mui/material/Grid';

export const IncidentList = () => {
	return (
		<Box>
			<Grid
				item
				xs={12}
				sx={{
					padding: '10px',
				}}>
				<Box
					sx={{
						padding: '10px',
						backgroundColor: 'lightblue',
						borderRadius: '10px',
					}}>
					<Grid container>
						<Grid item xs={12} md={6}>
							<Typography variant='body2' sx={{ textAlign: 'left' }}>
								Miss Jones
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant='body2' sx={{ textAlign: 'right' }}>
								18.03.2022
							</Typography>
						</Grid>
					</Grid>

					<Typography variant='subtitle1'>Billy had a fall</Typography>
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					padding: '10px',
					display: 'flex',
				}}>
				<Box
					sx={{
						width: '100%',
						padding: '10px',
						backgroundColor: 'lightblue',
						borderRadius: '10px',
					}}>
					<Grid container>
						<Grid item xs={12} md={6}>
							<Typography variant='body2' sx={{ textAlign: 'left' }}>
								Miss Jones
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant='body2' sx={{ textAlign: 'right' }}>
								18.03.2022
							</Typography>
						</Grid>
					</Grid>

					<Typography variant='subtitle1'>Billy's PE Kit</Typography>
				</Box>
			</Grid>
		</Box>
	);
};
