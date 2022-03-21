import Typography from '@mui/material/Typography';

export const PageTitle = ({ children }) => {
	return (
		<Typography
			variant='h3'
			gutterBottom
			component='div'
			sx={{ textAlign: 'center' }}>
			{children}
		</Typography>
	);
};
