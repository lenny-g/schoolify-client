import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { item } from '../../styles';
import { Logo } from '../Logo/index';
import confetti from '../../assets/img/confetti.png';

export const HomePageTwo = () => {
	return (
		<Grid
			container
			sx={{
				display: 'flex',
				alignItems: 'center',
				margin: 'auto',
			}}>
			<Grid item={true} xs={12} sm={6}>
				<Stack spacing={2}>
					<Typography variant="h3">
						By sending certificates of recognition
					</Typography>
					<Typography variant="h5">
						Teachers are able to really <b>SHOUT</b> about your child's
						achievements!
					</Typography>
					<Typography variant="subtitle1">
						Positive reinforcement, helps shape our children
					</Typography>
				</Stack>
			</Grid>
			<Grid item={true} xs={12} sm={6}>
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
			<Box sx={{ textAlign: 'center', m: '10px' }}>
				<Typography
					variant="h5"
					gutterBottom
					component="div"
					sx={{ m: '10px' }}>
					Ever forgotten to notify the school of an upcoming appointment for
					your child that results in an 'unauthorized absence'?
				</Typography>
				<Typography
					variant="subtitle1"
					gutterBottom
					component="div"
					sx={{ m: '10px' }}>
					What if we tell you that you can pre-plan requests for leave? We
					understand how frustrating it is when your request for leave is
					rejected - we support 'rejection with reason', so that you too can
					know the reason behind teh decision.
				</Typography>
			</Box>
		</Grid>
	);
};
