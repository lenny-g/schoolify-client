import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { MOBILE } from '../../media';
import { useMediaQuery } from 'react-responsive';

import errorImg from '../../assets/img/errorImg.png';

export const PageError = ({}) => {
	const isMobile = useMediaQuery(MOBILE);
	return (
		<Box container>
			<Stack spacing={2} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
				<Typography variant='h3'>Well... this is awkward</Typography>
				<Typography variant='h5'>
					Either you mistyped the URL or we deleted that page, but lets agree to
					blame this on you.
				</Typography>
			</Stack>

			<Box
				component='img'
				sx={{
					maxWidth: { xs: 200, md: 300 },
					display: 'flex',
					justifyContent: 'center',
					margin: 'auto',
				}}
				alt='logo'
				src={errorImg}
			/>
		</Box>
	);
};
