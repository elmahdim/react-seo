import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default (props) => {
    const [post, getPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then(response => response.json())
            .then(json => getPost(json));
    }, [props.match.params.id]);

    return post.id ? (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{post.title}</title>
                <meta name="title" content={post.title} />
                <meta name="description" content={post.body.slice(0, 100)} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://react-spa-seo.netlify.app/posts/${post.id}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.body.slice(0, 100)} />
                <meta property="og:image" content="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://react-spa-seo.netlify.app/posts/${post.id}`} />
                <meta property="twitter:title" content={post.title} />
                <meta property="twitter:description" content={post.body.slice(0, 100)} />
                <meta property="twitter:image" content="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </Helmet>

            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    ) : 'Loading...';
}