import { IncidentReportForm } from '../components/IncidentReportForm';
import { PageContainer } from '../components/PageContainer';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const TeacherIncidentReport = () => {
	return (
		<PageContainer>
			<IncidentReportForm />
		</PageContainer>
	);
};
