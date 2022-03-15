import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import Container from '@mui/material/Container';
import { HomePageNavBtn } from '../components/HomePageNavBtn';
import { Paper } from '@material-ui/core';
import logoMain from '../assets/img/logoMain.png';
import { colors } from '../styles';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const Home = () => {
	return (
		<Container component='main' maxWidth='md'>
			<PublicNavBar />
			<Container component='main' maxWidth='md'>
				<Paper elevation={6} style={styles.paperContainer}>
					<div className='logoContainer'>
						<img src={logoMain} className='logo' />
					</div>
					{/* <Container
						sx={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'center',
							m: '5rem',
						}}>
						<h1>Welcome the Parents signup/login portal.</h1>
						<p>
							Please sign-up and then login to be transfered to your dashboard
							where you can keep up to date with your child's progress and
							register any appointments
						</p>
					</Container> */}
					<HomePageNavBtn />
				</Paper>
			</Container>
		</Container>
	);
};
