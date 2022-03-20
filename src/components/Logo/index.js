import Box from '@mui/material/Box';
import logo from '../../assets/img/logo.png';
import { brand } from '../../styles';

export const Logo = ({}) => {
	return (
		<Box sx={brand.container}>
			<img sx={brand.logo} src={logo} className='logo' alt='logo' />
		</Box>
	);
};
