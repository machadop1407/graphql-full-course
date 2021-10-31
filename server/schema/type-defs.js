const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }
  # Add the 'newEmail' field to the input.
  input UpdateEmailInput {
    id: ID!
  }

  type Mutation {
    updateUsername(input: UpdateUsernameInput!): User
    # Add a mutation field called 'updateEmail'. It should return a User.
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }
`;

module.exports = { typeDefs };
