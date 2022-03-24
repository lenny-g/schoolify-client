import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';

import { MOBILE } from '../media';
import { homeContainerStyles } from '../styles';
import { HomePageOne } from '../components/HomePageOne';
import { HomePageTwo } from '../components/HomePageTwo';
import { HomePageThree } from '../components/HomePageThree';

export const Home = ({ children }) => {
	const isMobile = useMediaQuery(MOBILE);

	return (
		<Container>
			<Stack spacing={8}>
				<HomePageOne />
				<HomePageTwo />
				<HomePageThree />
			</Stack>
		</Container>
	);
};
