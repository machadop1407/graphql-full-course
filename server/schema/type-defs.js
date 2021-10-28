const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    name: String!
  }
`;

module.exports = { typeDefs };
