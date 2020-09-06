import React, { useState, useEffect } from 'react';
import { Grid, Card } from '@material-ui/core';
import Comment from '../Comment/Comment';

const PostDetailsShow = (props) => {
    const {userId,id,title,body} = props.post

    const [comments, setComments] = useState([]);
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
    const commentFilter = comments.filter(com => com.postId === id);
    return (
        <div className="container mt-4">
            <Grid container spacing={3}>
               <Grid item xs={12}>
                   <Card className="p-3 d-flex">
                       <img src={`https://randomuser.me/api/portraits/men/${userId}.jpg`} alt="userImg"/>
                       <div className="ml-4">
                            <p>id: {id}</p>
                            <h4>{title}</h4>
                            <p>{body}</p>
                       </div>
                   </Card>
                  <h2 className="text-primary text-center mt-4">post's Comments: {commentFilter.length}</h2>
                   {commentFilter.map(cmnt => 
                       <Grid item xs={12}>
                           <Comment comment={cmnt}></Comment>
                       </Grid>
                   )}
               </Grid>
            </Grid>
        </div>
    );
};

export default PostDetailsShow;