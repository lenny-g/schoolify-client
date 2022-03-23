import Box from "@mui/material/Box";

import { Navigate, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GiveCertificate } from "../pages/GiveCertificate";
import { useAuth } from "../context/AppProvider";
import { Login } from "../pages/Login";
import { ParentSignup } from "../pages/ParentSignup";
import { TeacherSignup } from "../pages/TeacherSignup";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Appointment } from "../pages/Appointment";
import { AddChild } from "../pages/AddChild";
import { ParentDashboard } from "../pages/ParentDashboard";
import { ViewAppointments } from "../pages/ViewAppointments";
import { AbsenceRequest } from "../pages/AbsenceRequest";
import { StudentInfo } from "../pages/StudentInfo";
import { Medical } from "../pages/Medical";
import { ViewParentsAbsenceRequests } from "../pages/ViewParentsAbsenceRequests";
import { ViewAbsenceRequestTeacher } from "../pages/ViewAbsenceRequestTeacher";
import { ViewStudents } from "../pages/ViewStudents";

import { TopNavbar } from "../components/NavigationBar/TopNavbar";
import { SideNavbar } from "../components/NavigationBar/SideNavbar";
import { MOBILE } from "../media";
import { TeacherIncidentReport } from "../pages/TeacherIncidentReport";
import { ViewIncidentTeacher } from "../pages/ViewIncidentTeacher";
import { ViewIncidentParent } from "../pages/ViewIncidentParent";

const theme = createTheme({
  palette: {
    warning: {
      light: "#ffc570",
      main: "#ffa500",
      dark: "#b28035",
    },
  },
  typography: {
    h3: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: "2rem",
      textTransform: "uppercase",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Outfit', sans-serif",
    },
  },
});

export const AppRouter = () => {
  const isMobile = useMediaQuery(MOBILE);
  const { user, isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
      }}
    >
      {isMobile ? <TopNavbar /> : <SideNavbar />}
      <Box
        component="main"
        sx={{
          backgroundImage:
            user?.role === "teacher"
              ? 'url("https://i.pinimg.com/736x/2a/1a/91/2a1a91d417c99110d88a9da04c8e11b0.jpg")'
              : 'url("https://cdn.wallpapersafari.com/13/73/AQ4CSR.jpg")',

          webkitBackgroundSize: "cover",
          mozBackgroundSize: "cover",
          oBackgroundSize: "cover",
          backgroundSize: "cover",
          display: "flex",
          flexGrow: 1,
          p: 3,
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {!isLoggedIn ? (
              <>
                <Route path="/sign-up/parent" element={<ParentSignup />} />
                <Route path="/sign-up/teacher" element={<TeacherSignup />} />
                <Route path="/login" element={<Login />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/dashboard" />} />
            )}

            {isLoggedIn ? (
              <>
                <Route path="/certificate/new" element={<GiveCertificate />} />
                <Route
                  path="/incident-report/new"
                  element={<TeacherIncidentReport />}
                />
                <Route
                  path="/incident-report/view/teacher"
                  element={<ViewIncidentTeacher />}
                />
                <Route
                  path="/incident-report/view/parent"
                  element={<ViewIncidentParent />}
                />
                <Route path="/medical/new" element={<Medical />} />
                <Route
                  path="/dashboard"
                  element={
                    user.role === "parent" ? (
                      <ParentDashboard />
                    ) : (
                      <ViewStudents />
                    )
                  }
                />
                <Route path="/children/new" element={<AddChild />} />
                <Route
                  path="/children/view/:studentId"
                  element={<StudentInfo />}
                />
                <Route path="/appointment/new" element={<Appointment />} />
                <Route
                  path="/appointment/view"
                  element={<ViewAppointments />}
                />
                <Route
                  path="/absenceRequest/new"
                  element={<AbsenceRequest />}
                />
                <Route
                  path="/absenceRequest/view"
                  element={<ViewParentsAbsenceRequests />}
                />
                <Route
                  path="/absence-requests"
                  element={<ViewAbsenceRequestTeacher />}
                />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </ThemeProvider>
      </Box>
    </Box>
  );
};
