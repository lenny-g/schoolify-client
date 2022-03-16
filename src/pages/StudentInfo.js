import { PublicNavBar } from '../components/NavigationBar/PublicNavBar';
import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';
import { useParams } from 'react-router-dom';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const StudentInfo = () => {
	const { studentId } = useParams();

	return (
		<Container>
			<PublicNavBar />
			<Container component='main' maxWidth='md'>
				<Paper elevation={6} style={styles.paperContainer}>
					<div className='logoContainer'>
						<img src={logo} className='logo' />
					</div>
					<Grid container sx={item.outerContainer}>
						<Grid item xs={12}>
							<Typography
								className='headingFont'
								variant='h5'
								gutterBottom
								component='div'
								sx={headers.font}>
								Parent . Signup . Page
							</Typography>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<Box sx={colors.pink}>Box1</Box>
								<Box sx={colors.green}>box2</Box>
							</Grid>

							<Grid item xs={12} sm={6}>
								<Box sx={colors.yellow}>box3</Box>
								<Box sx={item.inputBox}>box4</Box>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Container>
	);
};
