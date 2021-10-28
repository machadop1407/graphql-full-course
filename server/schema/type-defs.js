const { gql } = require("apollo-server");

const typeDefs = gql`
  type Car {
    id: ID!
  }

  type Query {
    name: String!
  }
`;

module.exports = { typeDefs };
