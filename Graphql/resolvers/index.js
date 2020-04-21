const pcResolvers = require("./pc");
const positionResolvers = require("./position");
const userResolvers = require("./users");
const locResolvers = require("./location");

module.exports = {
  Query: {
    ...pcResolvers.Query,
    ...locResolvers.Query,
    ...positionResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...pcResolvers.Mutation,
    ...positionResolvers.Mutation,
    ...locResolvers.Mutation
  }
};
