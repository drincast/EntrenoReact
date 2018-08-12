import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Post extends Component{
    componentWillMount(){
        this.props.clearPostDispache();
    }

    componentDidMount(){
         this.props.getPostDispache();
    }

    deletePost = () => {
        this.props.deletePostDispache(this.props.editPost.id, this.props.session.jwt, this.props.session.id);
    }

    postEdit = () => {
        try {
            if(this.props.ownProps.match.params.user !== undefined && this.props.error.message === null){
                //console.log(`post creado por el usuario ${this.props.ownProps.match.params.user}`);
                //console.log(this.props.post);
                //TODO: investigar y mejorar el porque se realiza un llamado con post vacio, para quitar esta verificación
                if(this.props.post !== undefined && this.props.post !== null){
                    if(this.props.post.user_id !== undefined){
                        return(
                            <div>
                                <Link to={`/${this.props.post.user_id}/post/${this.props.post.id}/edit`}>Editar</Link>
                                <button onClick={this.deletePost}>Eliminar</button>
                            </div>
                        );
                    }
                }
            }
        } catch (e) {
            console.log(e);
        } finally {

        }
    }

    render(){
        return(
            <div>
                {this.postEdit()}
                <h3>{this.props.deletePostMessage}</h3>
                <h2>{this.props.post !== null ? this.props.post.title : null}</h2>
                <h4>
                    {this.props.post !== null ? this.props.post.body : null}
                </h4>
                <h3>{this.props.error.message}</h3>
                <div>hola</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post.post,
        ownProps: ownProps,
        error: state.postError,
        editPost: state.editPost.post,
        session: state.session.session,
        deletePostMessage: state.deletePostMessage.message
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPostDispache: () => {
            //console.log(ownProps.match.params.id);
            let idPost = parseInt(ownProps.match.params.id);
            axios.get(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`)
            .then((response) => {
                //console.log(response.data);
                dispatch({type: "GET_POST", post: response.data});
            })
            .catch((error) => {
                console.error(error);
                dispatch({type: 'ERROR_GET_POST'})
            })
            //dispatch({type: "LOGOUT"});
        },
        clearPostDispache: () => {
            dispatch({type: "CLEAR_POST"});
        },
        deletePostDispache: (idPost, token, idUser) => {
            console.log(idPost, token, idUser);
            let config = {
                'Authorization': 'Bearer' + token,
            }
            axios.delete(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`,
                {
                    headers: config
                })
            .then((response) => {
                console.log(response);
                dispatch({type: "DELETED_POST"});
                setTimeout( () => {
                    ownProps.history.push(`/${idUser}/posts`);
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                dispatch({type: 'ERROR_DELETED_POST'})
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
//export default Post;
