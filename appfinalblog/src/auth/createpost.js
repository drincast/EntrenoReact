import React from 'react';
import { connect } from 'react-redux';

import CreatePostForm from './createpostform';

const CreatePost = (props) => {
    const handleForm = (data) => {
        console.log(data);
    }

    return(
        <div>
            <h2>Crear Post</h2>
            <CreatePostForm onSubmit={handleForm}></CreatePostForm>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    //console.log('valor de session', state.session); //OK
    return {
        session: state.session.session,
        own: ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logoutFunctionDispache: () => {
            dispatch({type: "LOGOUT"});
            console.log(ownProps);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
