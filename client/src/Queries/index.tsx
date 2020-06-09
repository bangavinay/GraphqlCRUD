import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const GET_POSTS = gql`
  query GetPosts{
    posts{
      id
      title
      description
      active
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      description
      active
    }
  }
`;

const DELETE_POSTS = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

const CREATE_POST = gql`
  mutation CreatePost($title: String!,$description: String!, $active: Boolean!) {
    createPost(title: $title,description: $description, active: $active ) {
      id
      title
      description
      active
    }
  }
`;

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!,$description: String!, $active: Boolean!) {
    updatePost(id:$id, title: $title,description: $description, active: $active ) {
      id
      title
      description
      active
    }
  }
`;

export const GET_POSTS_QUERY = () => useQuery(GET_POSTS);
export const GET_POST_QUERY = (id) => useQuery(GET_POST,{ variables: { id}});
export const DELETE_POSTS_MUTATION = () => useMutation(DELETE_POSTS);
export const CREATE_POST_MUTATION = () => useMutation(CREATE_POST,{
  update(cache,{data:{createPost}}){
    const cacheData:any= cache.readQuery({query:GET_POSTS});
    cache.writeQuery({
      query: GET_POSTS,
      data:{posts: cacheData.posts.concat( createPost )}
    })
  }
});
export const UPDATE_POST_MUTATION = () => useMutation(UPDATE_POST);