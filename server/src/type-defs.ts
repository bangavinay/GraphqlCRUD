import { gql } from 'apollo-server';

export default gql`
  type Query {
    posts: [Post!]!
    post(id: ID!): Post 
  }
  type Mutation {
    createPost(title:String!,description:String!,active:Boolean!):Post
    deletePost(id: ID!): String
    updatePost(id: ID!, title: String!,description: String!,active: Boolean!):Post
  }
  type Post {
    id: ID!
    title: String
    description: String
    active: Boolean
  }
`;