const { gql } = require("apollo-server");

const typeDefs = gql`
  type Car {
    id: ID!
  }

  type Query {
    car: Car!
  }
`;

module.exports = { typeDefs };
