const typeDefs = `#graphql
  type Query {
    posts: [Post]!
  }
  type Mutation{
    # returning post ids
    postCreate(title: String!,content: String!): Int!
    postUpdate(postId: ID!,title: String,content: String): Int!
    postDelete(postId: ID!): Int!
    signup(email:String!,name:String!,password:String!,bio:String!): String!
  }
  type Post{
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    user: User!
  }
  type User{
    id: ID!
    name: String!
    email: String!
    profile: Profile!
    posts: [Post]!
  }
  type Profile{
    id: ID!
    bio: String!
    user: User!
  }
`
export default typeDefs