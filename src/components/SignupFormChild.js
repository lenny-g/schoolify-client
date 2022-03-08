import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as React from 'react';
import { Grid } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const SignupFormChild = () => {
	const [yearGroup, setYearGroup] = React.useState('');
	const [relationship, setRelationship] = React.useState('');
	const [checked, setChecked] = React.useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = () => {
		console.log('form submitted');
	};

	const handleChange = (event) => {
		setYearGroup(event.target.value);
		setRelationship(event.target.value);
		setChecked(event.target.checked);
	};
    console.log(yearGroup)

	const ValidateForm = (formErrors) => {
		return (
			!!formErrors.dob ||
			!!formErrors.yearGroup ||
			!!formErrors.childFirstName ||
			!!formErrors.childLastName ||
			!!formErrors.houseNumber ||
			!!formErrors.Street ||
			!!formErrors.city ||
			!!formErrors.postCode ||
			!!formErrors.relationship
		);
	};

	return (
		<Box
			component='form'
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
			spacing={2}
			onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<TextField
						margin='normal'
						id='childFirstName'
						label="Child's First Name"
						variant='outlined'
						name='childFirstNAme'
						autoFocus
						fullWidth
						{...register('childFirstName', { required: true })}
						error={!!errors.childFirstName}
					/>
					<TextField
						margin='normal'
						id='childLastName'
						label="Child's Last Name"
						variant='outlined'
						name='childLastName'
						autoFocus
						fullWidth
						{...register('childLastName', { required: true })}
						error={!!errors.childLastName}
					/>
					<TextField
						margin='normal'
						id='dob'
						label='Date of Birth'
						variant='outlined'
						name='dob'
						type='dob'
						autoFocus
						fullWidth
						{...register('dob', { required: true })}
						error={!!errors.dob}
					/>
					<FormControl sx={{ width: 420, mt: 2 }} error={!!errors.yearGroup}>
						<InputLabel id='yearGroup'>Year Group</InputLabel>
						<Select
							labelId='yearGroup'
							id='yearGroup'
							value={yearGroup}
							onChange={handleChange}
							fullWidth
							label='Year Group'
							{...register('yearGroup')}>
							<MenuItem value='3'>3</MenuItem>
							<MenuItem value='4'>4</MenuItem>
							<MenuItem value='5'>5</MenuItem>
							<MenuItem value='5'>6</MenuItem>
						</Select>
					</FormControl>
					<FormControl sx={{ width: 420, mt: 2 }} error={!!errors.relationship}>
						<InputLabel id='relationship'>Relationship</InputLabel>
						<Select
							labelId='relationship'
							id='relationship'
							value={relationship}
							onChange={handleChange}
							fullWidth
							label='Relationship'
							{...register('relationship')}>
							<MenuItem value='mother'>Mother</MenuItem>
							<MenuItem value='father'>Father</MenuItem>
							<MenuItem value='guardian'>Guardian</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} md={6}>
					<TextField
						margin='normal'
						id='houseNumber'
						label='House Number'
						variant='outlined'
						name='houseNumber'
						autoFocus
						fullWidth
						{...register('houseNumber', { required: true })}
						error={!!errors.houseNumber}
					/>
					<TextField
						margin='normal'
						id='Street'
						label='Street Name'
						variant='outlined'
						name='Street'
						autoFocus
						fullWidth
						{...register('Street', { required: true })}
						error={!!errors.Street}
					/>
					<TextField
						margin='normal'
						id='city'
						label='City'
						variant='outlined'
						name='city'
						autoFocus
						fullWidth
						{...register('city', { required: true })}
						error={!!errors.city}
					/>
					<TextField
						margin='normal'
						id='postCode'
						label='Post Code'
						variant='outlined'
						name='postCode'
						autoFocus
						fullWidth
						{...register('postCode', { required: true })}
						error={!!errors.postCode}
					/>
					<FormGroup>
						<FormControlLabel
							sx={{ mt: 2 }}
							control={<Checkbox checked={checked} onChange={handleChange} />}
							label='Does the child have any medical conditions?'
						/>
					</FormGroup>
				</Grid>

				<Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
					<Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
						Complete
					</Button>
				</Grid>
				<Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
					{ValidateForm(errors) && (
						<Typography
							variant='subtitle2'
							gutterBottom
							component='div'
							sx={{ mt: 2, color: '#d32f2f' }}>
							Form incomplete. All fields are required*
						</Typography>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};
