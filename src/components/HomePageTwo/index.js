import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';

import { MOBILE, DESKTOP } from '../../media';
import { home, homeContainerStyles } from '../../styles';
import confetti from '../../assets/img/confetti.png';

export const HomePageTwo = () => {
	const isMobile = useMediaQuery(MOBILE);
	const isDesktop = useMediaQuery(DESKTOP);
	return (
		<Box sx={homeContainerStyles(isMobile)}>
			<Box sx={home.page}>
				<Box sx={home.right}>
					<Stack spacing={2} sx={{ padding: '2rem' }}>
						<Typography
							variant={isMobile ? 'h5' : 'h3'}
							sx={{ fontWeight: 700 }}>
							By sending certificates of recognition
						</Typography>
						<Typography variant={isMobile ? 'subtitle1' : 'h5'}>
							Teachers are able to really <b>SHOUT</b> about your child's
							achievements!
						</Typography>
						<Typography variant={isMobile ? 'caption' : 'subtitle1'}>
							Positive reinforcement, helps shape our children
						</Typography>
					</Stack>
				</Box>
				<Box sx={home.left}>
					<Box
						component="img"
						alt="Home Image"
						sx={{ width: isMobile ? '250px' : '100%' }}
						src={confetti}
					/>
				</Box>
			</Box>
		</Box>
	);
};
