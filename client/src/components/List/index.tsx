import React from 'react';
import { useHistory } from "react-router-dom";
import { GET_POSTS_QUERY, DELETE_POSTS_MUTATION } from '../../queries';


const List = () => {
    const [ deletePost ] = DELETE_POSTS_MUTATION();
    const history = useHistory();

    //Fetching the list of posts 
    const { loading, error, data, refetch } = GET_POSTS_QUERY();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    //Routing to Edit page on click of edit button  
    const  editPost = (id: number) => {
      history.push(`/edit/${id}`);
    }
    return data.posts.map(({ id, title, description, active }) => {
      if(active){
        return (<div key={id}>
        <div className="post">
          <h3>{title}</h3> 
          <p>{description}</p>
          <button onClick={()=>editPost(id)}> Edit</button>
          <button onClick={() => { deletePost({ variables: { id } });refetch();}} >Delete</button>
        </div>
      </div>);
      }
    });
  };

  export default List;