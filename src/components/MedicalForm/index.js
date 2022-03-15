import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { item, forms, colors } from '../../styles';

const allergyOptions = [
	"cow's milk",
	'egg',
	'wheat',
	'peanuts',
	'gluten',
	'tree nuts',
	'soy',
	'fish',
	'corn',
	'sesame seeds',
	'mustard',
	'celery',
	'hayfever',
	'other',
];

const disabilityOptions = [
	'learning',
	'mobilities',
	'psychiatric',
	'hearing',
	'autism',
	'vision',
	'ptsd',
	'adhd',
];

const medicalOption = ['inhaler', 'antibiotics', 'epi pen', 'stimulants'];

export const MedicalForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async (formData) => {
		console.log(formData);
	};
	return (
		<Grid
			container
			component='form'
			sx={item.outerContainer}
			onSubmit={handleSubmit(onSubmit)}>
			<Grid item xs={12}>
				<Typography
					variant='h5'
					gutterBottom
					component='div'
					sx={{ textAlign: 'center' }}>
					Child . Medical . Form
				</Typography>
			</Grid>
			<Box sx={colors.yellow}>
				<Autocomplete
					{...register('allergies')}
					sx={{ mt: 2 }}
					fullWidth
					multiple
					id='tags-outlined'
					options={allergyOptions}
					getOptionLabel={(option) => option}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField
							{...params}
							color='warning'
							label='Allergies'
							placeholder='Select all allergies that apply'
						/>
					)}
				/>
				<Autocomplete
					sx={{ mt: 2 }}
					fullWidth
					multiple
					id='tags-outlined'
					options={disabilityOptions}
					getOptionLabel={(option) => option}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField
							{...params}
							color='warning'
							label='Disability'
							placeholder='Select all disabilities that apply'
						/>
					)}
				/>
				<Autocomplete
					sx={{ mt: 2 }}
					fullWidth
					multiple
					id='tags-outlined'
					options={medicalOption}
					getOptionLabel={(option) => option}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField
							{...params}
							color='warning'
							label='Medication'
							placeholder='Select all that apply'
						/>
					)}
				/>
				<TextField
					color='warning'
					margin='normal'
					id='additional-info'
					label='Additional Info'
					variant='outlined'
					name='additionalInfo'
					rows={4}
					multiline
					fullWidth
					// disabled={loading}
					{...register('additionalInfo', { required: true })}
					error={!!errors.additionalInfo}
				/>
				<LoadingButton
					// loading={loading}
					// disabled={loading}
					type='submit'
					variant='contained'
					sx={forms.loadingButton}>
					Submit
				</LoadingButton>
				{/* {!!error && ( */}
				<Typography
					variant='subtitle2'
					gutterBottom
					component='div'
					sx={forms.errorContainer}>
					Failed to add medical history.
				</Typography>
				{/* )} */}
			</Box>
		</Grid>
	);
};
