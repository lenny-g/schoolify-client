import { MedicalForm } from '../components/MedicalForm';
import Container from '@mui/material/Container';
import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';

export const Medical = () => {
	return (
		<Container>
			<PublicNavBar />
			<Container component='main' maxWidth='xs'>
				<MedicalForm />
			</Container>
		</Container>
	);
};
