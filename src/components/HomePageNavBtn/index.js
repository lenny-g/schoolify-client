import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import { largeButtons, item } from '../../styles';

export const HomePageNavBtn = () => {
	return (
		<Box sx={item.outerContainer}>
			<Link href='/parent/sign-up' sx={{ textDecoration: 'none' }}>
				<Box sx={largeButtons.container}>
					<Typography
						variant='subtitle2'
						gutterBottom
						underline='none'
						sx={{ color: 'black' }}>
						Signup as a Parent
					</Typography>

					<ArrowRightAlt sx={{ textAlign: 'center' }} />
				</Box>
			</Link>
			<Link href='/teacher/sign-up' sx={{ textDecoration: 'none' }}>
				<Box sx={largeButtons.container}>
					<Typography variant='subtitle2' gutterBottom sx={{ color: 'black' }}>
						Signup as a Teacher
					</Typography>
					<ArrowRightAlt />
				</Box>
			</Link>
			<Link href='/login' sx={{ textDecoration: 'none' }}>
				<Box sx={largeButtons.container}>
					<Typography
						variant='subtitle2'
						gutterBottom
						underline='none'
						sx={{ color: 'black' }}>
						Login
					</Typography>
					<ArrowRightAlt />
				</Box>
			</Link>
		</Box>
	);
};
