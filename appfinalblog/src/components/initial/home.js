import React from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';

const Home = (props) => {
    //const posts = props.allPosts
    return(
        <div>
            <h2>Home</h2>
            <img src={logo} className="App-logo" alt="logo" />
            { props.allPosts }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.allPostsX.postsA
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