import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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
import LogoutIcon from "@mui/icons-material/Logout";

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome Mrs Smith!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <img
          src={
            "https://img.freepik.com/free-vector/profile-placeholder-female-avatar-blue-tones_116137-3342.jpg"
          }
        />

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
          {navigationOptions.map((navigationOption, key) => (
            <ListItem
              button
              key={navigationOption.id}
              component={Link}
              href={navigationOption.path}
            >
              <ListItemIcon
                sx={{
                  color: "#979DAC",
                }}
              >
                {navigationOption.icon}
              </ListItemIcon>
              <ListItemText
                disableTypography={true}
                sx={{
                  color: "#979DAC",
                  fontFamily: "Arial",
                }}
                primary={navigationOption.title}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
