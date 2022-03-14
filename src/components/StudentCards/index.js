import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_TEACHER_STUDENTS } from "../../graphql/query";
import { StudentCard } from "./StudentCard";
import Grid from "@mui/material/Grid";

export const StudentCards = () => {
  const yearGroupId = JSON.parse(localStorage.getItem("user")).yearGroup.id;

  const { loading, error, data } = useQuery(GET_TEACHER_STUDENTS, {
    variables: {
      yearGroupId: yearGroupId,
    },
  });

  const studentData = data?.teacherStudents;

  const navigate = useNavigate();

  const onclick = (e) => {
    navigate(`/children/view/${e.target.id}`, { replace: true });
  };

  return (
    <Grid container onClick={onclick}>
      {studentData?.map((student, index) => {
        return <StudentCard {...student} key={index} />;
      })}
    </Grid>
  );
};
