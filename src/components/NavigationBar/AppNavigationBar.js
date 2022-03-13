const userType = JSON.parse(localStorage.getItem("user")).role;

const UserNavBar = () => {
  if (userType === "teacher") {
    return <TeacherNav />;
  }

  if (userType === "teacher") {
    return <ParentNav />;
  }
};

export const AppNavigationBar = () => {
  return (
    <div>
      <UserNavBar />
    </div>
  );
};
