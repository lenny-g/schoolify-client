import { useState } from 'react';
import parseISO from 'date-fns/parseISO';
import { GET_ALL_PARENT_ABSENCE_REQUESTS } from '../../graphql/query';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_ABSENCE_REQUEST } from '../../graphql/mutations';
import { AbsenceRequestCard } from '../AbsenceRequestCard/ParentAbsenceRequestCard';
import { PageTitle } from '../PageTitle';
import { MOBILE, DESKTOP } from '../../media';
import { useMediaQuery } from 'react-responsive';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import DeleteIcon from '@mui/icons-material/Delete';

import { forms } from '../../styles';

const stylingRowColor = (status) => {
	if (status === 'PENDING') return '#ead885';
	if (status === 'APPROVED') return '#79d8a5';
	if (status === 'REJECTED') return '#ef8080';
};

const actionButtons = (status) => {
	if (status === 'PENDING') return true;
	if (status === 'APPROVED') return false;
	if (status === 'REJECTED') return false;
};

export const ParentsAbsenceRequestTable = () => {
	const isMobile = useMediaQuery(MOBILE);
	const isDesktop = useMediaQuery(DESKTOP);

	const [search, setSearch] = useState('');

	const { data, loading, error, refetch } = useQuery(
		GET_ALL_PARENT_ABSENCE_REQUESTS,
		{
			pollInterval: 1000,
		}
	);

	const [executeDeleteAbsenceRequest, { error: mutationError }] = useMutation(
		DELETE_ABSENCE_REQUEST
	);

	let absenceRequestData = [];

	data?.parentsChildren?.children
		?.map((child) => {
			return child.absenceRequests.map((eachRequest, index) => {
				return {
					id: child.id,
					name: `${child.firstName} ${child.lastName}`,
					yearGroup: child.yearGroup.title,
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
		return absenceRequestData.filter((each) =>
			each.name.toLowerCase().includes(search.toLowerCase())
		);
	};

	const deleteAbsenceOnClick = async (studentId, absenceRequestId) => {
		if (window.confirm('Are You sure u want to delete')) {
			await executeDeleteAbsenceRequest({
				variables: {
					input: {
						studentId: studentId,
						absenceRequestId: absenceRequestId,
					},
				},
			});

			refetch();
		}
	};

	if (loading) {
		return <LinearProgress style={{ backgroundColor: 'purple' }} />;
	}

	if (!loading && error) {
		return (
			<Alert severity="error">
				Something went wrong, please tray again later.
			</Alert>
		);
	}

	return (
		<Stack spacing={2} sx={{ alignItems: isMobile ? 'center' : 'normal' }}>
			<PageTitle>Absence Requests</PageTitle>

			<TextField
				color="warning"
				label="Filter by child name"
				variant="outlined"
				style={{
					marginBottom: 20,
					maxWidth: '250px',
				}}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{!!mutationError && (
				<Typography
					variant="subtitle2"
					gutterBottom
					component="div"
					sx={forms.errorContainer}>
					Failed to respond to absence request, please try again.
				</Typography>
			)}

			{absenceRequestData.length === 0 && (
				<Alert severity="info">
					You have made no absence requests yet, click on the 'request absence'
					button to submit one.
				</Alert>
			)}

			{isDesktop && (
				<TableContainer component={Paper}>
					<Table>
						<TableHead
							style={{
								backgroundColor: '#5BCCB6',
							}}>
							<TableRow>
								{[
									'Name',
									'Year Group',
									'Type',
									'Description',
									'Date & time',
									'Status',
									'Actions',
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
										<TableCell align="center">{row.name} </TableCell>
										<TableCell align="center">{row.yearGroup}</TableCell>
										<TableCell align="center">{row.type}</TableCell>
										<TableCell align="center">{row.description}</TableCell>
										<TableCell align="center">{row.dateTime}</TableCell>
										<TableCell align="center">{row.status}</TableCell>
										<TableCell align="center">
											{actionButtons(row.status) && (
												<Button
													onClick={() => {
														deleteAbsenceOnClick(row.id, row.absenceRequestId);
													}}>
													<DeleteIcon sx={{ color: '#c13030' }} />
												</Button>
											)}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			)}
			{isMobile && (
				<Grid>
					{handleUserSearch().map((each, index) => {
						return (
							<AbsenceRequestCard
								{...each}
								colorStyling={stylingRowColor(each.status)}
								cardButtons={actionButtons(each.status)}
								onDelete={deleteAbsenceOnClick}
								key={index}
							/>
						);
					})}
				</Grid>
			)}
		</Stack>
	);
};
