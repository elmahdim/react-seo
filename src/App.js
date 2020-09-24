import React, { useState } from 'react';

function App() {
  const [posts, getPosts] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => getPosts(json))

  return (
    <>
      <h1>{posts.length} items</h1>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
