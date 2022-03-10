import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import DateTimePicker from '@mui/lab/DateTimePicker';

const appointmentOptions = ['Medical', 'Dental', 'Other'];

export const AppointmentForm = () => {
	const [absenceDate, setAbsenceDate] = useState();

	const {
		register,
		formState: { errors },
		setValue,
		getValues,
		handleSubmit,
	} = useForm();

	const value = getValues('enrollDate');

	useEffect(() => {
		register('dateOfAbsence');
	}, [register]);

	useEffect(() => {
		setAbsenceDate(value || null);
	}, [setAbsenceDate, value]);

	const onSubmit = async (data) => {
		console.log(data);
	};

	return (

		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Box component='form' onSubmit={handleSubmit(onSubmit)}>
				<Box
					sx={{
						margin: 2,
						padding: 2,
						alignItems: 'center',
						backgroundColor: 'pink',
					}}>
					<FormControl sx={{ width: 420 }}>
						<InputLabel id='appointmentType'>Absence type</InputLabel>
						<Select
							labelId='appointmentType'
							id='appointmentType'
							label='Appointment type'
							defaultValue='Medical'
							{...register('appointmentType')}
							error={!!errors.appointmentType}>
							{appointmentOptions.map((title, index) => {
								return (
									<MenuItem key={index} value={title}>
										{title}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Box>
				<Box
					sx={{
						margin: 2,
						padding: 2,
						alignItems: 'center',
						backgroundColor: 'pink',
					}}>
					<TextField
						id='description'
						label='Description'
						multiline
						fullWidth
						rows={4}
						{...register('description', { required: true })}
						error={!!errors.description}
					/>
				</Box>
				<DateTimePicker
					label='Please select date and time'
					inputFormat='MM/dd/yyyy hh:mm'
					value={absenceDate}
					onChange={(value) => {
						setAbsenceDate(value);
						setValue('dateOfAbsence', value, {
							shouldValidate: true,
							shouldDirty: true,
						});
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							{...register('dateOfAbsence', { required: true })}
							error={!!errors.dateOfAbsence}
							margin='normal'
							id='dateOfAbsence'
							variant='outlined'
							name='dateOfAbsence'
							fullWidth
							error={!!errors.dateOfAbsence}
						/>
					)}
				/>
				<Box
					sx={{
						margin: 2,
						padding: 2,
						alignItems: 'center',
						backgroundColor: 'red',
					}}>
					<Button variant='contained' type='submit'>
						Request
					</Button>
				</Box>
			</Box>
		</LocalizationProvider>
	);
};
