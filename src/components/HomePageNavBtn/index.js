import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import parentButton from '../../assets/img/parentButton.png';
import teacherButton from '../../assets/img/teacherButton.png';
import login from '../../assets/img/login.png';

import { largeButtons, item, colors, headers } from '../../styles';

export const HomePageNavBtn = () => {
	return (
		<Box sx={item.outerContainer}>
			<Link href='/parent/sign-up' sx={{ textDecoration: 'none' }}>
				<Box sx={largeButtons.container}>
					<Avatar
						alt='parent signup'
						src={parentButton}
						sx={{ width: 80, height: 80 }}
					/>
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
					<Avatar
						alt='teacher signup'
						src={teacherButton}
						sx={{ width: 80, height: 80 }}
					/>
					<Typography variant='subtitle2' gutterBottom sx={{ color: 'black' }}>
						Signup as a Teacher
					</Typography>
					<ArrowRightAlt />
				</Box>
			</Link>
			<Link href='/login' sx={{ textDecoration: 'none' }}>
				<Box sx={largeButtons.container}>
					<Avatar alt='login' src={login} sx={{ width: 80, height: 80 }} />
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
