import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import { forms, GREEN } from '../../../styles';

export const ChildCard = ({
	firstName,
	lastName,
	yearGroup,
	id,
	profileImageUrl,
}) => {
	return (
		<Box
			sx={{ ...forms.container, backgroundColor: GREEN, maxWidth: '250px' }}
			maxWidth="250px">
			<Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
				{firstName} {lastName}
			</Typography>
			<Typography variant="subtitle2" gutterBottom sx={{ color: 'black' }}>
				{yearGroup.title}
			</Typography>
			<Avatar
				alt="teacher signup"
				src={profileImageUrl}
				sx={{ width: 200, height: 200 }}
			/>
			<Button
				sx={{ mt: '20px', borderRadius: '10px' }}
				variant="contained"
				color="warning"
				id={id}>
				View
			</Button>
		</Box>
	);
};
