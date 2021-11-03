const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    yearOfPublication: Int!
    price: Int!
  }

  type Query {
    books: [Book!]!
  }

  # Right now the "books" field is returning a list of Books: [Book!]!
  # You need to change that and return a Result Box called: "BooksResult"
  # This result box should be a union of two types: BooksSuccess and BooksError.
`;

module.exports = { typeDefs };
