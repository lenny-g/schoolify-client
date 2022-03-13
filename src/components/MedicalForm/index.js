import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';

import { forms } from '../../styles';

export const MedicalForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
	} = useForm();

	return (
		<Box component='form' sx={forms.inputBox}>
			<Typography
				variant='h3'
				gutterBottom
				component='div'
				sx={{ textAlign: 'center' }}>
				Medical Form
			</Typography>
			<TextField
				margin='normal'
				id='allergies'
				label='Allergies'
				variant='outlined'
				name='allergies'
				autoFocus
				fullWidth
				// disabled={loading}
				{...register('allergies', { required: true })}
				error={!!errors.allergies}
			/>

			<TextField
				margin='normal'
				id='disabilities'
				label='Disabilities'
				variant='outlined'
				name='disabilities'
				autoFocus
				fullWidth
				// disabled={loading}
				{...register('disabilities', { required: true })}
				error={!!errors.disabilities}
			/>

			<TextField
				margin='normal'
				id='medication'
				label='Medication'
				variant='outlined'
				name='medication'
				autoFocus
				fullWidth
				// disabled={loading}
				{...register('medication', { required: true })}
				error={!!errors.medication}
			/>
			<TextField
				margin='normal'
				id='additional-info'
				label='AdditionalInfo'
				variant='outlined'
				name='additionalInfo'
				autoFocus
				fullWidth
				// disabled={loading}
				{...register('additionalInfo', { required: true })}
				error={!!errors.additionalInfo}
			/>
			<FormGroup>
				<FormControlLabel
					control={<Checkbox />}
					label='Requires Special Educational Needs'
				/>
			</FormGroup>

			<LoadingButton
				// loading={loading}
				// disabled={loading}
				fullWidth
				type='submit'
				variant='contained'
				sx={forms.loadingButton}>
				Login
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
	);
};
