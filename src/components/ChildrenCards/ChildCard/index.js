import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import { colors, item } from '../../../styles';

export const ChildCard = ({ firstName, lastName, yearGroup, id }) => {
	return (
		<Grid container sx={item.inputBox}>
			<Box sx={colors.yellow} maxWidth='250px'>
				<Typography variant='h6' gutterBottom sx={{ color: 'black' }}>
					{firstName} {lastName}
				</Typography>
				<Typography variant='subtitle2' gutterBottom sx={{ color: 'black' }}>
					{yearGroup.title}
				</Typography>
				<Avatar
					alt='teacher signup'
					src='https://cdn.24.co.za/files/Cms/General/d/10868/da4178db584e45fab43b01ea0f9aad30.jpg'
					sx={{ width: 200, height: 200 }}
				/>
				<Button
					sx={{ mt: '20px', borderRadius: '10px' }}
					variant='contained'
					color='secondary'
					id={id}>
					View
				</Button>
			</Box>
		</Grid>
	);
};
