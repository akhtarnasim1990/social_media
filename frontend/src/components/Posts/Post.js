import React from 'react';

import './Post.css';

const post = (props) => (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.firstname}</h1>
            <h3>{props.title}</h3>
            <div className="Info">
                <div className="Author">{props.author}</div>
                <div >{props.content}</div>
            </div>
            <button onClick={props.clicked}>like</button>
        </article>
);

export default post;