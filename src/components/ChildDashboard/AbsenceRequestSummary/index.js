import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const stylingRowColor = (status) => {
	if (status === 'PENDING') return 'lightGray';
	if (status === 'APPROVED') return 'lightGreen';
	if (status === 'REJECTED') return 'red';
};

const checkStatus = (absenceRequest) => {
	if (absenceRequest.status === 'reject') {
	}
	return true;
};

export const AbsenceRequestSummary = ({ childData }) => {
	console.log(childData);
	return (
		<Box>
			<Typography
				className='headingFont'
				variant='subtitle1'
				gutterBottom
				component='Box'>
				Absence Requests:
			</Typography>
			{childData?.absenceRequests?.map((absenceRequest, index) => {
				return (
					<Accordion
						disabled
						sx={{ backgroundColor: stylingRowColor(absenceRequest.status) }}>
						<AccordionSummary>
							<Typography>
								{absenceRequest.type} {absenceRequest.dateTime}
								{absenceRequest.status}
							</Typography>
						</AccordionSummary>
						{checkStatus(absenceRequest) && (
							<AccordionDetails>
								<Typography>
									We cannot allow child to have a day off for a family trip, as
									there are ample opportunities during half term break.
								</Typography>
							</AccordionDetails>
						)}
					</Accordion>
				);
			})}
		</Box>
	);
};
