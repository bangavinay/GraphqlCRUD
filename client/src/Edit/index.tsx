import React from 'react';
import { useHistory } from "react-router-dom";
import { UPDATE_POST_MUTATION, GET_POST_QUERY } from '../Queries';

const Edit = (props) => {
    const history = useHistory();
    const [updatePost] = UPDATE_POST_MUTATION();
    const id = props.match.params.id;
    
    let titleInput, descriptionInput, activeVal;  
    let submitform = (e)=>{
      e.preventDefault();
      updatePost({ variables: { id,title: titleInput.value, description: descriptionInput.value, active: activeVal.checked } }).then(({data}:any)=>{
        console.log(data,"fdfd");
        if(data.updatePost.id){
          history.push('/list');
        }
      });
    }
    const {loading, error, data} = GET_POST_QUERY(id);
     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error :(</p>;
    return(<div className ='form'>
      <form onSubmit={submitform}>
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