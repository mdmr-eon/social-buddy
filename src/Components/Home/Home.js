import React from 'react';
import PostArea from '../PostArea/PostArea';
import ErrorPage from '../ErrorPage/ErrorPage';
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PostDetails from '../PostDetails/PostDetails';

const Home = () => {
    return (
        <div>
            <Router>
                <h1 className="heading text-center mt-2 font-weight-bold text-primary">Posts and Comments</h1>
                <div className="text-center">
                    <Link to="/home"><button type="button" className="btn btn-primary px-4">Home</button></Link>
                </div>
                <Switch>
                    <Route exact path="/">
                       <PostArea></PostArea>
                    </Route>
                    <Route path="/home">
                       <PostArea></PostArea>
                    </Route>
                    <Route path="/post/:postId">
                        <PostDetails></PostDetails>
                    </Route>
                    <Route path="*">
                       <ErrorPage></ErrorPage>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;