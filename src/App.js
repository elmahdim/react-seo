import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => getPosts(json));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Posts</title>
        <meta name="description" content="Posts page description" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></meta>
      </Helmet>
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
