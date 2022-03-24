import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { item } from '../../styles';
import { Logo } from '../Logo/index';
import confetti from '../../assets/img/confetti.png';

export const HomePageThree = () => {
	return (
		<Grid
			container
			sx={{
				display: 'flex',
				alignItems: 'center',
				margin: 'auto',
			}}>
			<Grid item={true} xs={12} sm={6} sx={{ mt: 6 }}>
				<Box
					component="img"
					sx={{
						width: '70%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						margin: 'auto',
					}}
					alt="Home Image"
					src={confetti}
				/>
			</Grid>
			<Grid item={true} xs={12} sm={6}>
				<Stack spacing={2}>
					<Typography variant="h3">
						Busy Parents can be notified of incidents immediately
					</Typography>
					<Typography variant="h5">
						Schoolify offers a <b>chat portal</b>, between the teacher and the
						parent upon an incident being created.
					</Typography>
					<Typography variant="subtitle1">
						Keeping the teacher and the child protected by enhancing
						communication channels.
					</Typography>
				</Stack>
			</Grid>
			<Box sx={{ textAlign: 'center', m: '10px' }}>
				<Typography
					variant="h5"
					gutterBottom
					component="div"
					sx={{ m: '10px' }}>
					Just one app, the <b>ONLY</b> app for teachers, parents and schools.
				</Typography>
				<Typography
					variant="subtitle1"
					gutterBottom
					component="div"
					sx={{ m: '10px' }}>
					This app works towards cutting green emissions, by reducing paper
					communication, and streamlining conversations between teachers and
					parents electronically. This app also documents conversations and
					progress of children for future reference as a smart way of tracking
					progress. Thus protecting our children, our teachers and our school.
				</Typography>
			</Box>
		</Grid>
	);
};
