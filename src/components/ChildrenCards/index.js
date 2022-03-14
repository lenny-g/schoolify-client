import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ALL_CHILDREN } from "../../graphql/query";
import { ChildCard } from "./ChildCard";
import Grid from "@mui/material/Grid";

export const ChildrenCards = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHILDREN);
  const childrenData = data?.parentsChildren?.children;

  const navigate = useNavigate();

  const onclick = (e) => {
    navigate(`/children/view/${e.target.id}`, { replace: true });
  };

  return (
    <Grid container onClick={onclick}>
      {childrenData?.map((child, index) => {
        return <ChildCard {...child} key={index} />;
      })}
    </Grid>
  );
};
