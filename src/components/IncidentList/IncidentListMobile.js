import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { item, colors } from '../../styles';
import Grid from '@mui/material/Grid';
import { useForm, Controller } from 'react-hook-form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const incidentOptions = [
	{ value: 'billysPEkit', title: 'Billys PE kit' },
	{ value: 'billyHadAFight', title: 'Billy had a fight' },
];

export const IncidentListMobile = () => {
	const {
		register,

		control,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<Box>
			<Grid
				item
				xs={12}
				sx={{
					padding: '10px',
					display: 'flex',
				}}>
				<FormControl sx={{ mt: 2 }} fullWidth>
					<InputLabel color='secondary' id='incident'>
						Incidents
					</InputLabel>
					<Select
						color='secondary'
						defaultValue={'parent'}
						labelId='incident'
						id='incident'
						label='incident'
						{...register('incident')}
						autoFocus>
						{incidentOptions.map((incident, index) => (
							<MenuItem key={index} value={incident.value}>
								{incident.title}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
		</Box>
	);
};
