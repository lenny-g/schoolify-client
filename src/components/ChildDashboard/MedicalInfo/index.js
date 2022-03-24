import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AppProvider';

export const MedicalInfo = ({ childData }) => {
	const { user } = useAuth();

	const navigate = useNavigate();

	const isParent = () => {
		if (user.role === 'parent') {
			return true;
		}
	};

	return (
		<Stack spacing={2} sx={{ textAlign: 'center' }}>
			<Typography variant="subtitle1" align="center">
				Medical Requirements:
			</Typography>

			{!childData.medical ? (
				<>
					{isParent === false ? (
						<Alert variant="outlined" severity="info">
							{childData.firstName} {childData.lastName} doesn't have any
							medical information yet.
						</Alert>
					) : (
						<>
							<Alert variant="outlined" severity="info">
								{childData.firstName} {childData.lastName} doesn't have any
								medical information yet, click on the 'Add Medical' button to
								add information.
							</Alert>
							<Button
								sx={{ mt: 2, width: '100%' }}
								variant="contained"
								color="warning"
								size="small"
								onClick={() => {
									navigate('/medical/new', { replace: true });
								}}>
								Add Medical
							</Button>
						</>
					)}
				</>
			) : (
				<>
					<Typography variant="subtitle2" gutterBottom>
						Allergies:
					</Typography>
					<Box direction="column">
						{childData?.medical?.allergies?.map((allergy, index) => {
							return (
								<Chip
									label={allergy}
									key={index}
									sx={{ ml: '5px', backgroundColor: '#5ccbb6' }}
								/>
							);
						})}
					</Box>
					<Typography variant="subtitle2" gutterBottom>
						Disabilities:
					</Typography>
					<Box direction="column">
						{childData?.medical?.disabilities?.map((disability, index) => {
							return (
								<Chip
									label={disability}
									key={index}
									sx={{ ml: '5px', backgroundColor: '#5ccbb6' }}
								/>
							);
						})}
					</Box>
					<Typography variant="subtitle2" gutterBottom>
						Medication:
					</Typography>
					<Box direction="column">
						{childData?.medical?.medications?.map((medication, index) => {
							return (
								<Chip
									label={medication}
									key={index}
									sx={{ ml: '5px', backgroundColor: '#5ccbb6' }}
								/>
							);
						})}
					</Box>
					<Typography variant="subtitle2" gutterBottom>
						Additional Info:
					</Typography>
					<Box direction="column">
						<Chip
							label={childData.medical.additionalInfo}
							sx={{ ml: '5px', backgroundColor: '#5ccbb6' }}
						/>
					</Box>{' '}
				</>
			)}
		</Stack>
	);
};
