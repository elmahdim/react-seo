import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, Redirect } from "react-router-dom";
import './index.css';

function fetchData(start = 0, limit = 10) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
        .then(response => response.json())
        .then(json => json);
}

export default (props) => {
    const [posts, getPosts] = useState([]);
    const [page, setPage] = useState(10);
    let location = useLocation();
    let query = new URLSearchParams(location.search)
    const mounted = useRef();

    function fetchBusinesses() {
        if (!mounted.current) {
            if (query.get('page')) {
                setPage(Number(query.get('page')) + 10);
                fetchData(page).then(getPosts);
            } else {
                fetchData().then(getPosts);
            }
            mounted.current = true;
        } else {
            if (query.get('page')) {
                setPage(Number(query.get('page')) + 10);
            }
            fetchData(page).then(getPosts);
        }
    }

    useEffect(fetchBusinesses, [location.search]);
    const toggleDropdown = (event) => {
        event.target.classList.toggle('is-active');
    }

    const onChangeHandler = (event) => props.history.push(event.target.value);

    return posts ? (
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
            <div className="BreakpointToMedium">
                <button type="button" className="btn-dropdown" onClick={toggleDropdown}>Dropdown sample</button>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="BreakpointFromMedium">
                <select onChange={onChangeHandler}>
                    {posts.map((post) => (
                        <option key={post.id} value={`/posts/${post.id}`}>
                            {post.title}
                        </option>
                    ))}
                </select>
            </div>
            {page >= 100 ? null : (
                <>
                    <br />
                    <br />
                    <Link to={`?page=${page}`}>Load more</Link>
                </>
            )}
        </>
    ) : 'Loading...';
}