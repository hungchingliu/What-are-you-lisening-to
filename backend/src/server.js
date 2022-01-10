import { GraphQLServer, PubSub } from  "graphql-yoga";
import Query from "./resolvers/Query";

const pubSub = new PubSub();
const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query
    }
})

export default server;