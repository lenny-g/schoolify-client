import { useNavigate } from "react-router-dom";

import { StudentCard } from "./StudentCard";
import Grid from "@mui/material/Grid";

export const StudentCards = ({ studentData }) => {
  const navigate = useNavigate();

  const onclick = (e) => {
    if (e.target.id) {
      navigate(`/children/view/${e.target.id}`, { replace: true });
    }
  };

  return (
    <Grid container onClick={onclick}>
      {studentData?.map((student, index) => {
        return <StudentCard {...student} key={index} />;
      })}
    </Grid>
  );
};
