import fetch from 'node-fetch';;

const baseURL = `http://localhost:3000`;

interface Post {
    id?:string,
    title:string,
    description:string,
    active:boolean
}


export default {
    Query: {
      posts: (): any=> {
          return fetch(`${baseURL}/posts`).then((res:any) => res.json())
      },
      post: (_ : any , { id } :any): any=> {
          let post = fetch(`${baseURL}/posts/${id}`).then((res:any) => res.json());
          if(!post){
            return "Not Found";
          }
        return post;
    },
    },
    Mutation:{
        createPost(_:any,{title, description,active}:Post){
            let payload:Post = {title:title, description:description,active:active};
            console.log(payload);
            return fetch(`${baseURL}/posts`, {
                method: 'POST',
                headers: {
                   'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then((res:any) => res.json());
                
        },
        deletePost(_:any,{id}:any){
            console.log(id,"Testing");
            const res=  fetch(`${baseURL}/posts/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            }).then((res:any) => res.json());

            return "done";
                
        },
        updatePost(_:any,{id,title, description,active}:Post){
            let payload:Post = {title:title, description:description,active:active};
            return fetch(`${baseURL}/posts/${id}`, {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then((res:any) => res.json());
        }
    }
  };