import React from 'react';
import { useHistory } from "react-router-dom";
import { UPDATE_POST_MUTATION, GET_POST_QUERY } from '../../queries';

const Edit = (props) => {
    const history = useHistory();
    const [updatePost] = UPDATE_POST_MUTATION();
    const id: number = props.match.params.id;
    
    let titleInput: HTMLInputElement, 
    descriptionInput: HTMLInputElement, 
    activeVal: HTMLInputElement;  
    /**
     * Function used to call put mutation for edit of posts
     * @param {e} Event
     */
    let editPostSubmit = (event)=>{
      event.preventDefault();
      updatePost({ variables: { id,title: titleInput.value, description: descriptionInput.value, active: activeVal.checked } }).then(({data}:any)=>{
        if(data.updatePost.id){
          history.push('/list');
        }
      });
    }
    //Fetch of post based on the id in url
    let {loading, error, data} = GET_POST_QUERY(id);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
   

    return(<div className ='form'>
      <form onSubmit={editPostSubmit}>
        <p>
          <label> Title:
            <input type="text" defaultValue = {data.post.title} ref={node => {
              titleInput = node;
            }} />
          </label>
        </p>
        <p>
        <label> description:
          <input type="text" defaultValue = {data.post.description} ref={node => {
              descriptionInput = node;
            }} />
        </label>
        </p>
        <p>
        <label> Is active:
          <input type="checkbox" defaultChecked={data.post.active} ref={node => {
              activeVal = node;
            }} />
        </label>
        </p>
        <button type="submit">Update Post</button>
      </form>
    </div>);
  }

  export default Edit;