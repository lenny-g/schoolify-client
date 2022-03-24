import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { item } from '../../styles';
import { Logo } from '../Logo/index';
import chat from '../../assets/img/chat.png';

export const HomePageThree = () => {
	return (
		<Grid
			container
			sx={{
				display: 'flex',
				margin: 'auto',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Grid item={true} xs={12} sm={6} sx={{ mt: 6 }}>
				<Box
					component="img"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					alt="Home Image"
					src={chat}
				/>
			</Grid>
			<Grid item={true} xs={12} sm={6} sx={{ marginTop: '2rem' }}>
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
			<Box sx={{ textAlign: 'center' }}>
				<Typography
					variant="h3"
					gutterBottom
					component="div"
					sx={{ m: '10px' }}>
					Schoolify
				</Typography>
				<Typography
					variant="h5"
					gutterBottom
					component="div"
					sx={{ m: '10px' }}>
					Just <b>one</b> app, the <b>ONLY</b> app for teachers, parents and
					schools.
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
