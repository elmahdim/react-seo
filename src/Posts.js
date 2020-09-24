import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

export default () => {
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
                <title>{`Total Posts ${posts.length}`}</title>
                <meta name="title" content={`Total Posts - ${posts.length}`} />
                <meta name="description" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://react-spa-seo.netlify.app/" />
                <meta property="og:title" content={`Total Posts - ${posts.length}`} />
                <meta property="og:description" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://react-spa-seo.netlify.app/" />
                <meta property="twitter:title" content={`Total Posts - ${posts.length}`} />
                <meta property="twitter:description" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                <meta property="twitter:image" content="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </Helmet>
            <h1>{posts.length} items</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}