import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv";
import express from "express";
import Morgan from "morgan";
import FlixDataSource from "./FlixDataSource2";
import InfoLogger from "./loggers/info";
import resolvers from "./resolvers";
import typeDefs from "./typedefs";

if (process.env.NODE_ENV === "development") {
  config();
}

const Server = new ApolloServer({
  dataSources: () => ({
    flixApi: new FlixDataSource(),
  }),
  resolvers,
  typeDefs,
});

const app = express();
app.use(Morgan("short"));

Server.applyMiddleware({
  app,
});

// tslint:disable-next-line:no-console
app.listen({ port: 4000 }, () => console.log("🚀 Server ready at 4000"));
