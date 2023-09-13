import { gql } from '@apollo/client';


export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      description
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
query Questions {
  questions {
    _id
    text
    image {
      _id
      src
    }
  }
}`

export const QUERY_IMAGES = gql `
query Images {
  images {
    src
    _id
    category {
      _id
    }
    
  }
}`