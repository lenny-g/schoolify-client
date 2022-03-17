import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import FamilyRestroomSharpIcon from '@mui/icons-material/FamilyRestroomSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import InfoIcon from '@mui/icons-material/Info';
import Link from '@mui/material/Link';
import FaceIcon from '@mui/icons-material/Face';
import GridViewIcon from '@mui/icons-material/GridView';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const publicNavArray = [
	{
		name: 'Home',
		icon: <HomeIcon />,
		link: '/',
	},
	{
		name: 'Login',
		icon: <LoginIcon />,
		link: '/login',
	},
	{
		name: 'Parent Signup',
		icon: <FamilyRestroomSharpIcon />,
		link: '/parent/sign-up',
	},
	{
		name: 'Teacher Signup',
		icon: <SchoolSharpIcon />,
		link: '/teacher/sign-up',
	},
	{
		name: 'About',
		icon: <InfoIcon />,
		link: '/about',
	},
];

const parentNavArray = [
	{
		name: 'Dashboard',
		icon: <GridViewIcon />,
		link: '/dashboard/parent',
	},
	{
		name: 'My Children',
		icon: <FaceIcon />,
		link: '/children/view',
	},
	{
		name: 'Add Child',
		icon: <PersonAddIcon />,
		link: '/children/new',
	},
	{
		name: 'Add Medical',
		icon: <MedicalServicesIcon />,
		link: '/medical/new',
	},
	{
		name: 'Add Absence Request',
		icon: <AddBoxIcon />,
		link: '/absenceRequest/new',
	},
	{
		name: 'View Absences',
		icon: <EventAvailableIcon />,
		link: '/absenceRequest/view',
	},
	{
		name: 'About',
		icon: <InfoIcon />,
		link: '/about',
	},
	{
		name: 'Logout',
		icon: <LogoutIcon />,
		link: '',
	},
];

const teacherNavArray = [
	{
		name: 'Dashboard',
		icon: <GridViewIcon />,
		link: '/dashboard/teacher',
	},
	{
		name: 'My Children',
		icon: <FaceIcon />,
		link: '/view/students',
	},
	{
		name: 'View Absence Requests',
		icon: <EventAvailableIcon />,
		link: '/absence-requests',
	},
	{
		name: 'About',
		icon: <InfoIcon />,
		link: '/about',
	},
	{
		name: 'Logout',
		icon: <LogoutIcon />,
		link: '',
	},
];

const navbarArray = () => {
	const userType = JSON.parse(localStorage.getItem('user'))?.role;
	if (userType === 'teacher') {
		return teacherNavArray;
	} else if (userType === 'parent') {
		return parentNavArray;
	} else {
		return publicNavArray;
	}
};

export const TopNavbar = () => {
	const [open, setOpen] = useState(false);
	const [openTop, setOpenTop] = React.useState(false);

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setOpenTop({ ...openTop, top: open });
	};

	const list = () => (
		<Box
			sx={{ width: 'auto', display: 'flex' }}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}>
			<List>
				{navbarArray().map((each, index) => (
					<ListItemButton
						component={Link}
						href={each.link}
						key={each.name}
						sx={{
							minHeight: 48,
							justifyContent: open ? 'initial' : 'center',
							px: 2.5,
						}}>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : 'auto',
								justifyContent: 'center',
							}}>
							{each.icon}
						</ListItemIcon>
						<ListItemText primary={each.name} sx={{ opacity: open ? 1 : 0 }} />
					</ListItemButton>
				))}
			</List>
		</Box>
	);
	return (
		<Box>
			<Button onClick={toggleDrawer(true)}>
				<IconButton onClick={handleDrawerToggle}>
					{!open ? <MenuIcon /> : <MenuIcon />}
				</IconButton>
			</Button>
			<Drawer anchor='top' open={openTop} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
		</Box>
	);
};
