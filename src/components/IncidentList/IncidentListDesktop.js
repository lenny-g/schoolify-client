import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { GREEN } from '../../styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const IncidentListDesktop = ({
	studentList,
	setStudent,
	studentIncidents,
	renderIncidentReportOnClick,
	student,
	//   setShowCommentSection,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flex: 1,
			}}>
			<FormControl sx={{ mt: 2, padding: '10px' }} fullWidth>
				<InputLabel color="warning" id="child" sx={{ padding: '10px' }}>
					Child's name
				</InputLabel>
				<Select
					color="warning"
					defaultValue={``}
					labelId="Enter child's name"
					id="child"
					label="child"
					onChange={(e) => {
						setStudent(e.target.value);
						// setShowCommentSection(false);
					}}>
					{studentList?.map((each, index) => (
						<MenuItem key={index} value={each.id}>
							{each.firstName} {each.lastName}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Stack
				sx={{
					padding: '10px',
					maxHeight: '370px',
					overflow: 'auto',
				}}>
				{studentIncidents()?.length === 0 && student ? (
					<Alert severity="info">
						There are no incident reports regarding this student
					</Alert>
				) : (
					''
				)}

				{studentIncidents()?.map((each, index) => {
					return (
						<Stack
							onClick={() => {
								renderIncidentReportOnClick(each.id);
							}}
							key={index}
							sx={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								padding: '10px',
								backgroundColor: GREEN,
								borderRadius: '10px',
								mb: 2,
							}}>
							<Box>
								<Typography variant="body2">
									{each.teacher.firstName} {each.teacher.lastName}
								</Typography>
								<Typography variant="caption">
									{each.dateTime.split(' ').slice(0, 4).join(' ')}
								</Typography>
								<Typography sx={{ textTransform: 'upperCase' }} variant="body1">
									{each.title}
								</Typography>
							</Box>
							<Box sx={{ p: '20px' }}>
								<ArrowCircleRightIcon />
							</Box>
						</Stack>
					);
				})}
			</Stack>
		</Box>
	);
};
