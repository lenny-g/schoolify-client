import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import { useAuth } from '../../context/AppProvider';
import { getNavItems } from './getNavItems';

export const TopNavbar = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const { user, setUser, setIsLoggedIn } = useAuth();

	const handleOpenDrawer = () => {
		setOpen(true);
	};

	const handleCloseDrawer = () => {
		setOpen(false);
	};

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');

		setUser();
		setIsLoggedIn(false);

		navigate('/login', { replace: true });
	};

	const renderList = () => (
		<Box
			sx={{
				width: 'auto',
				display: 'flex',
				backgroundColor: '#212227',
			}}
			role='presentation'
			onClick={handleCloseDrawer}
			onKeyDown={handleCloseDrawer}>
			<List>
				{getNavItems(user).map((each, index) => (
					<ListItemButton
						onClick={() => {
							if (each.name === 'Logout') {
								handleLogout();
							} else {
								navigate(each.link, { replace: true });
							}
						}}
						key={each.name}
						sx={{
							color: 'white',
							minHeight: 48,
							justifyContent: open ? 'initial' : 'center',
							px: 2.5,
						}}>
						<ListItemIcon
							sx={{
								color: 'white',
								minWidth: 0,
								mr: open ? 3 : 'auto',
								justifyContent: 'center',
							}}>
							{each.icon}
						</ListItemIcon>
						<ListItemText
							primary={each.name}
							sx={{ color: 'white', opacity: open ? 1 : 0 }}
						/>
					</ListItemButton>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ position: 'absolute' }}>
			<IconButton
				onClick={handleOpenDrawer}
				sx={{ color: '#212227', m: '10px' }}>
				{!open ? <MenuIcon /> : <MenuIcon />}
			</IconButton>
			<Drawer anchor='top' open={open} onClose={handleCloseDrawer}>
				{renderList()}
			</Drawer>
		</Box>
	);
};
