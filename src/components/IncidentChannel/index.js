import { item, GREEN, forms } from '../../styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const IncidentChannel = ({
	incidentReportDataById,
	studentIncidents,
}) => {
	const userRole = JSON.parse(localStorage.getItem('user')).firstName;

	const incidentReportData = studentIncidents()?.find((each) => {
		return each.id === incidentReportDataById;
	});

	return (
		<Box sx={{ ...forms.container, backgroundColor: GREEN }}>
			<Grid item xs={12}>
				<Typography
					variant='h6'
					gutterBottom
					component='div'
					sx={{ textAlign: 'center', fontWeight: 700 }}>
					{incidentReportData?.title}
				</Typography>
			</Grid>
			<Grid container>
				<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
					<Box sx={item.teacherComment}>
						<Typography variant='body1'>
							{incidentReportData?.description}
						</Typography>
						<Typography variant='caption'>
							{incidentReportData?.teacher.title}
							{incidentReportData?.teacher.firstName}
							{incidentReportData?.teacher.lastName}
						</Typography>
					</Box>
				</Grid>
				{incidentReportData?.comments?.map((each, index) => {
					return (
						<Grid
							key={index}
							item
							xs={12}
							sx={{
								display: 'flex',
								justifyContent: each.name === userRole ? 'start' : 'end',
							}}>
							<Box
								sx={
									each.name === userRole
										? item.teacherComment
										: item.parentComment
								}>
								<Typography variant='body1'>{each.message}</Typography>
								<Typography variant='caption'>
									{each.dateTime.split(' ').slice(4, 5).join(' ')}
								</Typography>
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};
