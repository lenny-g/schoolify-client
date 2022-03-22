import Container from '@mui/material/Container';

import { HomePageIntro } from '../components/HomePageIntro';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

export const Home = () => {
	return (
		<Container component='main'>
			<HomePageIntro />
		</Container>
	);
};
