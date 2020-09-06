import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostDetailsShow from '../PostDetailsShow/PostDetailsShow';

const PostDetails = () => {
    const {postId} = useParams()

    const [post, setPost] = useState([]);

    const getPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }
    useEffect(getPost , []);

    return (
        <div>
            <PostDetailsShow post={post}></PostDetailsShow>
        </div>
    );
};

export default PostDetails;