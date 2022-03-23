import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { TeamMemberCard } from '../components/TeamCard/TeamMemberCard';
import { teamMemberFromApi } from '../data/teamMemberFromApi';
import { PageContainer } from '../components/PageContainer';
import { PageTitle } from '../components/PageTitle';

export const About = () => {
	return (
		<PageContainer>
			<PageTitle>Team . behind . Schoolify</PageTitle>
			<Stack sx={{ textAlign: 'center' }}>
				<Typography variant="subtitle1" sx={{ m: '1rem' }}>
					Schoolify works towards cutting green emissions, by reducing paper
					communication, and streamlining conversations between teachers and
					parents, Schoolify also documents conversations and progress of
					children for future reference as a smart way of tracking progress.
				</Typography>

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}>
					{teamMemberFromApi.map((member, index) => {
						return <TeamMemberCard {...member} key={index} />;
					})}
				</Box>
			</Stack>
		</PageContainer>
	);
};
