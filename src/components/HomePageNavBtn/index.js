import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import { largeButtons, item, colors, headers } from '../../styles';

export const HomePageNavBtn = () => {
	return (
		<Box sx={item.outerContainer}>
			<Link href='/parent/sign-up'>
				<Box sx={largeButtons.container}>
					<img src=''></img>
					<Typography variant='subtitle2' gutterBottom component='div'>
						Signup as a Parent
					</Typography>

					<ArrowRightAlt sx={{ textAlign: 'center' }} />
				</Box>
			</Link>
			<Link href='/teacher/sign-up'>
				<Box sx={largeButtons.container}>
					<Typography variant='subtitle2' gutterBottom component='div'>
						Signup as a Teacher
					</Typography>
					<ArrowRightAlt />
				</Box>
			</Link>
			<Link href='/login'>
				<Box sx={largeButtons.container}>
					<Typography variant='subtitle2' gutterBottom component='div'>
						Login
					</Typography>
					<ArrowRightAlt />
				</Box>
			</Link>
		</Box>
	);
};
