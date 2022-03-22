import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ParentsAbsenceRequestTable } from '../components/ParentsAbsenceRequestTable';
import { PageContainer } from '../components/PageContainer';
import { item } from '../styles';

export const ViewParentsAbsenceRequests = () => {
	return (
		<PageContainer>
			<Stack spacing={2}>
				<ParentsAbsenceRequestTable />
				<Box>
					<Button variant='contained' sx={item.btn} color='warning'>
						Request Absence
					</Button>
				</Box>
			</Stack>
		</PageContainer>
	);
};
