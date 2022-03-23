import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import { forms } from '../../styles';

export const AbsenceRequestCard = ({
	onDelete,
	absenceRequestId,
	id,
	name,
	yearGroup,
	type,
	description,
	dateTime,
	status,
	colorStyling,
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
						sx={{ m: 2 }}
						variant="contained"
						color="warning"
						size="small"
						onClick={() => {
							onDelete(id, absenceRequestId);
						}}>
						<DeleteIcon sx={{ color: '#c13030' }} />
						DELETE
					</Button>
				</Box>
			)}
		</Box>
	);
};
