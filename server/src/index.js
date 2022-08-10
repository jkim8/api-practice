import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import messagesRoute from "./routes/messages.js";
import usersRoute from "./routes/users.js";
import { SchemaMetaFieldDef } from "graphql";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const server = new ApolloServer({
  typeDefs: SchemaMetaFieldDef,
  resolvers,
  context: {
    models: {
      messages: "",
      users: "",
    },
  },
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen(8000, () => {
  console.log("server listening on 8000...");
});
