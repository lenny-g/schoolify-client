import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';

import { MOBILE } from '../media';
import { HomePageOne } from '../components/HomePageOne';
import { HomePageTwo } from '../components/HomePageTwo';
import { HomePageThree } from '../components/HomePageThree';
import { HomePageFour } from '../components/HomePageFour';

export const Home = ({ children }) => {
	const isMobile = useMediaQuery(MOBILE);

	return (
		<Container>
			<Stack spacing={8}>
				<HomePageOne />
				<HomePageTwo />
				<HomePageThree />
				<HomePageFour />
			</Stack>
			<Stack spacing={2} sx={{ textAlign: 'center', padding: '2rem' }}>
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
			</Stack>
		</Container>
	);
};
