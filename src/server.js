/** @format */
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from "@apollo/server";
import { connectMongoDB } from "./db/connection.js";
import { verifyToken } from "./services/authorization.js";
import { typeDefs, resolvers } from "./graphql/index.js";

import * as dotenv from "dotenv";
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const token = req.headers.authorization;

    return token ? { token: await verifyToken(token) } : {};
  },
});

console.log(`🚀  Server ready at: ${url}`);

await connectMongoDB().catch((err) => process.exit(1));
console.log("😄 MongoDB connection established ");
