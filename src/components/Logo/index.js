import Box from '@mui/material/Box';

import logo from '../../assets/img/logoPages.png';

export const Logo = ({}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}>
			<Box
				component='img'
				sx={{
					maxWidth: { xs: 200, md: 300 },
					display: 'flex',
					justifyContent: 'center',
					margin: '1rem 0 2rem 0',
				}}
				alt='logo'
				src={logo}
			/>
		</Box>
	);
};
