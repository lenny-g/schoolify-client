import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive';

import { MOBILE, DESKTOP } from '../media';
import { ParentsAbsenceRequestTable } from '../components/ParentsAbsenceRequestTable';
import { Logo } from '../components/Logo';
import { item } from '../styles';
import { AbsenceRequestCard } from '../components/AbsenceRequestCard/parentAbsenceRequestCard';

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
		<Container component='main'>
			<Paper elevation={6} style={styles.paperContainer}>
				<Logo />
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
			</Paper>
		</Container>
	);
};
