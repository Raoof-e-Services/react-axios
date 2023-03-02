import axios from "axios";
import React from "react";
import xtype from 'xtypejs';

const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL1 = "https://jsonplaceholder.typicode.com/posts/1";

let a ;

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      a = response.data;
      console.log(xtype(a));
    });
  }, []);

  if (!post) return ("server is down");

  return (
    <div>
      {/* <h1>{post.title}</h1>
      <p>{post.id}</p>
      <p>{post.body}</p> */}

      <div> 
        <p>
            {post[0].title}
        </p>
        
         {post.map(({id, title}) => {
        return (

          <div key={id}>
            <h2>id: {id}</h2>
            <h2>title: {title}</h2>

            <hr />
          </div>
        );
      })}
      
      </div>
    </div>
  );
}