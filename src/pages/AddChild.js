import Container from '@mui/material/Container';
import { AddChildForm } from '../components/AddChild/AddChildForm';
import { ParentNavBar } from '../components/NavigationBar/ParentNavBar';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';

export const AddChild = () => {
	return (
		<Container component='main' maxWidth='md'>
			<ParentNavBar />
			<Paper>
				<div className='logoContainer'>
					<img src={logo} className='logo' />
				</div>
				<AddChildForm />
			</Paper>
		</Container>
	);
};
