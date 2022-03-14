import { TeacherSignupForm } from '../components/SignupForms/TeacherSignupForm';
import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';

export const TeacherSignup = () => {
	return (
		<Container>
			<PublicNavBar />
			<Paper>
				<div className='logoContainer'>
					<img src={logo} className='logo' />
				</div>
				<Container component='main' maxWidth='md'>
					<TeacherSignupForm />
				</Container>
			</Paper>
		</Container>
	);
};
