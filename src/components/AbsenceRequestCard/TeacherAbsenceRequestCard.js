import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { forms } from '../../styles';

export const AbsenceRequestCard = ({
	name,
	absenceRequestId,
	studentId,
	yearGroup,
	type,
	description,
	dateTime,
	status,
	colorStyling,
	onApproved,
	onRejected,
	cardButtons,
}) => {
	return (
		<Box
			sx={{
				...forms.container,
				backgroundColor: colorStyling,
				maxWidth: 250,
				margin: 1,
				textAlign: 'center',
			}}>
			<Typography variant="h3" color="text.secondary">
				{status}
			</Typography>
			<Typography variant="h5" sx={{ mb: 2 }}>
				{name} {yearGroup}
			</Typography>
			<Typography variant="subtitle1" sx={{ mb: 2 }}>
				{dateTime}
			</Typography>
			<Typography variant="subtitle1">{type}</Typography>
			<Typography variant="body1">{description}</Typography>
			{cardButtons && (
				<Box>
					<Button
						sx={{ m: 1 }}
						variant="contained"
						color="warning"
						size="small"
						onClick={() => {
							onApproved(absenceRequestId, studentId);
						}}>
						<CheckIcon sx={{ color: '#06a206' }} />
						APPROVED
					</Button>
					<Button
						sx={{ m: 1 }}
						variant="contained"
						color="warning"
						size="small"
						onClick={() => {
							onRejected(absenceRequestId, studentId);
						}}>
						<CloseIcon sx={{ color: '#c13030' }} />
						REJECTED
					</Button>
				</Box>
			)}
		</Box>
	);
};
