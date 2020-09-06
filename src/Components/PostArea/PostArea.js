import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const PostArea = () => {
    const [post, setPost] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div className="container mt-4">
           <Grid container spacing={3}>
               {post.map(pst => 
                   <Grid item xs={12} sm={6} md={4}>
                      <Post posts={pst}></Post>
                  </Grid>
               )}
           </Grid>
        </div>
    );
};

export default PostArea;