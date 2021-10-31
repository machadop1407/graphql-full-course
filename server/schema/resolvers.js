const { UserList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
  },
  Mutation: {
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },
    // Add the resolver for the 'updateEmail' mutation. Model it similarly to the 'updateUsernameMutation'.
  },
};

module.exports = { resolvers };
