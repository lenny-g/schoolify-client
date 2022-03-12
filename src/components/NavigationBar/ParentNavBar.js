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
import MailIcon from "@mui/icons-material/Mail";
import Link from "@mui/material/Link";
import GridViewIcon from "@mui/icons-material/GridView";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FaceIcon from "@mui/icons-material/Face";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AddBoxIcon from "@mui/icons-material/AddBox";

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

const navigationOptions = [
  {
    id: 1,
    icon: <GridViewIcon />,
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: <AccessTimeIcon />,
    path: "/appointments",
    title: "Appointments",
  },
  {
    id: 3,
    icon: <MailIcon />,
    path: "/messages",
    title: "Messages",
  },
  {
    id: 4,
    icon: <HealthAndSafetyIcon />,
    path: "/safe-guarding",
    title: "Safe Guarding",
  },
  {
    id: 5,
    icon: <CurrencyPoundIcon />,
    path: "/parent-pay",
    title: "ParentPay",
  },
  {
    id: 6,
    icon: <ConnectWithoutContactIcon />,
    path: "/contact",
    title: "Contact",
  },
  {
    id: 7,
    icon: <LogoutIcon />,
    path: "/logout",
    title: "Logout",
  },
];

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

export const ParentNavBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
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
          <ListItem button component={Link} href="/dashboard">
            <ListItemIcon
              sx={{
                color: "#979DAC",
              }}
            >
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#979DAC",
                fontFamily: "Arial",
              }}
              primary="Dashboard"
            />
          </ListItem>
          <Divider />
          <ListItem button component={Link} href="/children/view">
            <ListItemIcon
              sx={{
                color: "#979DAC",
              }}
            >
              <FaceIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#979DAC",
                fontFamily: "Arial",
              }}
              primary="My Children"
            />
          </ListItem>
          <ListItem button component={Link} href="/children/new">
            <ListItemIcon
              sx={{
                color: "#979DAC",
              }}
            >
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#979DAC",
                fontFamily: "Arial",
              }}
              primary="Add Child"
            />
          </ListItem>
          <Divider />
          <ListItem button component={Link} href="/appointment/view">
            <ListItemIcon
              sx={{
                color: "#979DAC",
              }}
            >
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#979DAC",
                fontFamily: "Arial",
              }}
              primary="My Appointments"
            />
          </ListItem>
          <ListItem button component={Link} href="/appointment/new">
            <ListItemIcon
              sx={{
                color: "#979DAC",
              }}
            >
              <EventAvailableIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#979DAC",
                fontFamily: "Arial",
              }}
              primary="Add Appointment"
            />
          </ListItem>
          <ListItem button component={Link} href="/absenceRequest/new">
            <ListItemIcon
              sx={{
                color: "#979DAC",
              }}
            >
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#979DAC",
                fontFamily: "Arial",
              }}
              primary="Absence Request"
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
