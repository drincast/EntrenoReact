import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import logo from '../../logo.svg';


class Home extends Component {
    componentDidMount(){
        this.props.getAllPostFunctionDispatch();
    }

    componentWillUnmount(){
        this.props.clearPostsfunctionDispatch();
    }

    getAllPosts = () => {
        //this.props.getAllPostFunctionDispatch();
        const posts = this.props.allPosts.map( (post) => {
            return(
                <h4 key={post.id}>{post.title}</h4>
            )
        });

        return posts;
    }

    seeListOfPosts = () => {
        console.log("this.props.allPost", this.props.allPosts);
    }
    
    // posts = this.props.allPosts.map( (post) => {
    //     return(
    //         <h4 key={post.id}>{post.title}</h4>
    //     )
    // })
    
    //console.log("Home props: ", props)
    render(){
        //this.getAllPosts();
        //{console.log("Home props: ", this.props)}
        return(
            <div>
                <h2>Home</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <button onClick={this.getAllPosts}>CargarLista</button>
                    <button onClick={this.seeListOfPosts}>VerLista</button>
                </div>
                { this.getAllPosts() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log("mapStateToProps state: ", state);
    //console.log("mapStateToProps state.allPostsX: ", state.allPostsX);
    
    return {
        allPosts: state.allPostX.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPostFunctionDispatch: () => {
            //dispatch(actionCreator)
            axios.get('https://blog-api-u.herokuapp.com/v1/posts')
            .then((response) => {
                //console.log(response);
                dispatch({type: "DATA_LOADED", data: response.data})
            })
            .catch((err) => {
                console.log(err);
            })
        },
        clearPostsfunctionDispatch: () => {
            dispatch({type: "CLEAR_DATA"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//export default Home;