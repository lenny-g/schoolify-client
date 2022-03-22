import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { GREEN } from '../../styles';

export const IncidentListDesktop = ({
	studentList,
	setStudent,
	studentIncidents,
	renderIncidentReportOnClick,
	student,
	//   setShowCommentSection,
}) => {
	return (
		<Box>
			<Grid
				item
				xs={12}
				sx={{
					padding: '10px',
					display: 'flex',
				}}>
				<FormControl sx={{ mt: 2 }} fullWidth>
					<InputLabel color='warning' id='child'>
						Child
					</InputLabel>
					<Select
						color='warning'
						defaultValue={``}
						labelId='child'
						id='child'
						label='child'
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
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					padding: '10px',
				}}>
				{studentIncidents()?.length === 0 && student ? (
					<Alert severity='info'>
						There are no incident reports regarding this student
					</Alert>
				) : (
					''
				)}

				{studentIncidents()?.map((each, index) => {
					return (
						<Box
							onClick={() => {
								renderIncidentReportOnClick(each.id);
							}}
							key={index}
							sx={{
								padding: '10px',
								backgroundColor: GREEN,
								borderRadius: '10px',
								mb: 2,
							}}>
							<Grid container>
								<Grid item xs={12} sm={6}>
									<Typography variant='body2' sx={{ textAlign: 'left' }}>
										{each.teacher.firstName} {each.teacher.lastName}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Typography variant='body2' sx={{ textAlign: 'right' }}>
										{each.dateTime.split(' ').slice(0, 4).join(' ')}
									</Typography>
								</Grid>
							</Grid>

							<Typography variant='subtitle1'>{each.title}</Typography>
						</Box>
					);
				})}
			</Grid>
		</Box>
	);
};
