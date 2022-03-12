import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import Container from '@mui/material/Container';
import { largeButtons } from '../styles';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import schoolify from '../assets/img/logo.png';

export const Home = () => {
	return (
		<Container component='main' maxWidth='md'>
			<PublicNavBar />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'center',
					m: '5rem',
				}}>
				<h1>Welcome the Parents signup/login portal.</h1>
				<p>
					Please sign-up and then login to be transfered to your dashboard where
					you can keep up to date with your child's progress and register any
					appointments
				</p>
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
			</Container>
		</Container>
	);
};
