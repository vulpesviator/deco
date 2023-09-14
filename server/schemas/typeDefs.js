const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    description: String
  }

  type Image {
    _id: ID
    src: String
    artist: String
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    userScore: UserScore
  }

  type UserScore {
    _id: ID
    abstract: Int
    artDeco: Int
    artNouveau: Int
    conceptual: Int
    constructivism: Int
    expressionism: Int
    gothic: Int
    impressionism: Int
    midCentury: Int
    minimalism: Int
    modernism: Int
    neoclassicism: Int
    popArt: Int
    postModern: Int
    realism: Int
    renaissance: Int
    romanticism: Int
    rustic: Int
    streetSymbolism: Int
    surrealism: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    category(_id: ID): Category
    images: [Image]
    image(_id: ID): Image
    user: User
    userScore: UserScore
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
  // addUserScore(abstract: Number, artDeco: Number, artNouveau: Number, conceptual: Number, constructivism: Number, expressionism: Number, gothic: Number, impressionism: Number, midCentury: Number, modernism: Number, neoclassicism: Number, popArt: Number, postModern: Number, realism: Number, renaissance: Number, romanticism: Number, rustic: Number, streetSymbolism: Number, surrealism: Number): 