import { gql } from "@apollo/client";

export const PARENT_LOGIN = gql`
  mutation Mutation($input: ParentLoginInput) {
    parentLogin(input: $input) {
      token
      parent {
        title
        firstName
        lastName
        email
      }
    }
  }
`;

export const PARENT_SIGN_UP = gql`
  mutation Mutation($input: SignupInput) {
    parentSignUp(input: $input) {
      id
      title
      firstName
      lastName
      email
    }
  }
`;

export const MAKE_AN_ABSENCE_REQUEST = gql`
  mutation Mutation($input: studentAbsenceInput!) {
    studentAbsenceRequest(input: $input) {
      id
      firstName
      lastName
      dob
    }
  }
`;
