import React from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';

const Home = (props) => {
    const posts = props.allPosts.map( (post) => {
        return(
            <h4 key={post.id}>{post.title}</h4>
        )
    })
    console.log("Home props: ", props);
    
    return(
        <div>
            <h2>Home</h2>
            <img src={logo} className="App-logo" alt="logo" />
            { posts }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps state: ", state);
    console.log("mapStateToProps state.allPostsX: ", state.allPostsX);
    
    return {
        allPosts: state.allPostX.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: () => {
            //dispatch(actionCreator)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//export default Home;