import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { AddChildForm } from '../components/AddChild/AddChildForm';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

export const AddChild = () => {
	return (
		<Container component='main' maxWidth='md'>
			<Paper elevation={6} style={styles.paperContainer}>
				<Logo />
				<AddChildForm />
			</Paper>
		</Container>
	);
};
