import { AddChildForm } from '../components/AddChild/AddChildForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import logo from '../assets/img/logo.png';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const AddChild = () => {
	return (
		<Container component='main' maxWidth='md'>
			<Container component='main' maxWidth='md'>
				<Paper elevation={6} style={styles.paperContainer}>
					<Logo />
					<AddChildForm />
				</Paper>
			</Container>
		</Container>
	);
};
