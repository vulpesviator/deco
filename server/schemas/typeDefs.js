const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Artist {
    _id: ID
    name: String
    artworks: [Artwork]
    categories: [Category]
  }

  type Artwork {
    _id: ID
    image: String
    title: String
    artist: Artist
    category: Category
  }

  type Category {
    _id: ID
    name: String
  }

  type Question {
    _id: ID
    text: String
    answers: [Answer]
  }

  type Answer {
    _id: ID
    text: String
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    category(_id: ID, name: String): Category
    artworks(title: String, category: ID, artist: ID): [Artwork]
    artwork(_id: ID, title: String, category: ID, artist: ID): Artwork
    artists: [Artist]
    artist(_id: ID, name: String, artworks: [ID], categories [ID]): Artist
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
