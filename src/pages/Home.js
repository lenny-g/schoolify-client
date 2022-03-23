import Container from '@mui/material/Container';

import { HomePageIntro } from '../components/HomePageIntro';
import { ConfirmModal } from '../components/ConfirmModal';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

export const Home = () => {
	return (
		<Container component="main">
			<ConfirmModal />
			<HomePageIntro />
		</Container>
	);
};
