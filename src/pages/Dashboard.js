export const Dashboard = () => {
  console.log("user", JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};
