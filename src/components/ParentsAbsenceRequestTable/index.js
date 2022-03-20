import React, { useState, useEffect } from 'react';
import parseISO from 'date-fns/parseISO';
import { GET_ALL_PARENT_ABSENCE_REQUESTS } from '../../graphql/query';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_ABSENCE_REQUEST } from '../../graphql/mutations';
import { AbsenceRequestCard } from '../AbsenceRequestCard/parentAbsenceRequestCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const stylingRowColor = (status) => {
	if (status === 'PENDING') return '#b7cbf88a';
	if (status === 'APPROVED') return '#81c78469';
	if (status === 'REJECTED') return '#e9c6d66e';
};

export const ParentsAbsenceRequestTable = () => {
	const [search, setSearch] = useState('');
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const { data, loading, error, refetch } = useQuery(
		GET_ALL_PARENT_ABSENCE_REQUESTS,
		{
			pollInterval: 1000,
		}
	);

	const [
		executeDeleteAbsenceRequest,
		{ loading: mutationLoading, error: mutationError },
	] = useMutation(DELETE_ABSENCE_REQUEST);

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

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});

		return () => {
			window.removeEventListener('resize', () => {
				setWindowWidth(window.innerWidth);
			});
		};
	}, []);

	if (error) {
		return <div>ERROR</div>;
	}

	if (loading) {
		return <LinearProgress style={{ backgroundColor: 'purple' }} />;
	}

	return (
		<Container>
			<Typography
				variant='h3'
				gutterBottom
				component='div'
				sx={{ textAlign: 'center' }}>
				Absence Requests
			</Typography>

			<TextField
				color='secondary'
				label='Filter by child name'
				variant='outlined'
				style={{
					marginBottom: 20,
					maxWidth: '250px',
					border: '5px solid #b7cbf88a',
				}}
				onChange={(e) => setSearch(e.target.value)}
			/>

			{windowWidth > 700 ? (
				<TableContainer component={Paper}>
					<Table>
						<TableHead
							style={{
								backgroundColor: '#82caec82',
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
										<TableCell align='center'>{row.name} </TableCell>
										<TableCell align='center'>{row.yearGroup}</TableCell>
										<TableCell align='center'>{row.type}</TableCell>
										<TableCell align='center'>{row.description}</TableCell>
										<TableCell align='center'>{row.dateTime}</TableCell>
										<TableCell align='center'>{row.status}</TableCell>
										<TableCell align='center'>
											{' '}
											<Button
												onClick={() => {
													// onAccept(row.absenceRequestId, row.studentId);
												}}>
												<EditIcon sx={{ color: '#9575cd' }} />
											</Button>
											<Button
												onClick={() => {
													deleteAbsenceOnClick(row.id, row.absenceRequestId);
												}}>
												<DeleteIcon sx={{ color: '#9575cd' }} />
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<Grid container>
					{handleUserSearch().map((each, index) => {
						return (
							<AbsenceRequestCard
								{...each}
								colorStyling={stylingRowColor(each.status)}
								onDelete={deleteAbsenceOnClick}
								key={index}
							/>
						);
					})}
				</Grid>
			)}
		</Container>
	);
};
