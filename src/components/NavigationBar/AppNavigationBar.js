import { useState, useEffect } from 'react';
import { ParentNavBar } from './ParentNavBar';
import { TeacherNavBar } from './TeacherNavBar';
import { PublicNavBar } from './PublicNavBar';
import { MobileParentNavBar } from './MobileParentNavBar';
import { MobilePublicNavBar } from './MobilePublicNavBar';
import { MobileTeacherNavBar } from './MobileTeacherNavBar';
import { SideNavbar } from './SideNavbar';

const userType = JSON.parse(localStorage.getItem('user'))?.role;

const UserNavBar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// useEffect(() => {
	//   window.addEventListener("resize", () => {
	//     setWindowWidth(window.innerWidth);
	//   });

	//   return () => {
	//     window.removeEventListener("resize", () => {
	//       setWindowWidth(window.innerWidth);
	//     });
	//   };
	// }, []);
};

export const AppNavigationBar = () => {
	return (
		<>
			<SideNavbar />
		</>
	);
};
