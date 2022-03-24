import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';

import { MOBILE, DESKTOP } from '../../media';
import { home, homeContainerStyles } from '../../styles';
import chat from '../../assets/img/chat.png';

export const HomePageFour = () => {
	const isMobile = useMediaQuery(MOBILE);
	const isDesktop = useMediaQuery(DESKTOP);
	return (
		<Box sx={homeContainerStyles(isMobile)}>
			<Box sx={home.page}>
				<Box sx={home.left}>
					<Box
						component="img"
						sx={{ width: isMobile ? '250px' : '100%' }}
						alt="Home Image"
						src={chat}
					/>
				</Box>
				<Box sx={home.right}>
					<Stack spacing={2} sx={{ padding: '2rem' }}>
						<Typography
							variant={isMobile ? 'h5' : 'h3'}
							sx={{ fontWeight: 700 }}>
							Busy Parents can be notified of incidents immediately
						</Typography>
						<Typography variant={isMobile ? 'subtitle1' : 'h5'}>
							Schoolify offers a <b>chat portal</b>, between the teacher and the
							parent upon an incident being created.
						</Typography>
						<Typography variant={isMobile ? 'cbody2' : 'subtitle1'}>
							Keeping the teacher and the child protected by enhancing
							communication channels.
						</Typography>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};
