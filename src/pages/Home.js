import { HomePageNavBtn } from '../components/HomePageNavBtn';
import { HomePageIntro } from '../components/HomePageIntro';
import logoMain from '../assets/img/logoMain.png';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

export const Home = () => {
	return (
		<Container component='main'>
			<Paper elevation={6} style={styles.paperContainer}>
				<Logo />
				<HomePageIntro />
				<HomePageNavBtn />
			</Paper>
		</Container>
	);
};
