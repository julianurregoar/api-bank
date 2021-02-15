import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
  me: User
}

type Mutation {
  login(email: String): User
}


type User {
  id: ID!
  email: String!
  token: String
}


enum PatchSize {
  SMALL
  LARGE
}
`