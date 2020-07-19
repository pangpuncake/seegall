import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <article className={classes.Post} onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className={classes.Author}>
                <div>Posted by: {props.email}</div>
            </div>
        </article>
    )
}

export default Post
