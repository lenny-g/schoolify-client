import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import BookmarkRemoveSharpIcon from '@mui/icons-material/BookmarkRemoveSharp';

import NumbersIcon from '@mui/icons-material/Numbers';

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

export const TeacherNavBar = () => {
	const [open, setOpen] = useState(false);

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Drawer
				variant='permanent'
				open={open}
				sx={{
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						backgroundColor: '#212227',
					},
				}}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerToggle}>
						{!open ? (
							<ChevronRightIcon sx={{ color: '#ffff' }} />
						) : (
							<ChevronLeftIcon sx={{ color: '#ffff' }} />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						height: '100%',
						margin: '2rem 0rem',
					}}>
					<ListItem button component={Link} href='/dashboard'>
						<ListItemIcon
							sx={{
								color: '#ffff',
							}}>
							<GridViewIcon />
						</ListItemIcon>
						<ListItemText
							disableTypography={true}
							sx={{
								color: '#ffff',
								fontFamily: 'Arial',
							}}
							primary='Dashboard'
						/>
					</ListItem>
					<Divider />
					<ListItem button component={Link} href='/view/students'>
						<ListItemIcon
							sx={{
								color: '#ffff',
							}}>
							<FaceSharpIcon />
						</ListItemIcon>
						<ListItemText
							disableTypography={true}
							sx={{
								color: '#ffff',
								fontFamily: 'Arial',
							}}
							primary='View Students'
						/>
					</ListItem>
					<ListItem button component={Link} href='/absence-requests'>
						<ListItemIcon
							sx={{
								color: '#ffff',
							}}>
							<BookmarkRemoveSharpIcon />
						</ListItemIcon>
						<ListItemText
							disableTypography={true}
							sx={{
								color: '#ffff',
								fontFamily: 'Arial',
							}}
							primary='View Absence Requests'
						/>
					</ListItem>
					<Divider />

					<ListItem button component={Link} href='/logout'>
						<ListItemIcon
							sx={{
								color: '#ffff',
							}}>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText
							disableTypography={true}
							sx={{
								color: '#ffff',
								fontFamily: 'Arial',
							}}
							primary='Logout'
						/>
					</ListItem>
				</List>
			</Drawer>
		</Box>
	);
};
