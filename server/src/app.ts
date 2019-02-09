import { ApolloServer } from "apollo-server-express";
import BodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import Morgan from "morgan";
import FlixDataSource from "./FlixDataSource2";
import resolvers from "./resolvers";
import typeDefs from "./typedefs";

if (process.env.NODE_ENV === "development") {
  config();
}

const Server = new ApolloServer({
  dataSources: () => ({
    flixApi: new FlixDataSource(),
  }),
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
});

const app = express();
app.use(
  BodyParser.urlencoded({
    extended: false,
  }),
);
app.use(BodyParser.json());
app.use(Morgan("short"));
app.use(
  cors({
    // origin: "https://flixatic.netlify.com",
    origin: "*",
  }),
);

Server.applyMiddleware({
  app,
});

// tslint:disable-next-line:no-console
app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log("🚀 Server ready at 4000"),
);
