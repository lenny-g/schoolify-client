import Container from '@mui/material/Container';
import { useMediaQuery } from 'react-responsive';

import { MOBILE } from '../media';
import { homeContainerStyles } from '../styles';
import { HomePageOne } from '../components/HomePageOne';
import { HomePageTwo } from '../components/HomePageTwo';
import { HomePageThree } from '../components/HomePageThree';

export const Home = ({ children }) => {
	const isMobile = useMediaQuery(MOBILE);

	return (
		<Container
			bgColor="white"
			maxWidth="md"
			sx={homeContainerStyles(isMobile)}
			disableGutters={isMobile}>
			<HomePageOne />
			<HomePageTwo />
			<HomePageThree />
		</Container>
	);
};
