import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_ALL_CHILDREN } from '../../graphql/query';
import { ChildCard } from './ChildCard';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';

export const ChildrenCards = ({ data }) => {
	const navigate = useNavigate();

	const onclick = (e) => {
		navigate(`/children/view/${e.target.id}`, { replace: true });
	};

	return (
		<Grid container onClick={onclick}>
			{data?.parentsChildren?.children.map((child, index) => {
				return <ChildCard {...child} key={index} />;
			})}
		</Grid>
	);
};
