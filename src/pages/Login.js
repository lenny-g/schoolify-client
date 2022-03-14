import { LoginForm } from '../components/LoginForm/LoginForm';
import Container from '@mui/material/Container';
import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';

export const Login = () => {
	return (
		<Container>
			<PublicNavBar />
			<Paper>
				<div className='logoContainer'>
					<img src={logo} className='logo' />
				</div>
				<Container xs={12}>
					<LoginForm />
				</Container>
			</Paper>
		</Container>
	);
};
