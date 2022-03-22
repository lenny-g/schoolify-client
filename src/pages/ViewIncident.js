import Grid from '@mui/material/Grid';
import { IncidentChannel } from '../components/IncidentChannel';
import { IncidentListDesktop } from '../components/IncidentList/IncidentListDesktop';
import { IncidentListMobile } from '../components/IncidentList/IncidentListMobile';
import { MOBILE, DESKTOP } from '../media';
import { useMediaQuery } from 'react-responsive';
import { IncidentComment } from '../components/IncidentComment';
import Typography from '@mui/material/Typography';
import { headers } from '../styles';

import { PageContainer } from '../components/PageContainer';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const ViewIncident = () => {
	const isMobile = useMediaQuery(MOBILE);
	const isDesktop = useMediaQuery(DESKTOP);
	return (
		<PageContainer>
			<Grid item xs={12}>
				<Typography
					className='headingFont'
					variant='h5'
					gutterBottom
					component='div'
					sx={headers.font}>
					Incident Form
				</Typography>
			</Grid>
			<Grid container>
				{isMobile && (
					<Grid item xs={12}>
						<IncidentListMobile />
					</Grid>
				)}
				{isDesktop && (
					<Grid item xs={4}>
						<IncidentListDesktop />
					</Grid>
				)}

				{isMobile && (
					<Grid item xs={12}>
						<IncidentChannel />
					</Grid>
				)}
				{isDesktop && (
					<Grid item xs={8}>
						<IncidentChannel />
					</Grid>
				)}
			</Grid>
			<Grid container>
				<IncidentComment />
			</Grid>
		</PageContainer>
	);
};
