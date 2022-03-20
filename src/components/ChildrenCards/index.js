import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ALL_CHILDREN } from "../../graphql/query";
import { ChildCard } from "./ChildCard";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

export const ChildrenCards = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHILDREN);

  const navigate = useNavigate();

  const onclick = (e) => {
    navigate(`/children/view/${e.target.id}`, { replace: true });
  };

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <LinearProgress style={{ backgroundColor: "purple" }} />;
  }

  return (
    <Grid container onClick={onclick}>
      {data?.parentsChildren?.children.map((child, index) => {
        return <ChildCard {...child} key={index} />;
      })}
    </Grid>
  );
};
