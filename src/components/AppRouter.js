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
import { AddChild } from "../pages/AddChild";
import { ParentDashboard } from "../pages/ParentDashboard";
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
import { QuizGame } from "../pages/QuizGame";

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
              ? 'url("https://schoolify-resources.s3.eu-west-2.amazonaws.com/teacherBackground.jpeg")'
              : 'url("https://schoolify-resources.s3.eu-west-2.amazonaws.com/backrgound-schoolify.png")',

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
            <>
              {!isLoggedIn && (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/sign-up/parent" element={<ParentSignup />} />
                  <Route path="/sign-up/teacher" element={<TeacherSignup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/quiz" element={<QuizGame />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}

              {user?.role === "parent" && isLoggedIn && (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route
                    path="/incident-report/view/parent"
                    element={<ViewIncidentParent />}
                  />
                  <Route path="/medical/new" element={<Medical />} />
                  <Route path="/children/new" element={<AddChild />} />
                  <Route
                    path="/children/view/:studentId"
                    element={<StudentInfo />}
                  />
                  <Route
                    path="/absenceRequest/new"
                    element={<AbsenceRequest />}
                  />
                  <Route
                    path="/absenceRequest/view"
                    element={<ViewParentsAbsenceRequests />}
                  />
                  <Route path="/dashboard" element={<ParentDashboard />} />

                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}

              {user?.role === "teacher" && isLoggedIn && (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route
                    path="/certificate/new"
                    element={<GiveCertificate />}
                  />
                  <Route
                    path="/incident-report/new"
                    element={<TeacherIncidentReport />}
                  />
                  <Route
                    path="/incident-report/view/teacher"
                    element={<ViewIncidentTeacher />}
                  />
                  <Route
                    path="/children/view/:studentId"
                    element={<StudentInfo />}
                  />
                  <Route
                    path="/absence-requests"
                    element={<ViewAbsenceRequestTeacher />}
                  />

                  <Route path="/dashboard" element={<ViewStudents />} />

                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              )}
            </>
          </Routes>
        </ThemeProvider>
      </Box>
    </Box>
  );
};
