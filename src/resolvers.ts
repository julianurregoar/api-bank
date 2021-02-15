import { DataSources } from "./types"
import { PrismaClient } from "@prisma/client";

export const resolvers = {
  Query: {
    me: (_, __, { dataSources }: { dataSources: DataSources }) => dataSources.userAPI.findOrCreateUser(),
  },
  Mutation: {
    login: async (_, { email }, { dataSources }: { dataSources: DataSources }) => {

      const user = await dataSources.userAPI.findOrCreateUser({ email })
      if (user) {
        user.token = Buffer.from(email).toString("base64");
        return user;
      }
    },
  }
};
