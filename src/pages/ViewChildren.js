import { ChildrenCards } from '../components/ChildrenCards';
import { ParentNavBar } from '../components/NavigationBar/ParentNavBar';
import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const ViewChildren = () => {
	return (
		<Container>
			<ParentNavBar />
			<Container component='main' maxWidth='md'>
				<Paper elevation={6} style={styles.paperContainer}>
					<div className='logoContainer'>
						<img src={logo} className='logo' />
					</div>
					<ChildrenCards />
				</Paper>
			</Container>
		</Container>
	);
};
