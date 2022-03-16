import { ChildrenCards } from '../components/ChildrenCards';
import { ParentNavBar } from '../components/NavigationBar/ParentNavBar';
import Container from '@mui/material/Container';
import { Paper } from '@material-ui/core';
import logo from '../assets/img/logo.png';

import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { item, colors, headers, largeButtons } from '../styles';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		borderRadius: '25px',
	},
};

export const ViewChildren = () => {
	return (
		<Container>
			<ParentNavBar />
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
								Hello Parent Name
							</Typography>
						</Grid>
						<Box sx={item.outerContainer}>
							<Typography
								variant='subtitle1'
								gutterBottom
								sx={{ color: 'black', textAlign: 'center' }}>
								Please select your child's card to go to their dashboard.
							</Typography>
							<Typography
								variant='subtitle2'
								gutterBottom
								sx={{
									color: 'black',
									textAlign: 'center',
									fontStyle: 'italic',
								}}>
								Please note: if you have more then one child attending the
								school, you are able to add multiple children by clicking on the{' '}
								<PersonAddIcon fontSize='inherit' /> icon in your navbar.
							</Typography>
							<ChildrenCards />
						</Box>
					</Grid>
				</Paper>
			</Container>
		</Container>
	);
};
