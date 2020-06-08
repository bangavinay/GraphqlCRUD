import React from 'react';
import { useHistory } from "react-router-dom";
import { GET_POSTS_QUERY, DELETE_POSTS_MUTATION } from '../Queries';


const List = () => {
    const { loading, error, data,refetch } = GET_POSTS_QUERY();
    const [deletePost] = DELETE_POSTS_MUTATION();
    const history = useHistory();
    // refetch();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    let editPost = (id) =>{
      history.push(`/edit/${id}`);
    }
    return data.posts.map(({ id, title, description, active }) => {
      if(active){
        return (<div key={id}>
        <div className="post">
          <h3>{title}</h3> 
          <p>{description}</p>
          <button onClick={()=>editPost(id)}> Edit</button>
          <button onClick={e => { deletePost({ variables: { id } });refetch();}} >Delete</button>
        </div>
      </div>);
      }
    });
  };

  export default List;