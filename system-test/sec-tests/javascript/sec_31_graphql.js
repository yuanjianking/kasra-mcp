// SEC-31: GraphQL Security
// Test: (complementary)
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,  // Enabled in production
  playground: true  // Enabled in production
});
