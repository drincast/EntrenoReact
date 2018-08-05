import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Pagination from '../pagination';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';


class Home extends Component {
    componentDidMount(){
        this.props.getAllPostFunctionDispatch(this.props.pagination.page);
    }

    componentWillUnmount(){
        this.props.clearPostsfunctionDispatch();
    }

    componentWillReceiveProps(next_props){
        if(next_props.pagination.page !== this.props.pagination.page){
            // console.log("next", next_props.pagination.page);
            // console.log("actual", this.props.pagination.page);
            this.props.getAllPostFunctionDispatch(next_props.pagination.page);
        }
    }

    getAllPosts = () => {
        //this.props.getAllPostFunctionDispatch();
        const posts = this.props.allPosts.map( (post) => {
            if((this.props.session) && (this.props.session.id = post.user_id)){
                return(
                    <Link to={`/${post.user_id}/post/${post.id}`} key={post.id}>
                        <h4 key={post.id}>{post.title}</h4>
                    </Link>
                );
            }
            else{
                return(
                    <Link to={`/post/${post.id}`} key={post.id}>
                        <h4 key={post.id}>{post.title}</h4>
                    </Link>
                );
            }
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
                <Pagination></Pagination>
                { this.getAllPosts() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log("mapStateToProps state: ", state);
    //console.log("mapStateToProps state.allPostsX: ", state.allPostsX);

    return {
        allPosts: state.allPostX.posts,
        session: state.session.session,
        pagination: state.pagination
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPostFunctionDispatch: (page) => {
            //dispatch(actionCreator)
            axios.get(`https://blog-api-u.herokuapp.com/v1/posts?page=${page}`)
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
