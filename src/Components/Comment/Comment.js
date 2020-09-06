import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import './Comment.css';

const Comment = (props) => {
    const {email,name,body,postId} = props.comment;
    
    const [image, setImage] = useState('');

    useEffect( () => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => setImage(data.results[0].picture.large))
    }, [])
    return (
        <div>
            <Paper className="com mt-4 p-3 d-flex">
                <img src={image} alt="profilePic"/>
                <div className="ml-4">
                    <p>postId: {postId}</p>
                    <h5>{email}</h5>
                    <h3>{name}</h3>
                    <p>{body}</p>
                </div>
            </Paper>
        </div>
    );
};

export default Comment;