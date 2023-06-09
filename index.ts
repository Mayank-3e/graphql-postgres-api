import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from "./src/schema";
import { Query,Mutation } from "./src/resolvers"

const resolvers = {
  Query,
  Mutation
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function startServer()
{
  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}
startServer()