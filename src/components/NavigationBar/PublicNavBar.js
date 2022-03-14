import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import Link from "@mui/material/Link";
import InfoIcon from "@mui/icons-material/Info";
import FamilyRestroomSharpIcon from "@mui/icons-material/FamilyRestroomSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Login } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const PublicNavBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "#212227",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {!open ? (
              <ChevronRightIcon sx={{ color: "#ffff" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "#ffff" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            margin: "2rem 0rem",
          }}
        >
          <ListItem button component={Link} href="/">
            <ListItemIcon
              sx={{
                color: "#ffff",
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#ffff",
                fontFamily: "Arial",
              }}
              primary="Home"
            />
          </ListItem>
          <Divider />
          <ListItem button component={Link} href="/login">
            <ListItemIcon
              sx={{
                color: "#ffff",
              }}
            >
              <LoginIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#ffff",
                fontFamily: "Arial",
              }}
              primary="Login"
            />
          </ListItem>
          <ListItem button component={Link} href="parent/sign-up">
            <ListItemIcon
              sx={{
                color: "#ffff",
              }}
            >
              <FamilyRestroomSharpIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#ffff",
                fontFamily: "Arial",
              }}
              primary="Parent Sign Up"
            />
          </ListItem>
          <ListItem button component={Link} href="teacher/sign-up">
            <ListItemIcon
              sx={{
                color: "#ffff",
              }}
            >
              <SchoolSharpIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#ffff",
                fontFamily: "Arial",
              }}
              primary="Teacher Sign Up"
            />
          </ListItem>
          <Divider />
          <ListItem button component={Link} href="/about">
            <ListItemIcon
              sx={{
                color: "#ffff",
              }}
            >
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#ffff",
                fontFamily: "Arial",
              }}
              primary="About us"
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
