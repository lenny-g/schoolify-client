import { ParentNavBar } from "./ParentNavBar";
import { TeacherNavBar } from "./TeacherNavBar";
import { PublicNavBar } from "./PublicNavBar";

const userType = JSON.parse(localStorage.getItem("user"))?.role;

const UserNavBar = () => {
  console.log(userType);

  if (userType === "teacher") {
    return <TeacherNavBar />;
  }
  if (userType === "parent") {
    return <ParentNavBar />;
  } else {
    return <PublicNavBar />;
  }
};

export const AppNavigationBar = () => {
  return (
    <div>
      <UserNavBar />
    </div>
  );
};
