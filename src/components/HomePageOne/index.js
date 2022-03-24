import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive';

import { MOBILE, DESKTOP } from '../../media';
import homeImg from '../../assets/img/homeImg.png';

export const HomePageOne = () => {
	const isMobile = useMediaQuery(MOBILE);
	const isDesktop = useMediaQuery(DESKTOP);
	return (
		<Box sx={{ textAlign: 'center' }}>
			<Box
				component="img"
				sx={{
					width: '70%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					margin: 'auto',
				}}
				alt="Home Image"
				src={homeImg}
			/>
			{isDesktop && (
				<>
					<Typography
						component="span"
						variant="h2"
						sx={{ fontWeight: 700, textTransform: 'uppercase', mr: 2 }}>
						Schoolify
					</Typography>
					<Typography component="span" variant="h2">
						the little app that does BIG things
					</Typography>
				</>
			)}
			{isMobile && (
				<>
					<Typography
						component="span"
						variant="h4"
						sx={{ fontWeight: 500, textTransform: 'uppercase', mr: 2 }}>
						Schoolify the little app that does BIG things
					</Typography>
				</>
			)}
			<Typography
				variant="h5"
				gutterBottom
				component="div"
				sx={{ textAlign: 'center', m: '20px' }}>
				Providing a platform that works for schools, teachers, and parents.
				Connecting all parties in a safe and easy way.
			</Typography>
		</Box>
	);
};
