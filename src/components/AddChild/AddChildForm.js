import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { forms } from '../../styles';
import { ADD_STUDENT } from '../../graphql/mutations';
import { GET_YEAR_GROUP_DATA } from '../../graphql/query';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import ErrorIcon from '@mui/icons-material/Error';

import { item, colors, headers } from '../../styles';

export const AddChildForm = () => {
	const { loading, error, data } = useQuery(GET_YEAR_GROUP_DATA);

	const [
		executeAddStudent,
		{ loading: mutationLoading, error: mutationError },
	] = useMutation(ADD_STUDENT);

	const [dateOfBirth, setDateOfBirth] = useState(null);

	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		getValues,
		control,
	} = useForm();

	const value = getValues('enrollDate');

	useEffect(() => {
		register('dob');
	}, [register]);

	useEffect(() => {
		setDateOfBirth(value || null);
	}, [setDateOfBirth, value]);

	const onSubmit = async (studentData) => {
		const { data, error } = await executeAddStudent({
			variables: {
				input: {
					firstName: studentData.childFirstName,
					lastName: studentData.childLastName,
					dob: studentData.dob,
					yearGroup: studentData.yearGroup,
				},
			},
		});

		navigate('/children/view', { replace: true });
	};

	const styles = {
		loadingButton: { marginTop: 3, marginBottom: 2 },
		errorContainer: {
			marginTop: 2,
			color: '#d32f2f',
			textAlign: 'center',
		},
	};

	if (error) {
		return <div>ERROR</div>;
	}

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Box
				component='form'
				sx={colors.purple}
				spacing={2}
				onSubmit={handleSubmit(onSubmit)}>
				<Typography
					variant='h3'
					gutterBottom
					component='div'
					sx={{ textAlign: 'center' }}>
					Child . Registration . Form
				</Typography>
				<TextField
					color='secondary'
					autoFocus
					margin='normal'
					id='childFirstName'
					label='First Name'
					variant='outlined'
					name='childFirstName'
					fullWidth
					{...register('childFirstName', { required: true })}
					error={!!errors.childFirstName}
				/>
				<TextField
					color='secondary'
					margin='normal'
					id='childLastName'
					label='Last Name'
					variant='outlined'
					name='childLastName'
					fullWidth
					{...register('childLastName', { required: true })}
					error={!!errors.childLastName}
				/>

				<DesktopDatePicker
					label='Date of Birth'
					inputFormat='MM/dd/yyyy'
					value={dateOfBirth}
					onChange={(value) => {
						setDateOfBirth(value);
						setValue('dob', value, {
							shouldValidate: true,
							shouldDirty: true,
						});
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							{...register('dob', { required: true })}
							error={!!errors.dob}
							color='secondary'
							margin='normal'
							id='dob'
							variant='outlined'
							name='dob'
							fullWidth
						/>
					)}
				/>

				<FormControl sx={{ mt: 2 }} fullWidth>
					<InputLabel id='yearGroup' color='secondary'>
						Year Group
					</InputLabel>
					<Controller
						control={control}
						name='yearGroup'
						render={({ field: { onChange, value } }) => (
							<Select
								color='secondary'
								labelId='yearGroup'
								id='yearGroup'
								value={value || ''}
								onChange={onChange}
								label='Year Group'
								disabled={mutationLoading}
								error={!!errors.yearGroup}
								{...register('yearGroup', { required: true })}>
								{data?.yearGroups?.map((yearGroupObj, index) => {
									return (
										<MenuItem key={index} value={yearGroupObj.id}>
											{yearGroupObj.title}
										</MenuItem>
									);
								})}
							</Select>
						)}
					/>
				</FormControl>
				<LoadingButton
					loading={mutationLoading}
					loadingIndicator='Loading...'
					variant='contained'
					fullWidth
					type='submit'
					sx={styles.loadingButton}
					startIcon={mutationError && <ErrorIcon />}
					color={mutationError ? 'error' : 'secondary'}>
					Add Child
				</LoadingButton>

				{!!mutationError && (
					<Typography
						variant='subtitle2'
						gutterBottom
						component='div'
						sx={{ mt: 2, textAlign: 'center', color: '#d32f2f' }}>
						Failed to add child.
					</Typography>
				)}
			</Box>
		</LocalizationProvider>
	);
};
