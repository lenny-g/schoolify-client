import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive';

import { MOBILE, DESKTOP } from '../media';
import { ParentsAbsenceRequestTable } from '../components/ParentsAbsenceRequestTable';
import { PageContainer } from '../components/PageContainer';
import { item } from '../styles';
import { AbsenceRequestCard } from '../components/AbsenceRequestCard/ParentAbsenceRequestCard';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '10px',
	},
};
export const ViewParentsAbsenceRequests = () => {
	const isMobile = useMediaQuery(MOBILE);
	const isDesktop = useMediaQuery(DESKTOP);
	return (
		<PageContainer>
			<Grid container sx={item.outerContainer}>
				<Grid item xs={12}>
					{isMobile && <AbsenceRequestCard />}
					{isDesktop && <ParentsAbsenceRequestTable />}
				</Grid>
				<Grid item xs={12} sx={{ textAlign: 'center', mt: '25px' }}>
					<Button variant='contained' sx={item.btn} color='secondary'>
						Request Absence
					</Button>
				</Grid>
			</Grid>
		</PageContainer>
	);
};
