import GroupsIcon from "@mui/icons-material/Groups";
import GridViewIcon from "@mui/icons-material/GridView";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventIcon from "@mui/icons-material/Event";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MedicationIcon from "@mui/icons-material/Medication";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import FamilyRestroomSharpIcon from "@mui/icons-material/FamilyRestroomSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import InfoIcon from "@mui/icons-material/Info";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import QuizIcon from "@mui/icons-material/Quiz";

const publicNavArray = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    name: "Login",
    icon: <VpnKeyIcon />,
    link: "/login",
  },
  {
    name: "Parent Signup",
    icon: <FamilyRestroomSharpIcon />,
    link: "/sign-up/parent",
  },
  {
    name: "Teacher Signup",
    icon: <SchoolSharpIcon />,
    link: "/sign-up/teacher",
  },
  {
    name: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    name: "Quiz",
    icon: <QuizIcon />,
    link: "/quiz",
  },
];

const parentNavArray = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    name: "Dashboard",
    icon: <GridViewIcon />,
    link: "/dashboard",
  },
  {
    name: "Add Child",
    icon: <PersonAddIcon />,
    link: "/children/new",
  },
  {
    name: "Add Medical",
    icon: <MedicationIcon />,
    link: "/medical/new",
  },
  {
    name: "Add Absence Request",
    icon: <EventAvailableIcon />,
    link: "/absenceRequest/new",
  },
  {
    name: "View Absences",
    icon: <EventIcon />,
    link: "/absenceRequest/view",
  },
  {
    name: "View incident Reports",
    icon: <NotificationsIcon />,
    link: "/incident-report/view/parent",
  },
  {
    name: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    name: "Logout",
    icon: <LogoutIcon />,
    link: "",
  },
];

const teacherNavArray = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    name: "Dashboard",
    icon: <GridViewIcon />,
    link: "/dashboard",
  },
  {
    name: "View Absence Requests",
    icon: <EventIcon />,
    link: "/absence-requests",
  },
  {
    name: "Create Incident report",
    icon: <AddAlertIcon />,
    link: "/incident-report/new",
  },
  {
    name: "View incident Reports",
    icon: <NotificationsIcon />,
    link: "/incident-report/view/teacher",
  },
  {
    name: "Create Certificate",
    icon: <CardGiftcardIcon />,
    link: "/certificate/new",
  },
  {
    name: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    name: "Logout",
    icon: <LogoutIcon />,
  },
];

export const getNavItems = (user) => {
  if (user?.role) {
    const userType = user?.role;

    if (userType === "teacher") {
      return teacherNavArray;
    }

    if (userType === "parent") {
      return parentNavArray;
    }
  }

  return publicNavArray;
};
