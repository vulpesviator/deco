const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Artwork {
    _id: ID
    image: Image
    artist: String
    category: Category
  }

  type Category {
    _id: ID
    name: String
  }

  type: Image {
    _id: ID
    src: String
    category: Category
  }

  type Question {
    _id: ID
    text: String
    answers: [Answer]
<<<<<<< HEAD
    images: [Image]
=======
    image: [String]
>>>>>>> b62ed785021ada641178303d37723b9a76843d57
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
    artworks: [Artwork]
    artwork(_id: ID, title: String): Artwork
    user: User
    questions: [Question]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
