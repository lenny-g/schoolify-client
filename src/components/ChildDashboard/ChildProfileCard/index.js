import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import { MedicalInfo } from './MedicalInfo';

export const ChildProfileCard = ({ childData }) => {
	return (
		<Box>
			<Avatar
				alt='teacher signup'
				src={childData?.profileImageUrl}
				sx={{ width: 150, height: 150 }}
			/>
			<MedicalInfo childData={childData} />
		</Box>
	);
};
