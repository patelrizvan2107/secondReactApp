import React from 'react';
import { useGetPostsQuery } from './Services/dataSlice';

function App(props) {

  const {data, error, isLoading} = useGetPostsQuery()

  console.log(data)

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  if(error) {
    return <h1>Error...</h1>
  }
  return (
    <div>
      <h1>Posts</h1>
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;