import { ParentNavBar } from "./ParentNavBar";
import { TeacherNavBar } from "./TeacherNavBar";

const userType = JSON.parse(localStorage.getItem("user")).role;

const UserNavBar = () => {
  if (userType === "teacher") {
    return <TeacherNavBar />;
  }

  if (userType === "parent") {
    return <ParentNavBar />;
  }
};

export const AppNavigationBar = () => {
  return (
    <div>
      <UserNavBar />
    </div>
  );
};
