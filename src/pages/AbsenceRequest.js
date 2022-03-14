import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';
import { AbsenceForm } from '../components/AbsenceForm';
import { ParentNavBar } from '../components/NavigationBar/ParentNavBar';

export const AbsenceRequest = () => {
	return (
		<Container component='main' maxWidth='md'>
			<ParentNavBar />
			<Paper>
				<div className='logoContainer'>
					<img src={logo} className='logo' />
				</div>
				<Container xs={12}>
					<AbsenceForm />
				</Container>
			</Paper>
		</Container>
	);
};
