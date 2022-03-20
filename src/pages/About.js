import Container from '@mui/material/Container';
import { TeamMemberCard } from '../components/TeamCard/TeamMemberCard';
import { teamMemberFromApi } from '../data/teamMemberFromApi';
import { item, colors, headers } from '../styles';
import Paper from '@mui/material/Paper';
import logo from '../assets/img/logo.png';
import Typography from '@mui/material/Typography';
import { Logo } from '../components/Logo';

const styles = {
	paperContainer: {
		margin: '2rem 0',
		padding: '1rem 0',
		borderRadius: '10px',
	},
};

export const About = () => {
	return (
		<Container component='main' sx={{ textAlign: 'center' }}>
			<Paper velevation={6} sx={styles.paperContainer}>
				<Logo />
				<Typography variant='h5' sx={{ m: '1rem', fontSize: '2.5rem' }}>
					Team behind Schoolify
				</Typography>
				<Typography variant='subtitle1' sx={{ m: '1rem' }}>
					Schoolify works towards cutting green emissions, by reducing paper
					communication, and streamlining conversations between teachers and
					parents, Schoolify also documents conversations and progress of
					children for future reference as a smart way of tracking progress.
				</Typography>

				<Container
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}>
					{teamMemberFromApi.map((member) => {
						return <TeamMemberCard {...member} />;
					})}
				</Container>
			</Paper>
		</Container>
	);
};
