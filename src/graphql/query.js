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

export const GET_YEAR_GROUP_DATA = gql`
  query Query {
    yearGroups {
      id
      title
    }
  }
`;

export const GET_ALL_CHILDREN = gql`
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
