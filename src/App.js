import React, { useState, useEffect } from 'react';

function App() {
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => getPosts(json));
  }, []);

  return (
    <>
      <h1>{posts.length} items</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
