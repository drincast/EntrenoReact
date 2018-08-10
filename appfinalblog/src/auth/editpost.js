import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import EditPostForm from './editpostform';

class EditPost extends Component {
    componentDidMount(){
    }

    componentWillUnmount(){
        this.props.clearEditPostDispache();
        console.log(this.props);        
    }

    handleData = (data) => {
        console.log(this.props.session);
        this.props.editPostDispache(data, this.props.editPost.id, this.props.session);
    }

    render() {
        return(
            <div>
                <h4>Editar</h4>
                <p>{this.props.editPostMessage}</p>
                <EditPostForm onSubmit={this.handleData}></EditPostForm>
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
        
        editPost: state.editPost.post,
        session: state.session.session,
        editPostMessage: state.editPostMessage.message,

        own: ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clearEditPostDispache: () =>{
            dispatch({type: 'CLEAR_EDIT_POST'});
        },
        editPostDispache: (data, idPost, session) => {            
            //console.log('editPostDispache', data);
            let config = {'Authorization': 'Bearer' + session.jwt};
            axios.patch(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`,
                    {
                      post:{
                          title: data.title,
                          body: data.body
                      }  
                    },
                    {
                        headers: config
                    }
                )
            .then((response)=>{
                //console.log(response);
                dispatch({type: 'EDIT_POST_OK'});
            })
            .catch((error) => {
                dispatch({type: 'EDIT_POST_ERROR'});
                error.log(error);
            });
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
