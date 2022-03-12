import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ALL_CHILDREN } from "../../graphql/query";
import { StudentCard } from "./StudentCard";
import Grid from "@mui/material/Grid";

export const StudentCards = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHILDREN);
  const studentData = data?.parentsChildren?.children;

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
