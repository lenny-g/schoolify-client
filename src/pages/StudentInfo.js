import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { item, colors, headers } from '../styles';
import { AbsenceRequestSummary } from '../components/ChildDashboard/AbsenceRequestSummary';
import { ChildProfileCard } from '../components/ChildDashboard/ChildProfileCard';

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
			<Container component='main'>
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
								Child name's Dashboard
							</Typography>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={4}>
								<Box sx={colors.purple}>
									<ChildProfileCard />
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box sx={colors.pink}>Box1</Box>
								<Box sx={colors.green}>box2</Box>
							</Grid>

							<Grid item xs={12} sm={4}>
								<Box sx={colors.yellow}>
									<AbsenceRequestSummary />
								</Box>

								<Box sx={item.inputBox}>box4</Box>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Container>
	);
};
