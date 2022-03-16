import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { item, colors, headers } from '../../../styles';

export const ChildCard = ({ firstName, lastName, yearGroup, id }) => {
	return (
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
			{/* <Card sx={{ margin: 2 }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image='https://previews.123rf.com/images/olegdudko/olegdudko1508/olegdudko150800275/43199653-cabrito-de-la-escuela-escuela-chico-.jpg'
						alt='green iguana'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{firstName} {lastName}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{yearGroup.title}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size='small' color='primary' id={id}>
						View
					</Button>
				</CardActions>
			</Card> */}
		</Grid>
	);
};
