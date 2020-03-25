import "dotenv/config";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";

import schema from "./schema";

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === "development"
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default server;
