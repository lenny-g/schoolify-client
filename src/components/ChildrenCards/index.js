import { useNavigate } from "react-router-dom";
import { ChildCard } from "./ChildCard";
import Grid from "@mui/material/Grid";

export const ChildrenCards = ({ data }) => {
  const navigate = useNavigate();

  const onclick = (e) => {
    if (e.target.id) {
      navigate(`/children/view/${e.target.id}`, { replace: true });
    }
  };

  return (
    <Grid container onClick={onclick}>
      {data?.parentsChildren?.children.map((child, index) => {
        return <ChildCard {...child} key={index} />;
      })}
    </Grid>
  );
};
