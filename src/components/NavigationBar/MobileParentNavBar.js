import * as React from "react";
import { IconButton, MenuList, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FaceIcon from "@mui/icons-material/Face";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PreviewIcon from "@mui/icons-material/Preview";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

export const MobileParentNavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar style={{ backgroundColor: "#212227", mb: "2rem" }}>
      <Toolbar>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{ color: "#979DAC" }} />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuList
            sx={{
              backgroundColor: "#212227",
            }}
          >
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/dashboard"
            >
              <GridViewIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Dashboard
              </Typography>
            </MenuItem>
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/children/view"
            >
              <FaceIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                My Children
              </Typography>
            </MenuItem>
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/children/new"
            >
              <PersonAddIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Add Child
              </Typography>
            </MenuItem>
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/appointment/view"
            >
              <CalendarTodayIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                My Appointments
              </Typography>
            </MenuItem>
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/appointment/new"
            >
              <EventAvailableIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Add Appointments
              </Typography>
            </MenuItem>
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/absenceRequest/new"
            >
              <AddBoxIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Absence Request
              </Typography>
            </MenuItem>
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/absenceRequest/view"
            >
              <PreviewIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                View Absence Requests
              </Typography>
            </MenuItem>
            <MenuItem component="button" onClick={handleClose} href="/logout">
              <LogoutIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Logout
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
