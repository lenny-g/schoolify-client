import { item, GREEN, forms } from '../../styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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
			<Typography
				variant="h6"
				gutterBottom
				component="div"
				sx={{ textAlign: 'center' }}>
				{incidentReportData?.title}
			</Typography>
			<Stack spacing={2}>
				<Box sx={item.incident}>
					<Typography variant="body1">
						{incidentReportData?.description}
					</Typography>
					<Typography variant="caption">
						{incidentReportData?.teacher.title}
						{incidentReportData?.teacher.firstName}
						{incidentReportData?.teacher.lastName}
					</Typography>
				</Box>

				{incidentReportData?.comments?.map((each, index) => {
					return (
						<Box
							key={index}
							sx={
								each.name === userRole
									? item.teacherComment
									: item.parentComment
							}>
							<Typography variant="body1">{each.message}</Typography>
							<Typography variant="caption">
								{each.dateTime.split(' ').slice(4, 5).join(' ')}
							</Typography>
						</Box>
					);
				})}
			</Stack>
		</Box>
	);
};
