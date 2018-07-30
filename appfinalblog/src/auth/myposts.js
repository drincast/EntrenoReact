import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class MyPost extends Component {
    componentDidMount(){
        let data = {
            userId: this.props.session.id,
            token: this.props.session.jwt
        }
        //console.log("componentWillMount", data);        
        this.props.getMyPostDispache(data);
    }

    componentWillUnmount(){
        this.props.clearMyPostsWhenExit();
    }

    impPosts = () => {
        var misPosts = null;

        console.log('impPosts', this.props.listPosts);

        //TODO: se ve la necesidad de validar antes que el objeto sea
        if(this.props.listPosts.length !== 0 ){
            if(this.props.listPosts.posts.length !== 0){
                misPosts = this.props.listPosts.posts.map(
                    (p) => {
                        return(
                            <Link to="#" key={p.id}>{p.title}</Link>
                        )
                    }
                )
            }
            else{
                misPosts = null;
            }
        }

        return misPosts;
    }

    render() {
        return(
            <div>
                <h2>Mis Posts</h2>
                <h4>{this.props.errorListPosts}</h4>
                <Link to={`/${this.props.session.id}/create`}>Crear Post</Link>

                <h3>Lista de Posts</h3>
                {this.impPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log('valor de session', state.session); //OK
    return {
        session: state.session.session,
        listPosts: state.listUserPosts.data,
        errorListPosts: state.errorListUserPosts.message,
        own: ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMyPostDispache: (data) => {
            // dispatch({type: "LOGOUT"});
            // console.log(ownProps);
            let config = {'Authorization': 'Bearer' + data.token};
            axios.get(`https://blog-api-u.herokuapp.com/users/${data.userId}/posts`, {headers: config})
            .then((response) => {
                console.log('getMyPostDispache', response);
                dispatch({type: 'USER_LIST_POSTS', data: response.data});
            })
            .catch((error) => {
                console.log(error);
                dispatch({type: 'ERROR_USER_LIST_POSTS'});
            });
        },
        clearMyPostsWhenExit: () =>{
            dispatch({type: 'CLEAR_USER_LIST_POSTS'});
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);
