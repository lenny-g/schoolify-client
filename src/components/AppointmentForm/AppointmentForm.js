import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarPicker from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";

const appointmentOptions = ['medical', 'dental', 'other'];

export const AppointmentForm = () => {
	const [date, setDate] = React.useState(new Date());
	const [value, setValue] = React.useState(null);

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Typography
				variant='subtitle2'
				gutterBottom
				component='div'
				sx={{ mt: 2, textAlign: 'center' }}>
				Please select appointment type:
			</Typography>

			<Box
				component='form'
				sx={{
					margin: 2,
					padding: 2,
					alignItems: 'center',
					backgroundColor: 'pink',
				}}>
				<FormControl sx={{ width: 420 }}>
					<InputLabel id='title'>Title</InputLabel>
					<Select labelId='title' id='title' label='Title' defaultValue='medical' >
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
				component='form'
				sx={{
					margin: 2,
					padding: 2,
					alignItems: 'center',
					backgroundColor: 'pink',
				}}>
				<TextField
					id='other'
					label='Other'
					multiline
					fullWidth
					rows={2}
					defaultValue='Default Value'
                    {...register("other", { required: true })}
        error={!!errors.password}
				/>
			</Box>
			<Typography
				variant='subtitle2'
				gutterBottom
				component='div'
				sx={{ mt: 2, textAlign: 'center' }}>
				Appointment History:
			</Typography>
			<Box
				component='form'
				sx={{
					margin: 2,
					padding: 2,
					alignItems: 'center',
					backgroundColor: 'lightBlue',
				}}>
				<Typography
					variant='subtitle2'
					gutterBottom
					component='div'
					sx={{ mt: 2 }}>
					Appointment Status:
				</Typography>
			</Box>
			<Box
				component='form'
				sx={{
					margin: 2,
					padding: 2,
					alignItems: 'center',
					backgroundColor: 'orange',
				}}>
				<Typography
					variant='subtitle2'
					gutterBottom
					component='div'
					sx={{ mt: 2 }}>
					Appointment history:
				</Typography>
			</Box>

			<CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />

			<Box
				component='form'
				sx={{
					margin: 2,
					padding: 2,
					alignItems: 'center',
					backgroundColor: 'yellow',
				}}>
				<TimePicker
					label='Appointment Time'
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</Box>
			<Box
				component='form'
				sx={{
					margin: 2,
					padding: 2,
					alignItems: 'center',
					backgroundColor: 'red',
				}}>
				<Button variant='contained' f>
					Request
				</Button>
			</Box>
		</LocalizationProvider>
	);
};
