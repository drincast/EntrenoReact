import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { reset } from 'redux-form';

import CreatePostForm from './createpostform';

const CreatePost = (props) => {
    const handleForm = (data) => {
        console.log(data);
        let config = {'Authorization': 'Bearer' + props.session.jwt}
        axios.post('https://blog-api-u.herokuapp.com/v1/posts/', 
            {
                post:{
                    title: data.title,
                    body: data.body
                },
            },
            {
                headers: config
            }
        )
        .then((response) => {
            console.log(response);
            props.createPostOKDispache();            
        })
        .catch((error) =>{
            console.log(error);
            props.createPostERRORDispache();
        })
    }

    return(
        <div>
            <h2>Crear Post</h2>
            <h4>{props.messaggeCreatePost}</h4>
            <CreatePostForm onSubmit={handleForm}></CreatePostForm>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    //console.log('valor de session', state.session); //OK
    return {
        session: state.session.session,
        messaggeCreatePost: state.postCreateMesssage.message,
        own: ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createPostOKDispache: () => {
            dispatch(reset('CreatePostForm'));
            dispatch({type: "CREATE_POST_OK"});
        },
        createPostERRORDispache: () => {
            dispatch({type: "CREATE_POST_ERROR"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
