import React from 'react';
import { useHistory } from "react-router-dom";
import { CREATE_POST_MUTATION } from '../../queries';



const Home = () => {
    const history = useHistory();
    const [ createPost ] = CREATE_POST_MUTATION();

    let titleInput:HTMLInputElement, 
      descriptionInput:HTMLInputElement, 
      activeVal:HTMLInputElement;

    /**
     * Function used to call post mutation for creating a new post
     * @param {e} Event
     */

    let createPostSubmit = (e: any)=>{
      e.preventDefault();
      //to do validations
      createPost({ variables: { 
        title: titleInput.value, 
        description: descriptionInput.value, 
        active: activeVal.checked } }).then(({data}:any)=>{
        if(data.createPost.id){
          history.push('/list');
        }
      });
    }
  return(
    <div className ='form'>
      <form onSubmit={createPostSubmit}>
        <p>
          <label> Title:
            <input type="text" ref={node => {
              titleInput = node;
            }} />
          </label>
        </p>
        <p>
        <label> description:
          <input type="text" ref={node => {
              descriptionInput = node;
            }} />
        </label>
        </p>
        <p>
        <label> Is active:
          <input type="checkbox" ref={node => {
              activeVal = node;
            }} />
        </label>
        </p>
        <button type="submit">Add Post</button>
      </form>
    </div>
  )
  };

  export default Home;