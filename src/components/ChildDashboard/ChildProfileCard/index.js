import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { colors, item } from '../../../styles';

export const ChildProfileCard = ({ firstName, lastName, yearGroup, id }) => {
	return (
		<Box sx={item.inputBox} width='250px'>
			<Avatar
				alt='teacher signup'
				src='https://cdn.24.co.za/files/Cms/General/d/10868/da4178db584e45fab43b01ea0f9aad30.jpg'
				sx={{ width: 200, height: 200 }}
			/>
			<Box sx={item.inputBox}>
				<Typography variant='subtitle1' gutterBottom>
					Medical Requirements:
				</Typography>
				<Box sx={{ textAlign: 'center' }}>
					<Typography variant='subtitle2' gutterBottom sx={{ m: '10px' }}>
						Allergies:
					</Typography>
					<Stack
						direction='row'
						spacing={1}
						sx={{ display: 'flex', justifyContent: 'center' }}>
						<Chip label='peanuts' />
						<Chip label="cow's milk" />
						<Chip label='hayfever' />
					</Stack>
					<Box>
						<Typography variant='subtitle2' gutterBottom sx={{ m: '10px' }}>
							Disabilities:
						</Typography>
						<Stack
							direction='row'
							spacing={1}
							sx={{ display: 'flex', justifyContent: 'center' }}>
							<Chip label='autism' />
							<Chip label='learning' />
						</Stack>
					</Box>
					<Box>
						<Typography variant='subtitle2' gutterBottom sx={{ m: '10px' }}>
							Medication:
						</Typography>
						<Stack
							direction='row'
							spacing={1}
							sx={{ display: 'flex', justifyContent: 'center' }}>
							<Chip label='Inhaler' />
							<Chip label='Epipen' />
						</Stack>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
