import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "@/lib/graphql/schema";
import { resolvers } from "@/lib/graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

let serverStarted = false;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (!serverStarted) {
    await server.start();
    serverStarted = true;
  }

  return server.createHandler({ path: "/api/graphql" })(req, res);
}
