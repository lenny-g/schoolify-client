import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AppProvider';
import { Login } from '../pages/Login';
import { ParentSignup } from '../pages/ParentSignup';
import { TeacherSignup } from '../pages/TeacherSignup';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Appointment } from '../pages/Appointment';
import { Dashboard } from '../pages/Dashboard';
import { AddChild } from '../pages/AddChild';
import { ViewChildren } from '../pages/ViewChildren';
import { ViewAppointments } from '../pages/ViewAppointments';
import { AbsenceRequest } from '../pages/AbsenceRequest';
import { StudentInfo } from '../pages/StudentInfo';
import { Medical } from '../pages/Medical';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		success: {
			light: '#9ad29c',
			main: '#81c784',
			dark: '#5a8b5c',
		},
		primary: {
			light: '#f6a5c0',
			main: '#f48fb1',
			dark: ' #aa647b',
		},
		// danger: {
		// 	light: '#f6a5c0',
		// 	main: '#f48fb1',
		// 	dark: '#aa647b',
		// },
		secondary: {
			light: '#aa90d7',
			main: '#9575cd',
			dark: '#68518f',
		},
		warning: {
			light: '#ffc570',
			main: '#ffb74d',
			dark: '#b28035',
		},
	},
});

export const AppRouter = () => {
	const { isLoggedIn } = useAuth();

	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/parent/sign-up' element={<ParentSignup />} />
				<Route path='/teacher/sign-up' element={<TeacherSignup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/about' element={<About />} />
				<Route path='/medical/new' element={<Medical />} />

				{isLoggedIn ? (
					<>
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/children/new' element={<AddChild />} />
						<Route path='/children/view' element={<ViewChildren />} />
						<Route path='/children/view/:studentId' element={<StudentInfo />} />
						<Route path='/appointment/new' element={<Appointment />} />
						<Route path='/appointment/view' element={<ViewAppointments />} />
						<Route path='/absenceRequest/new' element={<AbsenceRequest />} />
					</>
				) : (
					<Route path='*' element={<Navigate to='/' />} />
				)}
			</Routes>
		</ThemeProvider>
	);
};
