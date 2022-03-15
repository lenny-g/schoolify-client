import React from 'react';
import { TeacherNavBar } from '../components/NavigationBar/TeacherNavBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TeachersAbsenceRequestsTable } from '../components/TeachersAbsenceRequestsTable';

export const ViewAbsenceRequestTeacher = () => {
	return (
		<Container component='main' maxWidth='md'>
			<TeacherNavBar />
			<Box>
				<TeachersAbsenceRequestsTable />
			</Box>
		</Container>
	);
};
