import { useState } from 'react';
import parseISO from 'date-fns/parseISO';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TEACHER_STUDENTS_ABSENCE_REQUESTS } from '../../graphql/query';
import { AbsenceRequestCard } from '../AbsenceRequestCard/TeacherAbsenceRequestCard';
import { TEACHER_ABSENCE_REQUEST_RESPONSE } from '../../graphql/mutations';
import { MOBILE, DESKTOP } from '../../media';
import { useMediaQuery } from 'react-responsive';
import { PageTitle } from '../PageTitle';

import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { forms } from '../../styles';

const stylingRowColor = (status) => {
	if (status === 'PENDING') return '#ead885';
	if (status === 'APPROVED') return '#79d8a5';
	if (status === 'REJECTED') return '#ef8080';
};

export const TeachersAbsenceRequestsTable = () => {
	const isMobile = useMediaQuery(MOBILE);
	const isDesktop = useMediaQuery(DESKTOP);
	const yearGroupId = JSON.parse(localStorage.getItem('user')).yearGroup.id;

	const [search, setSearch] = useState('');

	const { data, loading, error, refetch } = useQuery(
		GET_TEACHER_STUDENTS_ABSENCE_REQUESTS,
		{
			variables: {
				yearGroupId: yearGroupId,
			},
			pollInterval: 100,
		}
	);

	const [executeTeacherResponse, { error: mutationError }] = useMutation(
		TEACHER_ABSENCE_REQUEST_RESPONSE
	);

	const onAccept = async (absenceRequestId, studentId) => {
		if (window.confirm('Are You sure u want to Approve')) {
			await executeTeacherResponse({
				variables: {
					input: {
						teacherResponse: 'APPROVED',
						studentId: studentId,
						absenceRequestId: absenceRequestId,
					},
				},
			});

			refetch();
		}
	};

	const onReject = async (absenceRequestId, studentId) => {
		if (window.confirm('Are You sure u want to Reject')) {
			await executeTeacherResponse({
				variables: {
					input: {
						teacherResponse: 'REJECTED',
						studentId: studentId,
						absenceRequestId: absenceRequestId,
					},
				},
			});

			refetch();
		}
	};

	let absenceRequestData = [];

	data?.teacherStudents
		?.map((students) => {
			return students.absenceRequests.map((eachRequest) => {
				return {
					studentId: students.id,
					name: `${students.firstName} ${students.lastName}`,
					yearGroup: students.yearGroup.title,
					absenceRequestId: eachRequest.id,
					type: eachRequest.type,
					description: eachRequest.description,
					dateTime: `${
						parseISO(eachRequest.dateTime).toGMTString().split('GMT')[0]
					}  `,
					status: eachRequest.status,
				};
			});
		})
		.map((each) => {
			return absenceRequestData.push(...each);
		});

	const handleUserSearch = () => {
		return absenceRequestData.filter(
			(each) =>
				each.name.toLowerCase().includes(search.toLowerCase()) ||
				each.status.toLowerCase().includes(search.toLowerCase())
		);
	};

	if (loading) {
		return <LinearProgress style={{ backgroundColor: 'purple' }} />;
	}

	if (!loading && error) {
		return (
			<Alert severity='error'>
				Something went wrong, please tray again later.
			</Alert>
		);
	}

	return (
		<Stack spacing={2}>
			<PageTitle>Absence Requests Made</PageTitle>
			<TextField
				color='warning'
				label='Filter by child name'
				variant='outlined'
				style={{
					marginBottom: 20,
					maxWidth: '250px',
				}}
				onChange={(e) => setSearch(e.target.value)}
			/>

			{!!mutationError && (
				<Typography
					variant='subtitle2'
					gutterBottom
					component='div'
					sx={forms.errorContainer}>
					Failed to respond to absence request, please try again.
				</Typography>
			)}

			{absenceRequestData.length === 0 && (
				<Alert severity='info'>
					No absence requests have been made by any parents
				</Alert>
			)}

			{isDesktop && (
				<TableContainer component={Paper}>
					<Table>
						<TableHead style={{ backgroundColor: '#5BCCB6' }}>
							<TableRow>
								{[
									'Name',
									'Year Group',
									'Type',
									'Description',
									'Date & time',
									'Status',
									'Action',
								].map((head) => (
									<TableCell
										style={{
											color: 'black',
											fontWeight: '500',
											textAlign: 'center',
										}}
										align={head === 'Name' ? 'left' : 'right'}
										key={head}>
										{head}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{handleUserSearch()?.map((row, index) => {
								return (
									<TableRow
										key={index}
										sx={{ backgroundColor: stylingRowColor(row.status) }}>
										<TableCell align='center'>{row.name} </TableCell>
										<TableCell align='center'>{row.yearGroup}</TableCell>
										<TableCell align='center'>{row.type}</TableCell>
										<TableCell align='center'>{row.description}</TableCell>
										<TableCell align='center'>{row.dateTime}</TableCell>
										<TableCell align='center'>{row.status}</TableCell>
										<TableCell align='center'>
											<Button
												onClick={() => {
													onAccept(row.absenceRequestId, row.studentId);
												}}>
												<CheckIcon sx={{ color: '#06a206' }} />
											</Button>
											<Button
												onClick={() => {
													onReject(row.absenceRequestId, row.studentId);
												}}>
												<CloseIcon sx={{ color: '#c13030' }} />
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			)}
			{isMobile && (
				<Box>
					{handleUserSearch().map((each, index) => {
						return (
							<AbsenceRequestCard
								{...each}
								colorStyling={stylingRowColor(each.status)}
								onApproved={onAccept}
								onRejected={onReject}
								key={index}
							/>
						);
					})}
				</Box>
			)}
		</Stack>
	);
};
