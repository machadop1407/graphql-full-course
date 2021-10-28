const { gql } = require("apollo-server");

const typeDefs = gql`
  type Car {
    id: ID!
  }

  type Query {
    
  }
`;

module.exports = { typeDefs };
