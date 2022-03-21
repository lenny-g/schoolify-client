import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { PageContainer } from '../components/PageContainer/';

import { VIEW_CHILD } from '../graphql/query';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { item, forms, PURPLE, headers } from '../styles';
import { AbsenceRequestSummary } from '../components/ChildDashboard/AbsenceRequestSummary';
import { ChildProfileCard } from '../components/ChildDashboard/ChildProfileCard';
import { PageTitle } from '../components/PageTitle';

export const StudentInfo = (props) => {
	const { studentId } = useParams();

	const { data, loading, error, refetch } = useQuery(VIEW_CHILD, {
		variables: { studentId },

		pollInterval: 1000,
	});
	const childData = data?.viewChild;
	if (error) {
		return <div>ERROR</div>;
	}
	if (loading) {
		return <LinearProgress style={{ backgroundColor: 'purple' }} />;
	}

	console.log(childData);
	console.log(data.viewChild);

	return (
		<PageContainer>
			<Grid container sx={item.outerContainer}>
				<Grid item xs={12}>
					<PageTitle>
						{childData.firstName} {childData.lastName}'s Dashboard
					</PageTitle>
				</Grid>
				<Grid container>
					<Grid item xs={12} md={4}>
						<Box sx={{ ...forms.container, backgroundColor: PURPLE }}>
							<ChildProfileCard childData={childData} />
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={{ ...forms.container, backgroundColor: PURPLE }}>Box1</Box>
						<Box sx={{ ...forms.container, backgroundColor: PURPLE }}>box2</Box>
					</Grid>

					<Grid item xs={12} md={4}>
						<Box sx={{ ...forms.container, backgroundColor: PURPLE }}>
							<AbsenceRequestSummary childData={childData} />
						</Box>

						<Box sx={{ ...forms.container, backgroundColor: PURPLE }}>box4</Box>
					</Grid>
				</Grid>
			</Grid>
		</PageContainer>
	);
};
