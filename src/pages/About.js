import Container from '@mui/material/Container';
import { TeamMemberCard } from '../components/TeamCard/TeamMemberCard';
import { teamMemberFromApi } from '../data/teamMemberFromApi';

export const About = () => {
	return (
		<Container component='main' maxWidth='md'>
			<Container
				sx={{
					m: '5rem',
					textAlign: 'center',
				}}>
				<h1>About</h1>
				<p>
					Schoolify works towards cutting green emissions, by reducing paper
					communication, and streamlining conversations between teachers and
					parents, Schoolify also documents conversations and progress of
					children for future reference as a smart way of tracking progress.
				</p>
				<h2>Team behind Schoolify</h2>
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
