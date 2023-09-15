import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_SCORE = gql`
  mutation updateUserScore($rating: Int! $category: String!) {
    updateUserScore(rating: $rating category: $category) {
      _id
      userScore {
        _id
        abstract
        artDeco
        artNouveau
        conceptual
        constructivism
        expressionism
        gothic
        impressionism 
        midCentury
        minimalism
        modernism
        neoclassicism
        popArt
        postModern
        realism
        renaissance
        romanticism
        rustic
        streetSymbolism
        surrealism
      }
    }
  }
`;
