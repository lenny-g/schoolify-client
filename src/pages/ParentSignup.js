import { ParentSignupForm } from '../components/SignupForms/ParentSignupForm';
import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';

export const ParentSignup = () => {
	return (
		<Container>
			<PublicNavBar />
			<Container component='main' maxWidth='md'>
				<Paper>
					<div className='logoContainer'>
						<img src={logo} className='logo' />
					</div>
					<ParentSignupForm />
				</Paper>
			</Container>
		</Container>
	);
};
