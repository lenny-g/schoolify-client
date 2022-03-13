import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($input: LoginInput!) {
    login(input: $input) {
      token
      parent {
        title
        firstName
        lastName
        email
        role
      }
      teacher {
        title
        firstName
        lastName
        role
        email
      }
    }
  }
`;

export const PARENT_SIGN_UP = gql`
  mutation Mutation($input: ParentSignupInput) {
    parentSignUp(input: $input) {
      success
    }
  }
`;

export const TEACHER_SIGN_UP = gql`
  mutation Mutation($input: TeacherSignupInput) {
    teacherSignUp(input: $input) {
      success
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

export const ADD_STUDENT = gql`
  mutation Mutation($input: StudentInputDetails!) {
    addStudent(input: $input) {
      id
      firstName
      lastName
      dob
      yearGroup {
        id
        title
        subjects
      }
    }
  }
`;
