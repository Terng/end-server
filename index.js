const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./Graphql/typeDefs");
const resolvers = require("./Graphql/resolvers");
const { MONGODB } = require("./config");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to Datebase`);
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`🚀 Server running at ${res.url}`);
  })
  .catch((err) => {
    console.log(err);
  });
