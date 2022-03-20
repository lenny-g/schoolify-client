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
		borderRadius: '25px',
	},
};

export const About = () => {
	return (
		<Container component='main' maxWidth='lg'>
			<Container
				sx={{
					m: '5rem',
					textAlign: 'center',
				}}>
				<Logo />
				<Typography variant='h5'>Team behind Schoolify</Typography>
				<Typography variant='subtitle1'>
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
			</Container>
		</Container>
	);
};
