import * as React from 'react';
import { IconButton, MenuList, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import BookmarkRemoveSharpIcon from '@mui/icons-material/BookmarkRemoveSharp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

export const MobileTeacherNavBar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar style={{ backgroundColor: '#212227', mb: '2rem' }}>
			<Toolbar>
				<IconButton
					id='basic-button'
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}>
					<MenuIcon sx={{ color: '#979DAC' }} />
				</IconButton>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}>
					<MenuList sx={{ backgroundColor: '#212227' }}>
						<MenuItem
							component='button'
							onClick={handleClose}
							href='/dashboard/teacher'>
							<GridViewIcon sx={{ color: '#979DAC' }} />
							<Typography sx={{ color: '#979DAC', ml: '1rem' }}>
								Dashboard
							</Typography>
						</MenuItem>
						<MenuItem
							component='button'
							onClick={handleClose}
							href='/view/students'>
							<FaceSharpIcon sx={{ color: '#979DAC' }} />
							<Typography sx={{ color: '#979DAC', ml: '1rem' }}>
								View Student
							</Typography>
						</MenuItem>
						<MenuItem
							component='button'
							onClick={handleClose}
							href='/absence-requests'>
							<BookmarkRemoveSharpIcon sx={{ color: '#979DAC' }} />
							<Typography sx={{ color: '#979DAC', ml: '1rem' }}>
								View Absence Request
							</Typography>
						</MenuItem>

						<MenuItem component='button' onClick={handleClose} href='/logout'>
							<LogoutIcon sx={{ color: '#979DAC' }} />
							<Typography sx={{ color: '#979DAC', ml: '1rem' }}>
								Logout
							</Typography>
						</MenuItem>
					</MenuList>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};
