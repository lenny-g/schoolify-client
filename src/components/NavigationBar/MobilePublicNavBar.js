import * as React from "react";
import { IconButton, MenuList, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import FamilyRestroomSharpIcon from "@mui/icons-material/FamilyRestroomSharp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

export const MobilePublicNavBar = () => {
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
          <MenuList sx={{ backgroundColor: "#212227" }}>
            <MenuItem component="button" onClick={handleClose} href="./">
              <HomeIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Home
              </Typography>
            </MenuItem>
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/parent/sign-up"
            >
              <FamilyRestroomSharpIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Parent Sign Up
              </Typography>
            </MenuItem>
            <MenuItem
              component="button"
              onClick={handleClose}
              href="/teacher/sign-up"
            >
              <SchoolSharpIcon sx={{ color: "#979DAC" }} />{" "}
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Teacher Sign Up
              </Typography>
            </MenuItem>
            <MenuItem component="button" onClick={handleClose} href="/login">
              <LoginIcon sx={{ color: "#979DAC" }} />{" "}
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                Login
              </Typography>
            </MenuItem>
            <MenuItem component="button" onClick={handleClose} href="./about">
              <InfoIcon sx={{ color: "#979DAC" }} />
              <Typography sx={{ color: "#979DAC", ml: "1rem" }}>
                About
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
