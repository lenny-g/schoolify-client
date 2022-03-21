import { AbsenceForm } from '../components/AbsenceForm';
import { PageContainer } from '../components/PageContainer';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};

export const AbsenceRequest = () => {
	return (
		<PageContainer>
			<AbsenceForm />
		</PageContainer>
	);
};
