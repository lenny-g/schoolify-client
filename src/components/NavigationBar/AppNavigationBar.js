import { useState, useEffect } from "react";
import { ParentNavBar } from "./ParentNavBar";
import { TeacherNavBar } from "./TeacherNavBar";
import { PublicNavBar } from "./PublicNavBar";
import { MobileParentNavBar } from "./MobileParentNavBar";
import { MobilePublicNavBar } from "./MobilePublicNavBar";
import { MobileTeacherNavBar } from "./MobileTeacherNavBar";

const userType = JSON.parse(localStorage.getItem("user"))?.role;

const UserNavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  if (userType === "teacher") {
    return windowWidth > 800 ? <TeacherNavBar /> : <MobileTeacherNavBar />;
  }
  if (userType === "parent") {
    return windowWidth > 800 ? <ParentNavBar /> : <MobileParentNavBar />;
  } else {
    return windowWidth > 800 ? <PublicNavBar /> : <MobilePublicNavBar />;
  }
};

export const AppNavigationBar = () => {
  return (
    <div>
      <UserNavBar />
    </div>
  );
};
