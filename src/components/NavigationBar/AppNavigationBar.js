import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { SideNavbar } from './SideNavbar';
import { TopNavbar } from './TopNavbar';

const userType = JSON.parse(localStorage.getItem('user'))?.role;

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

export const AppNavigationBar = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});
	const isDesktop = useMediaQuery({ query: '(min-width: 551px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
	return <>{isDesktop ? <SideNavbar /> : <TopNavbar />}</>;
};
