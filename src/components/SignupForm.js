import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';


export const SignupForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
  const onSubmit = data => console.log(data);

	return (
		<Box
			component='form'
      onSubmit={handleSubmit(onSubmit)}
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
			spacing={2}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<FormControl sx={{ width: 420 }}>
						<InputLabel id='title'>Title</InputLabel>
						<Select labelId='title' id='title' label='Title' {...register("title")}>
							<MenuItem value='mr'>Mr</MenuItem>
							<MenuItem value='mrs'>Mrs</MenuItem>
							<MenuItem value='miss'>Miss</MenuItem>
							<MenuItem value='ms'>Ms</MenuItem>
							<MenuItem value='dr'>Dr</MenuItem>
						</Select>
					</FormControl>
					<TextField
						margin='normal'
						id='firstName'
						label='First Name'
						variant='outlined'
						name='firstNAme'
						autoFocus
						fullWidth
            {...register("firstName", { required: true })}
					/>
					<TextField
						margin='normal'
						id='lastName'
						label='Last Name'
						variant='outlined'
						name='lastName'
						autoFocus
						fullWidth
            {...register("lastName", { required: true })}
					/>
					<TextField
						margin='normal'
						id='personalEmail'
						label='Personal Email'
						variant='outlined'
						name='personalEmail'
						autoFocus
						fullWidth
            {...register("personalEmail", { required: true })}
					/>
					<TextField
						margin='normal'
						id='password'
						label='Password'
						variant='outlined'
						name='password'
						type='password'
						autoFocus
						fullWidth
            {...register("password", { required: true })}
					/>
					<TextField
						margin='normal'
						id='confirmPassword'
						label='Confirm Password'
						variant='outlined'
						name='confirmPassword'
						type='confirmPassword'
						autoFocus
						fullWidth
            {...register("confirmPassword", { required: true })}
					/>
				</Grid>
        <Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Next</Button>

			</Grid>
		</Box>
	);
};
