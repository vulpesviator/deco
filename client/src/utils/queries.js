import { gql } from '@apollo/client';


export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;

export const QUERY_QUESTIONS = gql`
  {
      questions {
        text
        image
        category
        answerId
      }
    
  }`