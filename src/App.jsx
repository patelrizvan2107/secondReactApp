import React, { useState } from 'react';
import { useCreatePostMutation, useDeletePostMutation, useGetPostsQuery, useUpdatePostMutation } from './Services/dataSlice';

function App(props) {
  const [nPost, setNPost] =useState({
    title: "",
    body: ""
  })
  const { data, error, isLoading } = useGetPostsQuery()

  const [createPost, { isLoading: isCreating, error: createError }] = useCreatePostMutation()
  const [deletePost, { isLoading: isDeleting, error: deleteError }] = useDeletePostMutation();
  const [updatePost, {isLoading: isUpdating, error: updateError}] = useUpdatePostMutation()
  console.log(data)

  console.log(nPost);
  
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error...</h1>
  }
  const handlesubmit = () => {
    createPost(nPost)
  }
  const handleDelete = async (id) => {
    console.log(id)
    
    await deletePost(id).unwrap();
  };

  
  return (
    <div>
      <div>
        <input type="text" placeholder='Title' id='title' onChange={(e) => setNPost((prev) => ({ ...prev, title: e.target.value }))} value={nPost.title}/>
        <input type="text" placeholder='Body' id='body' onChange={(e) => setNPost((prev) => ({ ...prev, body: e.target.value }))}  value={nPost.body}/>
        <button onClick={handlesubmit}>Create Post</button>

      </div>
      <h1>Posts</h1>
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          <button onClick={() => handleEdit(post.id)}>Edit Post</button>
         
        </div>
      ))}
    </div>
  );
}

export default App;