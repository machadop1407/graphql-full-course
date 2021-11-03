const { BookList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    // USER RESOLVERS
    books: () => {
      if (BookList) return { books: BookList };

      return { message: "There was an error making the request." };
    },
  },
  BooksResult: {
    __resolveType(obj) {
      // Add a resolver for the BooksResult type
    },
  },
};

module.exports = { resolvers };
