import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { StudentCard } from "./StudentCard";
import Box from "@mui/material/Box";

export const GET_PARENTS_CHILDREN = gql`
  query YearGroups {
    parentsChildren {
      children {
        yearGroup {
          title
        }
        id
        firstName
        lastName
      }
    }
  }
`;

export const StudentCards = () => {
  const { loading, error, data } = useQuery(GET_PARENTS_CHILDREN);
  const studentData = data?.parentsChildren?.children;
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {studentData?.map((student, index) => {
        return <StudentCard {...student} key={index} />;
      })}
    </Box>
  );
};
