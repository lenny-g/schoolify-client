import { Navigate, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { useAuth } from '../context/AppProvider';
import { Login } from '../pages/Login';
import { ParentSignup } from '../pages/ParentSignup';
import { TeacherSignup } from '../pages/TeacherSignup';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Appointment } from '../pages/Appointment';
import { AddChild } from '../pages/AddChild';
import { ParentDashboard } from '../pages/ParentDashboard';
import { ViewAppointments } from '../pages/ViewAppointments';
import { AbsenceRequest } from '../pages/AbsenceRequest';
import { StudentInfo } from '../pages/StudentInfo';
import { Medical } from '../pages/Medical';
import { ViewParentsAbsenceRequests } from '../pages/ViewParentsAbsenceRequests';
import { ViewAbsenceRequestTeacher } from '../pages/ViewAbsenceRequestTeacher';
import { ViewStudents } from '../pages/ViewStudents';
import { TeacherDashboard } from '../pages/TeacherDashboard';
import { TopNavbar } from '../components/NavigationBar/TopNavbar';
import { SideNavbar } from '../components/NavigationBar/SideNavbar';
import { MOBILE } from '../media';
import { TeacherIncidentReport } from '../pages/TeacherIncidentReport';
import { ViewIncident } from '../pages/ViewIncident';

const theme = createTheme({
	palette: {
		warning: {
			light: '#ffc570',
			main: '#dd9148',
			dark: '#b28035',
		},
	},
	typography: {
		h3: {
			fontFamily: "'Outfit', sans-serif",
			fontSize: '2.5rem',
			fontWeight: 500,
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
				display: 'flex',
				flexDirection: isMobile ? 'column' : 'row',
				minHeight: '100vh',
			}}>
			{isMobile ? <TopNavbar /> : <SideNavbar />}
			<Box
				component='main'
				sx={{
					backgroundImage:
						'url("https://cdn.wallpapersafari.com/13/73/AQ4CSR.jpg")',
					display: 'flex',
					flexGrow: 1,
					p: 3,
					alignItems: isMobile ? 'flex-start' : 'center',
				}}>
				<ThemeProvider theme={theme}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/sign-up/parent' element={<ParentSignup />} />
						<Route path='/sign-up/teacher' element={<TeacherSignup />} />
						<Route path='/login' element={<Login />} />
						<Route path='/about' element={<About />} />
						<Route
							path='/incident-report/new'
							element={<TeacherIncidentReport />}
						/>
						<Route path='/incident-report/view' element={<ViewIncident />} />

						{isLoggedIn ? (
							<>
								<Route path='/medical/new' element={<Medical />} />
								<Route
									path='/dashboard'
									element={
										user.role === 'parent' ? (
											<ParentDashboard />
										) : (
											<TeacherDashboard />
										)
									}
								/>
								<Route path='/children/new' element={<AddChild />} />
								<Route
									path='/children/view/:studentId'
									element={<StudentInfo />}
								/>
								<Route path='/appointment/new' element={<Appointment />} />
								<Route
									path='/appointment/view'
									element={<ViewAppointments />}
								/>
								<Route
									path='/absenceRequest/new'
									element={<AbsenceRequest />}
								/>
								<Route
									path='/absenceRequest/view'
									element={<ViewParentsAbsenceRequests />}
								/>
								<Route
									path='/absence-requests'
									element={<ViewAbsenceRequestTeacher />}
								/>
								<Route path='/view/students' element={<ViewStudents />} />
							</>
						) : (
							<Route path='*' element={<Navigate to='/' />} />
						)}
					</Routes>
				</ThemeProvider>
			</Box>
		</Box>
	);
};
