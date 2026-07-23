// SEC-31: GraphQL Security
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,  // Enabled in production
  playground: true
});
