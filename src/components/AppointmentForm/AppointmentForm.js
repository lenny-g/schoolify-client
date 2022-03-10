import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CalendarPicker from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const AppointmentForm = () => {
	const [date, setDate] = React.useState(new Date());
	const [value, setValue] = React.useState(null);

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
							backgroundColor: 'green',
						}}>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox />}
								label='School appointment'
							/>
						</FormGroup>
					</Box>
					<Box
						component='form'
						sx={{
							margin: 2,
							padding: 2,
							alignItems: 'center',
							backgroundColor: 'pink',
						}}>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox />}
								label='Medical appointment'
							/>
						</FormGroup>
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
						<FormGroup>
							<FormControlLabel
								control={<Checkbox />}
								label='Appointment Status:'
							/>
						</FormGroup>
					</Box>
					<Box
						component='form'
						sx={{
							margin: 2,
							padding: 2,
							alignItems: 'center',
							backgroundColor: 'orange',
						}}>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox />}
								label='Appointment History:'
							/>
						</FormGroup>
					</Box>



					<CalendarPicker
						date={date}
						onChange={(newDate) => setDate(newDate)}
					/>

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
						      <Button variant="contained" f>Request</Button>

					</Box>

		</LocalizationProvider>
	);
};
