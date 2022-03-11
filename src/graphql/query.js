import { gql } from "@apollo/client";

export const GET_PARENTS_CHILDREN = gql`
  query Query {
    parentsChildren {
      children {
        id
        firstName
        lastName
      }
    }
  }
`;
